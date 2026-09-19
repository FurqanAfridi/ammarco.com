import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SustainabilitySection = () => {
  const benefits = [
    "Eco-conscious construction methods",
    "Energy-efficient system design",
    "Sustainable material selection",
    "Reduced environmental footprint",
    "Long-term cost savings",
    "Compliance with green standards",
  ];

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Image Side */}
          <div className="group relative h-56 overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl md:h-96 lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
              alt="Sustainable Modern Building"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Building With the Long Term in Mind
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
              We specify efficient systems and materials that last, so a project costs less to
              run and leaves a lighter footprint. That is better for clients and for the
              places we build in.
            </p>

            {/* Benefits List */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary px-8 font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              <Link to="/about">Our Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
