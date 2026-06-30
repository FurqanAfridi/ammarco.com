import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "HBL Branch Renovations",
      location: "Nationwide, Pakistan",
      category: "Banking",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      title: "USAID & DAI Projects",
      location: "Islamabad",
      category: "Government",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
    },
    {
      title: "Institutional Buildings",
      location: "Multiple Locations",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2131",
    },
    {
      title: "Naklah Wear Factory Outlet",
      location: "Pakistan",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary">
            Proven Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering world-class projects across Pakistan
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className="group relative rounded-2xl overflow-hidden hover-lift h-80 md:h-96"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-secondary/20 backdrop-blur-sm text-secondary text-sm font-medium rounded-full border border-secondary/30">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.location}</p>

                {/* View Details Button - appears on hover */}
                <div className="flex items-center text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center text-lg font-semibold text-primary hover:text-secondary transition-colors group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
