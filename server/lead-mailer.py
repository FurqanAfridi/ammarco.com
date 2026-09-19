#!/usr/bin/env python3
import json
import os
import ssl
import smtplib
import time
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Dict, List
from urllib.parse import urlparse

HOST = os.environ.get("LEAD_HOST", "127.0.0.1")
PORT = int(os.environ.get("LEAD_PORT", "3847"))
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.hostinger.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ.get("SMTP_USER", "ammar@ammarco.com.pk")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
SMTP_FROM = os.environ.get("SMTP_FROM", SMTP_USER)
SMTP_TO = os.environ.get("SMTP_TO", "ammarco.pk@gmail.com")
MAX_BODY = 32_768
RATE_LIMIT = 8
RATE_WINDOW = 600
hits: Dict[str, List[float]] = {}


def clean(value, limit=500):
    text = " ".join(str(value or "").split())
    return text[:limit]


def send_lead(data, client_ip):
    if not SMTP_PASSWORD:
        raise RuntimeError("SMTP is not configured")

    name = clean(data.get("name"), 120)
    email = clean(data.get("email"), 160)
    phone = clean(data.get("phone"), 80)
    company = clean(data.get("company"), 160) or "N/A"
    project_type = clean(data.get("projectType"), 120)
    location = clean(data.get("projectLocation"), 160) or "N/A"
    budget = clean(data.get("budget"), 80) or "N/A"
    timeline = clean(data.get("timeline"), 80) or "N/A"
    message = str(data.get("message") or "").strip()[:4000]

    if not name or not email or "@" not in email or not phone or not project_type or not message:
        raise ValueError("Missing required fields")

    body = "\n".join(
        [
            f"Name: {name}",
            f"Email: {email}",
            f"Phone: {phone}",
            f"Company/Organization: {company}",
            f"Project Type: {project_type}",
            f"Project Location: {location}",
            f"Estimated Budget: {budget}",
            f"Project Timeline: {timeline}",
            f"Source IP: {client_ip}",
            "",
            "Message:",
            message,
        ]
    )

    msg = EmailMessage()
    msg["Subject"] = f"Website lead from {name} ({project_type})"
    msg["From"] = SMTP_FROM
    msg["To"] = SMTP_TO
    msg["Reply-To"] = email
    msg.set_content(body)

    context = ssl.create_default_context()
    if SMTP_PORT == 465:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context, timeout=25) as smtp:
            smtp.login(SMTP_USER, SMTP_PASSWORD)
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=25) as smtp:
            smtp.starttls(context=context)
            smtp.login(SMTP_USER, SMTP_PASSWORD)
            smtp.send_message(msg)


class LeadHandler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return

    def _client_ip(self):
        forwarded = self.headers.get("X-Forwarded-For", "")
        if forwarded:
            return forwarded.split(",")[0].strip()
        return self.client_address[0]

    def _json(self, status, payload):
        raw = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        if urlparse(self.path).path != "/api/lead":
            self._json(404, {"ok": False, "error": "Not found"})
            return
        self._json(200, {"ok": True})

    def do_POST(self):
        if urlparse(self.path).path != "/api/lead":
            self._json(404, {"ok": False, "error": "Not found"})
            return

        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0 or length > MAX_BODY:
            self._json(413, {"ok": False, "error": "Request too large"})
            return

        client_ip = self._client_ip()
        now = time.time()
        recent = [stamp for stamp in hits.get(client_ip, []) if now - stamp < RATE_WINDOW]
        if len(recent) >= RATE_LIMIT:
            hits[client_ip] = recent
            self._json(429, {"ok": False, "error": "Please wait before sending another inquiry."})
            return

        try:
            data = json.loads(self.rfile.read(length).decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self._json(400, {"ok": False, "error": "Invalid request"})
            return

        if clean(data.get("website"), 80):
            self._json(200, {"ok": True})
            return

        try:
            send_lead(data, client_ip)
        except ValueError:
            self._json(400, {"ok": False, "error": "Please complete the required fields."})
            return
        except Exception:
            self._json(502, {"ok": False, "error": "Could not send the inquiry."})
            return

        recent.append(now)
        hits[client_ip] = recent
        self._json(200, {"ok": True})


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), LeadHandler)
    server.serve_forever()
