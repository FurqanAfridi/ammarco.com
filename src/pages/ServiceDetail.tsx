import { Link, Navigate, useParams } from "react-router-dom";
import {
  Building2,
  CheckCircle,
  ChevronRight,
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
import Seo, { SITE_URL } from "@/components/Seo";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getRelatedServices, getServiceBySlug, type ServiceIconName } from "@/data/services";

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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = icons[service.icon];
  const related = getRelatedServices(service.slug);
  const path = `/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}${path}`,
      areaServed: "Pakistan",
      provider: {
        "@type": "Organization",
        name: "Ammarco Engineering Associates",
        url: SITE_URL,
        telephone: "+923335766744",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
      },
      image: service.image.startsWith("http") ? service.image : `${SITE_URL}${service.image}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        image={service.image}
        jsonLd={jsonLd}
      />
      <Navigation />
      <PageHero title={service.title} subtitle={service.heroSubtitle} eyebrow="Services" image={service.image} />

      <section className="section bg-background">
        <div className="container mx-auto">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <article className="lg:col-span-7">
              <Reveal>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
                  {service.title} in Pakistan
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-primary">How we approach the work</h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.approach.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-primary">Who this service is for</h2>
                <ul className="mt-5 space-y-3">
                  {service.audience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-primary">Typical work on site</h2>
                <ul className="mt-5 space-y-3">
                  {service.typicalWork.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground sm:text-lg">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="font-heading text-2xl font-semibold text-primary">What we deliver</h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.scope.map((item) => (
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
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-border bg-muted/60 p-6 sm:p-8">
                <p className="font-heading text-lg font-semibold text-primary">Need this for a live project?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Tell us the building type, location, and timeline. We will come back with the next steps.
                </p>
                <Button asChild className="mt-5 rounded-full bg-primary font-semibold text-white hover:bg-primary/90">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">What you get at handover</h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.outcomes.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-muted/50 p-5 text-base leading-relaxed text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">How the work runs</h2>
            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <span className="font-heading text-sm font-semibold text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">Related services</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold text-primary">{item.shortTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Ready to start this work?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg">
            Send a brief or call us. We will tell you what we need next.
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

export default ServiceDetail;
