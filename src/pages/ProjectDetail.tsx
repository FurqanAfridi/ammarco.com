import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle, ChevronRight, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Seo, { SITE_URL } from "@/components/Seo";
import Reveal from "@/components/motion/Reveal";
import ProjectGallery from "@/components/ProjectGallery";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getRelatedProjects, projectStatuses } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = getRelatedProjects(project.slug);
  const path = `/projects/${project.slug}`;
  const status = projectStatuses.find((item) => item.id === project.status);
  const cover = project.cover.startsWith("http") ? project.cover : `${SITE_URL}${project.cover}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Project",
      name: project.title,
      description: project.metaDescription,
      url: `${SITE_URL}${path}`,
      image: cover,
      location: {
        "@type": "Place",
        name: project.location,
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
      },
      founder: {
        "@type": "Organization",
        name: "Ammarco Engineering Associates",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Seo
        title={project.metaTitle}
        description={project.metaDescription}
        path={path}
        image={project.cover}
        jsonLd={jsonLd}
      />
      <Navigation />
      <PageHero title={project.title} subtitle={project.heroSubtitle} eyebrow="Projects" image={project.cover} />

      <section className="section bg-background">
        <div className="container mx-auto">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/projects" className="hover:text-primary">
              Projects
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{project.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <article className="lg:col-span-7">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{status?.label}</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-primary sm:text-3xl">{project.title}</h2>
                <p className="mt-2 text-lg font-semibold text-secondary">{project.client}</p>
                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {project.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-primary">Scope of work</h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl">
                <img src={project.cover} alt={project.media[0]?.alt || project.title} className="h-72 w-full object-cover sm:h-96" />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-muted/60 p-6 sm:p-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Client</dt>
                  <dd className="mt-2 font-heading text-base font-semibold text-primary">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Status</dt>
                  <dd className="mt-2 font-heading text-base font-semibold text-primary">{status?.label}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sector</dt>
                  <dd className="mt-2 font-heading text-base font-semibold text-primary">{project.sector}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Year</dt>
                  <dd className="mt-2 font-heading text-base font-semibold text-primary">{project.year}</dd>
                </div>
              </dl>
              <Button asChild className="mt-6 w-full rounded-full bg-primary font-semibold text-white hover:bg-primary/90">
                <Link to="/contact">Discuss a similar project</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container mx-auto">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">Project gallery</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Site photographs and video from this job. Open any frame to view it larger.
            </p>
            <div className="mt-10">
              <ProjectGallery media={project.media} title={project.title} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              {project.status === "ongoing" ? "Where the job stands" : "What was handed over"}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.outcomes.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-muted/50 p-5 text-base leading-relaxed text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">Related projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${item.slug}`}
                className="overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <img src={item.cover} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {projectStatuses.find((statusItem) => statusItem.id === item.status)?.label}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-primary">{item.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Need a branch, ATM, or similar fit-out?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg">
            Send the location and a short brief. We will tell you what we need next.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent px-8 font-semibold text-white hover:bg-accent/90">
            <Link to="/contact">Contact Ammarco</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
