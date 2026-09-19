import { useEffect } from "react";

const SITE_URL = "https://ammarco.com.pk";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const Seo = ({ title, description, path, image, jsonLd }: SeoProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image?.startsWith("http") ? image : `${SITE_URL}${image || "/logo-ammarco.png"}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, image]);

  if (!jsonLd) {
    return null;
  }

  const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
};

export default Seo;
export { SITE_URL };
