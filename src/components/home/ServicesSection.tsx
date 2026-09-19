import { Building2, Zap, Wind, Shield, Droplets, Sun, Power, Wifi, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior & Exterior Design",
      description: "Interior and exterior design for homes, offices, and commercial buildings.",
      details: "We handle housing, schools, hotels, and industrial or commercial buildings, from concept through site supervision.",
      href: "/services/interior",
    },
    {
      icon: Building2,
      title: "Civil Works",
      description: "Civil construction with qualified engineers on the job.",
      details: "Institutional buildings, hospitals, parking, malls, and event halls, built with specified materials and site checks.",
      href: "/services/civil",
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Electrical fitting for commercial and residential buildings.",
      details: "Planning, design, and installation using materials from authorized vendors.",
      href: "/services/electrical",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description: "Sewer, drainage, water supply, and septic work.",
      details: "Pipe fittings, septic tanks, and manholes, inspected before handover.",
      href: "/services/plumbing",
    },
    {
      icon: Wind,
      title: "HVAC Solutions",
      description: "Heating, ventilation, and air conditioning, plus fire and panic alarms.",
      details: "Systems sized for the building so spaces stay comfortable without wasting energy.",
      href: "/services/hvac",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "CCTV, alarms, and related security for your premises.",
      details: "Cameras, alarms, and monitoring, with generators or UPS where backup is needed.",
      href: "/services/security",
    },
    {
      icon: Sun,
      title: "Solar Panels",
      description: "Solar installations that cut electricity bills.",
      details: "Grid-tied or off-grid systems, specified for the load and the site.",
      href: "/services/solar",
    },
    {
      icon: Power,
      title: "Generators & UPS",
      description: "Backup power so work does not stop when the grid does.",
      details: "Generators and UPS sized for your load, with handover testing.",
      href: "/services/generators",
    },
    {
      icon: Wifi,
      title: "Data & Voice Networking",
      description: "Networks, racks, cabinets, and communication rooms.",
      details: "Data and voice cabling, switchgear, control panels, and cable management.",
      href: "/services/networking",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary py-12 text-white sm:py-16 md:py-20 lg:py-32">
      {/* Decorative diagonal */}
      <div className="absolute left-0 right-0 top-0 h-12 bg-background sm:h-16 md:h-24" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />

      <div className="container mx-auto">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            What We Do
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
            Design, construction, and building systems under one team
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary sm:p-8"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold sm:mb-4 sm:text-2xl">{service.title}</h3>
                <p className="mb-4 leading-relaxed text-gray-300">{service.description}</p>

                <div className="max-h-none overflow-hidden transition-all duration-300 md:max-h-0 md:group-hover:max-h-48">
                  <p className="mb-4 text-sm text-gray-200">{service.details}</p>
                  <span className="inline-flex items-center text-secondary font-semibold hover:text-accent transition-colors">
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
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom decorative diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-muted sm:h-16 md:h-24" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
};

export default ServicesSection;
