import { Building2, Zap, Wind, Shield, Droplets, Sun, Power, Wifi, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior & Exterior Design",
      description: "Professional interior and exterior design consultancy for business & residential projects.",
      details: "Our Executive and Technical Experts handle group housings, schools, hotels, industrial and commercial buildings with dedication.",
    },
    {
      icon: Building2,
      title: "Civil Works",
      description: "Active engagement in Civil Construction Works with skilled and qualified engineers.",
      details: "Construction of modern & institutional buildings, hospitals, parking areas, malls, celebration & event halls using superior grade materials.",
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Complete electrical fitting services for commercial and residential sectors.",
      details: "Excellent quality electrical fitting materials from authorized vendors with complete planning and designing.",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description: "Comprehensive plumbing services including sewer, drainage, and septic systems.",
      details: "Sewer and drainage pipe fittings, septic tanks, manholes with operational inspection before handover.",
    },
    {
      icon: Wind,
      title: "HVAC Solutions",
      description: "Complete HVAC installations with Firefighting & Panic Alarms.",
      details: "Energy-efficient heating, ventilation, and air conditioning systems ensuring optimal comfort and safety.",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "State-of-the-art security solutions including CCTV, alarms, and solar panels.",
      details: "Integrated security systems with CCTV, security alarms, generators, UPS, and comprehensive monitoring solutions.",
    },
    {
      icon: Sun,
      title: "Solar Panels",
      description: "Sustainable solar energy solutions for your projects.",
      details: "Eco-friendly solar panel installations providing reliable renewable energy options.",
    },
    {
      icon: Power,
      title: "Generators & UPS",
      description: "Uninterrupted power supply solutions for continuous operations.",
      details: "Backup power systems including generators and UPS to ensure your operations never stop.",
    },
    {
      icon: Wifi,
      title: "Data & Voice Networking",
      description: "Complete networking infrastructure and communication solutions.",
      details: "Data and voice networking, distribution switchgears, control panels, communication racks, and data cabinets.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
