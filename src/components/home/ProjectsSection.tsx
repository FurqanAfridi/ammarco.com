import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = ["hbl-branch-renovations", "hbl-iconic-drive-thru-atm"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const statusLabel = {
  completed: "Completed",
  ongoing: "Ongoing",
};

const ProjectsSection = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Selected Work
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Completed HBL branches and a live drive-through ATM.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group relative h-80 overflow-hidden rounded-2xl hover-lift md:h-96"
            >
              <img
                src={project.cover}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span className="mb-3 inline-block w-fit rounded-full border border-secondary/30 bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary backdrop-blur-sm">
                  {statusLabel[project.status]}
                </span>
                <h3 className="mb-2 font-heading text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                <p className="mb-4 text-gray-200">{project.location}</p>
                <div className="flex items-center font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                  View project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center text-lg font-semibold text-primary transition-colors hover:text-secondary"
          >
            View all projects
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
