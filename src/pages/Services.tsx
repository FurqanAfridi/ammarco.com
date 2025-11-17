import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Layout,
  Building2,
  Zap,
  Droplets,
  Wind,
  Flame,
  Shield,
  Sun,
  Power,
  Wifi,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Interior & Exterior Design",
      description:
        "Professional interior and exterior design consultancy for business & residential projects.",
      detailedDescription: `Ammarco deems that interior of your Premises should manifest an expression as your signature. The spaces we design profess your personality, class, taste and grandeur. We provide appropriate services rendered by a team of adroit professionals in order to guarantee excellence in every detail. We guarantee fabulous impression of your facade.`,
      features: [
        "Design consultancy and space planning",
        "Interior design for business & residential",
        "Exterior design and facade treatment",
        "Material selection and sourcing",
        "Color schemes and aesthetics",
        "Execution supervision and quality control",
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158",
    },
    {
      icon: Building2,
      title: "Civil Works",
      description:
        "Active engagement in Civil Construction Works with skilled and qualified engineers.",
      detailedDescription: `Ammarco is actively engaged in Civil Construction Works for our valuable clients. These services are rendered by our team of skilled and qualified engineers. We use superior grade materials and latest technology machines while rendering these services. Our quality controllers supervise the entire process in order to ensure first class quality.`,
      features: [
        "Modern & institutional buildings",
        "Hospitals and healthcare facilities",
        "Parking areas and garages",
        "Shopping malls and retail centers",
        "Celebration & event halls",
        "Commercial complexes and office buildings",
        "Project management and supervision",
        "Quality assurance and compliance",
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Complete electrical fitting services for commercial and residential sectors.",
      detailedDescription: `Electrical fitting services that we offer to various commercial and residential sectors are provided according to clients' project requirements. We use excellent quality electrical fitting materials & items that are procured from authorized and quality driven vendors. Services are offered after complete planning and designing of working modules.`,
      features: [
        "Complete electrical installations",
        "Power distribution systems",
        "Lighting design and installation",
        "Backup generators and emergency systems",
        "Smart building automation",
        "Energy-efficient solutions",
        "Electrical safety inspections",
        "Maintenance and troubleshooting",
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description:
        "Comprehensive plumbing services including sewer, drainage, and septic systems.",
      detailedDescription: `Plumbing services that Ammarco offers to our esteemed clients include various kinds of sewer and drainage pipe fittings and setting up septic tanks, manholes and many more. Operational inspection of undertaken projects before handover with complete satisfaction.`,
      features: [
        "Sewer and drainage systems",
        "Pipe fittings and installations",
        "Septic tank setup and maintenance",
        "Manhole construction",
        "Water supply systems",
        "Fixtures and fittings",
        "Operational inspection",
        "Quality verification before handover",
      ],
      image: "/plumbing.png",
    },
    {
      icon: Wind,
      title: "HVAC Systems",
      description:
        "Complete heating, ventilation, and air conditioning solutions designed for optimal climate control.",
      detailedDescription: `Complete HVAC installations ensuring optimal comfort and energy efficiency. Our systems are designed for perfect climate control and air quality in all types of environments.`,
      features: [
        "HVAC system design and planning",
        "Central air conditioning installation",
        "Ventilation and air quality systems",
        "Energy recovery ventilators",
        "Climate control automation",
        "Preventive maintenance programs",
        "System optimization and upgrades",
        "24/7 technical support",
      ],
      image: "/HVAC.webp",
    },
    {
      icon: Flame,
      title: "Firefighting & Panic Alarms",
      description: "Comprehensive fire safety systems and emergency alert installations.",
      detailedDescription: `Complete fire safety systems and emergency alert installations to ensure maximum safety and compliance with international standards. We provide end-to-end firefighting solutions for complete protection.`,
      features: [
        "Fire detection systems",
        "Fire suppression systems",
        "Panic alarm installations",
        "Emergency response systems",
        "Sprinkler systems",
        "Fire extinguisher installation",
        "Safety compliance audits",
        "Regular maintenance and testing",
      ],
      image: "/Fire-Alarms-Blare.jpg",
    },
    {
      icon: Shield,
      title: "CCTV & Security Systems",
      description: "Advanced surveillance and security alarm systems for comprehensive protection.",
      detailedDescription: `Advanced surveillance and security alarm systems providing comprehensive protection for your premises. Integrated security solutions with CCTV, security alarms, and comprehensive monitoring solutions.`,
      features: [
        "CCTV camera installation",
        "IP surveillance systems",
        "Access control solutions",
        "Security alarm systems",
        "Intrusion detection",
        "Perimeter security",
        "24/7 monitoring integration",
        "Security system maintenance",
      ],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070",
    },
    {
      icon: Sun,
      title: "Solar Panel Installation",
      description: "Sustainable solar energy solutions for reduced operational costs and environmental impact.",
      detailedDescription: `Sustainable solar energy solutions for reduced electricity costs and environmental impact. Eco-friendly solar panel installations providing reliable renewable energy options with long-term savings and government incentives.`,
      features: [
        "Solar panel installation",
        "Grid-tied systems",
        "Off-grid solutions",
        "Battery backup systems",
        "Energy storage solutions",
        "Government incentive assistance",
        "Maintenance and monitoring",
        "Energy efficiency consulting",
      ],
      image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=2070",
    },
    {
      icon: Power,
      title: "Generators & UPS Systems",
      description: "Reliable backup power solutions ensuring uninterrupted operations.",
      detailedDescription: `Reliable backup power solutions ensuring uninterrupted operations. Backup power systems including generators and UPS to ensure your operations never stop, even during power outages.`,
      features: [
        "Generator installation",
        "UPS systems",
        "Power backup solutions",
        "Automatic transfer switches",
        "Load management systems",
        "Emergency power systems",
        "Maintenance services",
        "24/7 monitoring",
      ],
      image: "/differences-between-generators-and-ups-systems.webp",
    },
    {
      icon: Wifi,
      title: "Data & Voice Networking",
      description: "Complete IT infrastructure including communication racks, data cabinets, and networking solutions.",
      detailedDescription: `Complete networking infrastructure including communication racks, data cabinets, and networking solutions. Data and voice networking, distribution switchgears, control panels, communication racks, and data cabinets for seamless connectivity.`,
      features: [
        "Network infrastructure setup",
        "Data center solutions",
        "Communication racks installation",
        "Data cabinets and server rooms",
        "Cable management systems",
        "Switchgears and control panels",
        "VoIP systems",
        "Network maintenance and support",
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 gradient-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6"
          >
            Comprehensive Engineering Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            From design to delivery, we handle every aspect
          </motion.p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`py-12 sm:py-16 md:py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  {service.detailedDescription}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  <Link to="/contact">Request Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our services can bring your vision to life
          </motion.p>
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
