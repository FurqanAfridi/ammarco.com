import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import MotionGrid from "@/components/motion/MotionGrid";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
};

const PageHero = ({
  title,
  subtitle,
  eyebrow = "Ammarco Engineering",
  image = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
}: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(root.querySelectorAll(".page-hero-item"), {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary pb-20 pt-32 text-white sm:pb-24 sm:pt-36 lg:pb-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
      <MotionGrid className="text-secondary" />
      <div className="container relative z-10 mx-auto">
        <p className="page-hero-item mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-secondary sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="page-hero-item mb-4 max-w-4xl font-heading text-3xl font-semibold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="page-hero-item max-w-3xl text-base text-white/80 sm:text-lg md:text-xl lg:text-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
