import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2 } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Development", "Commercial", "Residential", "INGO"];

  const featuredProjects = [
    {
      id: "hbl-renovations",
      title: "HBL Branch Renovations",
      client: "Habib Bank Limited (HBL)",
      status: "Currently Working",
      category: "INGO",
      location: "Across Pakistan",
      description: "Complete renovation and modernization of HBL front-line branches across Pakistan. Our scope includes interior refurbishment, electrical upgrades, HVAC installation, and security system integration.",
      scope: [
        "Interior design & renovation",
        "Electrical system upgrades",
        "HVAC installation",
        "Security system integration",
        "Banking hall modernization",
        "Customer service area upgrades",
        "Staff facility improvements",
      ],
      features: [
        "Modern banking environment",
        "Enhanced customer experience",
        "Energy-efficient systems",
        "Advanced security measures",
        "Regulatory compliance",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      id: "usaid-energy",
      title: "USAID Energy Distribution Projects",
      client: "USAID",
      status: "Completed",
      category: "Development",
      location: "All over Pakistan",
      description: "Comprehensive renovation and upgrade of electricity distribution company offices across Pakistan, including IESCO, MEPCO, PESCO, LESCO, FESCO, and KESCO. Additionally, fabrication of specialized Ravi Rear Decks for pickup vehicles used in field operations.",
      scope: [
        "Office renovations for 6 major DISCOs",
        "Electrical upgrades",
        "Interior refurbishment",
        "Furniture & fixtures",
        "HVAC installations",
        "Fabrication of Ravi Rear Decks",
        "Quality compliance with USAID standards",
      ],
      discos: [
        "IESCO (Islamabad Electric Supply Company)",
        "MEPCO (Multan Electric Power Company)",
        "PESCO (Peshawar Electric Supply Company)",
        "LESCO (Lahore Electric Supply Company)",
        "FESCO (Faisalabad Electric Supply Company)",
        "KESCO (Karachi Electric Supply Company)",
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
    },
    {
      id: "dai-kpg",
      title: "DAI KPG Project",
      client: "DAI (Development Alternatives Inc.) - KPG Project",
      status: "Completed",
      category: "Development",
      location: "Islamabad, Pakistan",
      description: "Supply and installation of HVAC systems, security cabins, and anti-blast films for the Khyber Pakhtunkhwa Governance (KPG) Project offices in Islamabad.",
      scope: [
        "HVAC system design & installation",
        "Security cabin fabrication & installation",
        "Anti-blast film application",
        "Climate control solutions",
        "Security infrastructure",
        "Quality assurance & testing",
      ],
      features: [
        "Complete HVAC systems",
        "Custom security cabins",
        "3M anti-blast protective films",
        "Environmental controls",
        "Security compliance",
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    },
    {
      id: "naklah-outlet",
      title: "Naklah Wear Factory Outlet & Display Center",
      client: "Naklah Supplies ® (Naklah Wear)",
      status: "Completed",
      category: "Commercial",
      location: "Pakistan",
      description: "Complete fabrication and construction of factory outlet and display center for Naklah Wear, a leading clothing brand. Project included interior design, display systems, lighting, and complete retail infrastructure.",
      scope: [
        "Interior design & planning",
        "Display system fabrication",
        "Retail fixture installation",
        "Lighting design & installation",
        "Electrical works",
        "HVAC installation",
        "Flooring & finishing",
        "Signage & branding elements",
      ],
      features: [
        "Modern retail environment",
        "Custom display systems",
        "Brand-aligned aesthetics",
        "Customer-friendly layout",
        "Energy-efficient lighting",
        "Climate-controlled space",
      ],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    },
  ];

  const otherProjects = [
    {
      title: "IKAN Engineering Services",
      category: "Commercial",
      location: "Pakistan",
      description: "Collaborative engineering projects and technical support services.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070",
    },
        {
      title: "KP Government Projects",
      category: "Development",
      location: "Khyber Pakhtunkhwa",
      description: "Government infrastructure and development projects.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
    },
  ];

  const allProjects = [...featuredProjects.map(p => ({ ...p, featured: true })), ...otherProjects.map(p => ({ ...p, featured: false }))];
  const filteredProjects = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);
  const gridProjects = filter === "All" ? filteredProjects.filter((p) => !p.featured) : filteredProjects;

  const stats = [
    { label: "Total Projects", value: "200+" },
    { label: "Ongoing Projects", value: "15+" },
    { label: "Completed Projects", value: "185+" },
    { label: "Cities Covered", value: "25+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "On-Time Delivery", value: "95%" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6"
          >
            Our Work Speaks for Itself
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            200+ Projects Delivered Across Pakistan
          </motion.p>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 text-secondary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-muted sticky top-28 z-40 backdrop-blur-md bg-muted/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-background text-foreground hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {filter === "All" && (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-12 text-primary text-center"
            >
              Featured Projects
            </motion.h2>
            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-96 lg:h-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
                      <div className="absolute top-6 left-6 flex gap-3 flex-wrap">
                        <Badge className="bg-secondary text-white px-4 py-2 text-sm font-semibold">
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm px-4 py-2">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-heading font-bold mb-3 text-primary">
                          {project.title}
                        </h3>
                        <p className="text-lg text-secondary font-semibold mb-2">
                          {project.client}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground mb-6">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {project.scope && (
                          <div className="mb-6">
                            <h4 className="font-heading font-bold mb-3 text-foreground">Scope of Work:</h4>
                            <ul className="space-y-2">
                              {project.scope.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.features && (
                          <div className="mb-6">
                            <h4 className="font-heading font-bold mb-3 text-foreground">Key Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.discos && (
                          <div className="mb-6">
                            <h4 className="font-heading font-bold mb-3 text-foreground">DISCOs Covered:</h4>
                            <ul className="space-y-1">
                              {project.discos.map((disco, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                  • {disco}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-12 text-primary text-center"
          >
            {filter === "All" ? "Other Projects" : `Projects - ${filter}`}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                </motion.div>
            ))}
          </div>
          {gridProjects.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">
              No projects found for this category yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
