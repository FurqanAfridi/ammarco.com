"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    items: [
      { title: "All Services", href: "/services" },
      { title: "Interior & Exterior Design", href: "/services/interior" },
      { title: "Civil Construction", href: "/services/civil" },
      { title: "Electrical Works", href: "/services/electrical" },
      { title: "Plumbing Services", href: "/services/plumbing" },
      { title: "HVAC Systems", href: "/services/hvac" },
      { title: "Firefighting & Alarms", href: "/services/firefighting" },
      { title: "CCTV & Security", href: "/services/security" },
      { title: "Solar Panels", href: "/services/solar" },
      { title: "Generators & UPS", href: "/services/generators" },
      { title: "Data Networking", href: "/services/networking" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Our Projects", href: "/projects" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
];

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSection(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setOpenSection(null);
      }
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <>
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-background/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex min-h-16 items-center justify-between gap-3 py-2 sm:min-h-20">
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigationItems.map((item) =>
            item.href ? (
              <Button
                key={item.title}
                variant="ghost"
                className={`font-bold hover:bg-muted hover:text-foreground ${
                  location.pathname === item.href ? "text-secondary" : "text-foreground"
                }`}
                asChild
              >
                <Link to={item.href}>{item.title}</Link>
              </Button>
            ) : (
              <DropdownMenu key={item.title} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="font-bold text-foreground hover:bg-muted hover:text-foreground data-[state=open]:bg-muted"
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  collisionPadding={16}
                  className={`z-[60] max-h-[min(24rem,calc(100dvh-6rem))] overflow-y-auto p-2 ${
                    item.items && item.items.length > 4
                      ? "w-[min(36rem,calc(100vw-2rem))]"
                      : "w-[min(16rem,calc(100vw-2rem))]"
                  }`}
                >
                  <div
                    className={
                      item.items && item.items.length > 4
                        ? "grid grid-cols-1 gap-1 sm:grid-cols-2"
                        : "flex flex-col gap-1"
                    }
                  >
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.title} asChild>
                        <Link
                          to={subItem.href}
                          className="cursor-pointer rounded-md px-3 py-2 text-sm text-foreground focus:bg-muted focus:text-foreground"
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </nav>

        <Link to="/" className="shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <img
            src="/logo-ammarco.png"
            alt="AMMARCO Engineering Associates"
            decoding="async"
            className="h-12 w-auto sm:h-16 md:h-20"
          />
        </Link>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <a
            href="tel:+923335766744"
            className="hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-secondary xl:flex"
          >
            <Phone className="h-4 w-4" />
            +92 333 5766744
          </a>
          <Button variant="ghost" className="text-foreground hover:bg-muted hover:text-foreground" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button className="bg-accent font-bold text-white hover:bg-accent/90" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((open) => !open)}
          className="ml-auto text-foreground hover:bg-muted hover:text-foreground lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
    </header>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-[60] overflow-y-auto border-t bg-background sm:top-20 lg:hidden"
        >
          <nav className="mx-auto flex max-w-lg flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navigationItems.map((item) =>
              item.href ? (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-bold text-foreground hover:bg-muted"
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title} className="rounded-lg">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.title)}
                    aria-expanded={openSection === item.title}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-bold text-foreground hover:bg-muted"
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSection === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === item.title && (
                    <div className="flex flex-col gap-1 pb-2 pl-3">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}

            <div className="mt-4 space-y-3 border-t pt-4">
              <a
                href="tel:+923335766744"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                +92 333 5766744
              </a>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </Button>
              <Button className="w-full bg-accent text-white hover:bg-accent/90" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
