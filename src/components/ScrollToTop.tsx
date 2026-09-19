import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "@/lib/gsap";

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;

      const tryScroll = () => {
        const target = document.getElementById(id);
        if (!target) {
          return false;
        }

        const top = target.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top, behavior: "smooth" });
        ScrollTrigger.refresh();
        return true;
      };

      if (tryScroll()) {
        return;
      }

      const interval = window.setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts > 40) {
          window.clearInterval(interval);
        }
      }, 50);

      return () => window.clearInterval(interval);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
