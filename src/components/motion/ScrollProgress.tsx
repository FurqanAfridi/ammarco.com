import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) {
      return;
    }

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.25,
      },
    });
  }, { scope: barRef });

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-1 w-full">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-secondary via-accent to-secondary"
      />
    </div>
  );
};

export default ScrollProgress;
