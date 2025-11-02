import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Government", "Banking", "Commercial", "Education"];

  const projects = [
    {
      title: "HBL Branch Renovations - Islamabad",
      category: "Banking",
      location: "Islamabad, Pakistan",
      description:
        "Complete renovation and modernization of multiple HBL branch locations with focus on customer experience and operational efficiency.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      title: "HBL Branch Renovations - Lahore",
      category: "Banking",
      location: "Lahore, Pakistan",
      description:
        "State-of-the-art banking facility upgrades including electrical, HVAC, and security systems integration.",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070",
    },
    {
      title: "USAID Development Project",
      category: "Government",
      location: "Islamabad, Pakistan",
      description:
        "Large-scale infrastructure development project in partnership with USAID, focusing on sustainable construction practices.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
    },
    {
      title: "DAI Pakistan Office Complex",
      category: "Commercial",
      location: "Islamabad, Pakistan",
      description:
        "Modern office complex with integrated smart building systems and energy-efficient design.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    },
    {
      title: "NUST Academic Building",
      category: "Education",
      location: "Islamabad, Pakistan",
      description:
        "Educational facility construction with advanced electrical and HVAC systems for optimal learning environment.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2131",
    },
    {
      title: "Naklah Wear Factory Outlet & Display Center",
      category: "Commercial",
      location: "Pakistan",
      description:
        "Comprehensive construction of retail facility including structural work, electrical, and climate control systems.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    },
    {
      title: "AKDN Community Development Center",
      category: "Government",
      location: "Northern Pakistan",
      description:
        "Community center construction with focus on sustainability and local materials integration.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070",
    },
    {
      title: "Ministry of IT Office Building",
      category: "Government",
      location: "Islamabad, Pakistan",
      description:
        "Government office building with advanced security systems and modern infrastructure.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            A portfolio of excellence across Pakistan
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-background text-foreground hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden hover-lift border border-border shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
