import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="gradient-accent relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="blueprint-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="1" fill="white" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to Work Together?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/90 sm:mb-10 sm:text-xl md:text-2xl">
          Have a project in mind? Call us or send a brief and we will get back to you.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-accent px-8 py-5 text-base font-semibold text-white shadow-xl transition-all hover:bg-accent/90 hover:shadow-2xl sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>

          <a
            href="tel:+923335766744"
            className="inline-flex items-center text-base font-medium text-white transition-colors hover:text-accent sm:text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +92 333 5766744
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
