import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 200) {
          clearInterval(timer1);
          return 200;
        }
        return prev + Math.ceil(200 / steps);
      });
    }, interval);

    const timer2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= 15) {
          clearInterval(timer2);
          return 15;
        }
        return prev + 1;
      });
    }, interval * 2);

    const timer3 = setInterval(() => {
      setCount3((prev) => {
        if (prev >= 50) {
          clearInterval(timer3);
          return 50;
        }
        return prev + Math.ceil(50 / steps);
      });
    }, interval);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          alt="Engineering Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 animate-fade-in leading-tight">
          Engineering Pakistan's <br />
          <span className="text-gradient">Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 animate-slide-up font-light">
          Commitment, Precision, and Innovation in Every Project
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
          >
            <Link to="/projects">
              Explore Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
          {[
            { number: count1, suffix: "+", label: "Projects Completed" },
            { number: count2, suffix: "+", label: "Years of Excellence" },
            { number: count3, suffix: "+", label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover-lift border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 text-secondary">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
