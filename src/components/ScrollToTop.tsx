import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
