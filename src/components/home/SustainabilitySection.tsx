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
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
              alt="Sustainable Modern Building"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary leading-tight">
              Sustainable Solutions for a Better Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Ammarco Engineering, we're committed to building a sustainable future. Our
              eco-conscious methods combine cutting-edge technology with environmental
              responsibility, ensuring every project minimizes its impact while maximizing value
              for our clients and communities.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
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
