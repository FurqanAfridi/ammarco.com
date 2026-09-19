import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Building2,
  Droplets,
  Flame,
  Layout,
  Power,
  Shield,
  Sun,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services, type ServiceIconName } from "@/data/services";

const icons: Record<ServiceIconName, typeof Layout> = {
  layout: Layout,
  building: Building2,
  zap: Zap,
  droplets: Droplets,
  wind: Wind,
  flame: Flame,
  shield: Shield,
  sun: Sun,
  power: Power,
  wifi: Wifi,
};

const Services = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const slug = hash.replace("#", "");
    if (slug && getServiceBySlug(slug)) {
      navigate(`/services/${slug}`, { replace: true });
    }
  }, [hash, navigate]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Seo
        title="Engineering Services in Pakistan | Ammarco"
        description="Interior design, civil construction, electrical, HVAC, plumbing, solar, security, and networking services from Ammarco Engineering Associates in Islamabad."
        path="/services"
      />
      <Navigation />
      <PageHero
        title="What We Do"
        subtitle="From design through handover, under one engineering team in Islamabad."
        eyebrow="Services"
      />

      <section className="section bg-background">
        <div className="container mx-auto">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Engineering services, page by page
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each page covers who the work is for, what happens on site, how we run the job, and the questions clients usually ask before they call.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <article
                  key={service.slug}
                  className="overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
                      <Link to={`/services/${service.slug}`} className="hover:text-secondary">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.summary}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-secondary"
                    >
                      Read the {service.shortTitle.toLowerCase()} page
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Not sure which service you need?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg">
            Describe the building and we will point you to the right team.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent px-8 font-semibold text-white hover:bg-accent/90">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
