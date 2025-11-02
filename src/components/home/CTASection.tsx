import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-accent relative overflow-hidden">
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let's build something extraordinary. Get in touch today to discuss your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>

          <a
            href="tel:+92"
            className="inline-flex items-center text-white font-medium hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Or call us at +92-XXX-XXXXXXX
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
