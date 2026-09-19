import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const MotionGrid = ({ className = "" }: { className?: string }) => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.to(svg.querySelectorAll(".orbit"), {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        stagger: { each: 4, repeat: -1 },
      });

      gsap.to(svg.querySelectorAll(".pulse-dot"), {
        scale: 1.6,
        opacity: 0.2,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.35,
        transformOrigin: "50% 50%",
      });
    },
    { scope: ref },
  );

  return (
    <svg
      ref={ref}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden="true"
    >
      <circle className="orbit" cx="640" cy="140" r="90" stroke="currentColor" strokeOpacity="0.12" />
      <circle className="orbit" cx="640" cy="140" r="140" stroke="currentColor" strokeOpacity="0.08" />
      <circle className="orbit" cx="160" cy="460" r="110" stroke="currentColor" strokeOpacity="0.1" />
      <circle className="pulse-dot" cx="640" cy="50" r="4" fill="currentColor" />
      <circle className="pulse-dot" cx="730" cy="140" r="3" fill="currentColor" />
      <circle className="pulse-dot" cx="160" cy="350" r="3.5" fill="currentColor" />
      <circle className="pulse-dot" cx="250" cy="460" r="3" fill="currentColor" />
    </svg>
  );
};

export default MotionGrid;
