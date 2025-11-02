import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Zap, Wind, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil Construction",
      description:
        "Comprehensive construction solutions from ground-up projects to complex renovations.",
      features: [
        "Commercial building construction",
        "Residential developments",
        "Institutional facilities",
        "Structural renovations and retrofitting",
        "Project management and supervision",
        "Quality assurance and compliance",
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description:
        "Advanced electrical installations meeting international safety and efficiency standards.",
      features: [
        "Power distribution systems",
        "Emergency backup generators",
        "Smart building automation",
        "Energy-efficient lighting solutions",
        "Electrical safety inspections",
        "Maintenance and troubleshooting",
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    },
    {
      icon: Wind,
      title: "HVAC Solutions",
      description:
        "Climate control systems designed for optimal comfort and energy efficiency.",
      features: [
        "Custom HVAC system design",
        "Central air conditioning installation",
        "Ventilation and air quality systems",
        "Energy recovery ventilators",
        "Preventive maintenance programs",
        "System optimization and upgrades",
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description:
        "Integrated security solutions providing comprehensive protection and peace of mind.",
      features: [
        "CCTV surveillance systems",
        "Access control solutions",
        "Intrusion detection alarms",
        "Perimeter security",
        "24/7 monitoring integration",
        "Security system maintenance",
      ],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-accent text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your unique requirements
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-96 rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  <Link to="/contact">Request Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can bring your vision to life
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-10"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
