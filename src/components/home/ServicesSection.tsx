import { Building2, Zap, Wind, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil Construction",
      description: "Comprehensive construction solutions for commercial, residential, and institutional projects.",
      details: "From ground-up construction to renovations, we deliver structurally sound and aesthetically pleasing buildings.",
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Advanced electrical installations and power distribution systems for all project scales.",
      details: "Complete electrical solutions including power systems, lighting, backup generators, and smart automation.",
    },
    {
      icon: Wind,
      title: "HVAC Solutions",
      description: "Energy-efficient heating, ventilation, and air conditioning systems for optimal comfort.",
      details: "Custom HVAC design, installation, and maintenance ensuring perfect climate control and air quality.",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "State-of-the-art security and surveillance solutions for comprehensive protection.",
      details: "Integrated security systems including CCTV, access control, alarm systems, and monitoring solutions.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative diagonal */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden hover:border-secondary transition-all duration-300"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                {/* Details shown on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
                  <p className="text-sm text-gray-200 mb-4">{service.details}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-secondary font-semibold hover:text-accent transition-colors"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-muted" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
};

export default ServicesSection;
