"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      description: "Comprehensive engineering solutions tailored to your needs",
      items: [
        {
          title: "Interior & Exterior Design",
          href: "/services#interior",
        },
        {
          title: "Civil Construction",
          href: "/services#civil",
        },
        {
          title: "Electrical Works",
          href: "/services#electrical",
        },
        {
          title: "Plumbing Services",
          href: "/services#plumbing",
        },
        {
          title: "HVAC Systems",
          href: "/services#hvac",
        },
        {
          title: "Firefighting & Alarms",
          href: "/services#firefighting",
        },
        {
          title: "CCTV & Security",
          href: "/services#security",
        },
        {
          title: "Solar Panels",
          href: "/services#solar",
        },
        {
          title: "Generators & UPS",
          href: "/services#generators",
        },
        {
          title: "Data Networking",
          href: "/services#networking",
        },
      ],
    },
    {
      title: "Company",
      description: "Learn more about Ammarco Engineering Associates",
      items: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Our Projects",
          href: "/projects",
        },
        {
          title: "Contact Us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
          {/* Desktop Navigation */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link to={item.href}>
                        <Button
                          variant="ghost"
                          className={`${
                            location.pathname === item.href ? "text-secondary" : "text-foreground"
                          }`}
                        >
                          {item.title}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm text-foreground">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base font-heading font-semibold text-foreground">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10" asChild>
                              <Link to="/contact">Request a Quote</Link>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink key={subItem.title} asChild>
                                <Link
                                  to={subItem.href}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded text-foreground"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex lg:justify-center">
          <Link to="/">
            <img
              src="/logo-ammarco.png"
              alt="AMMARCO Engineering Associates"
              className="h-16 md:h-20 w-auto"
                />
              </Link>
          </div>

        {/* Right Side Actions */}
        <div className="flex justify-end w-full gap-4 items-center">
          <a
            href="tel:+923335766744"
            className="hidden lg:flex items-center gap-2 text-sm font-medium transition-colors text-foreground hover:text-secondary"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+92 333 5766744</span>
          </a>
            <Button
            variant="ghost"
            className="hidden lg:inline-flex text-foreground"
              asChild
            >
            <Link to="/about">About</Link>
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg font-medium">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <>
                        <p className="text-lg font-medium">{item.title}</p>
                        {item.items &&
                          item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="flex justify-between items-center"
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-muted-foreground">{subItem.title}</span>
                              <MoveRight className="w-4 h-4 stroke-1" />
                            </Link>
                          ))}
                      </>
                    )}
        </div>
      </div>
              ))}
              <div className="pt-4 border-t space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/about" onClick={() => setOpen(false)}>
                    About Us
              </Link>
                </Button>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                  <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
