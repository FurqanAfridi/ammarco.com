import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import {
  getProjectsByFilter,
  projectListFilters,
  type ProjectListFilter,
} from "@/data/projects";

const isFilter = (value: string | null): value is ProjectListFilter =>
  value === "featured" || value === "completed" || value === "ongoing";

const Projects = () => {
  const [params, setParams] = useSearchParams();
  const { hash } = useLocation();
  const statusParam = params.get("status");
  const filter: ProjectListFilter | "all" = isFilter(statusParam) ? statusParam : "all";

  useEffect(() => {
    const fromHash = hash.replace("#", "");
    if (isFilter(fromHash)) {
      setParams({ status: fromHash }, { replace: true });
    }
  }, [hash, setParams]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Seo
        title="Projects in Pakistan | Ammarco"
        description="Featured HBL drive-through ATM work, completed branch renovations, and live sites from Ammarco Engineering Associates."
        path="/projects"
        image="/projects/hbl-iconic-drive-thru-atm/06-night-front.jpeg"
      />
      <Navigation />
      <PageHero
        title="Projects"
        subtitle="Featured work stays at the top. Then completed HBL branches and live sites, each with its own page and gallery."
        eyebrow="Work"
        image="/projects/hbl-iconic-drive-thru-atm/06-night-front.jpeg"
      />

      <section className="sticky top-16 z-30 border-b border-border bg-background/95 py-4 backdrop-blur-md sm:top-20">
        <div className="container mx-auto flex flex-wrap justify-center gap-3">
          <Button
            onClick={() => setParams({})}
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "rounded-full bg-primary text-white" : "rounded-full"}
          >
            All
          </Button>
          {projectListFilters.map((item) => (
            <Button
              key={item.id}
              onClick={() => setParams({ status: item.id })}
              variant={filter === item.id ? "default" : "outline"}
              className={filter === item.id ? "rounded-full bg-primary text-white" : "rounded-full"}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </section>

      {(filter === "all" ? projectListFilters : projectListFilters.filter((item) => item.id === filter)).map((section, sectionIndex) => {
        const items = getProjectsByFilter(section.id);
        if (items.length === 0) {
          return null;
        }

        return (
          <section key={section.id} id={section.id} className={`section ${sectionIndex % 2 === 0 ? "bg-background" : "bg-muted"}`}>
            <div className="container mx-auto">
              <Reveal className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">{section.label}</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">{section.label} projects</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{section.description}</p>
              </Reveal>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {items.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 0.08}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
                    >
                      <div className="relative h-64 overflow-hidden sm:h-80">
                        <img
                          src={project.cover}
                          alt={project.title}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {section.label}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <p className="text-sm font-semibold text-secondary">{project.client}</p>
                        <h3 className="mt-2 font-heading text-2xl font-semibold text-primary">{project.title}</h3>
                        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </p>
                        <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{project.summary}</p>
                        <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                          Open the {project.shortTitle} page
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {filter !== "all" && getProjectsByFilter(filter).length === 0 && (
        <section className="section bg-background">
          <p className="container mx-auto text-center text-muted-foreground">No projects in this category yet.</p>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
