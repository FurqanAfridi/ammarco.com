const clientLogos = [
  { src: "/images/1708851314184.jpeg", alt: "Client logo 1" },
  { src: "/images/1.png", alt: "Client logo 2" },
  { src: "/images/2.png", alt: "Client logo 3" },
  { src: "/images/saif-group-black-logo.png", alt: "Saif Group" },
  { src: "/images/images (3).png", alt: "Client logo 5" },
  { src: "/images/Akdn-logo.png", alt: "AKDN" },
  { src: "/images/images (1).jpeg", alt: "Client logo 7" },
  { src: "/images/social-image.jpg", alt: "Client logo 8" },
  {
    src: "/images/Ministry-of-Information-Technology-and-Telecommunication-Pakistan.jpg",
    alt: "Ministry of IT and Telecommunication Pakistan",
  },
  { src: "/images/images.jpeg", alt: "Client logo 10" },
  { src: "/images/raf,360x360,075,t,fafafa_ca443f4786.u3.jpg", alt: "Client logo 11" },
  { src: "/images/NUST_Vector.svg.png", alt: "NUST" },
];

const LogoTrack = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6 lg:gap-8 lg:pr-8"
    aria-hidden={ariaHidden}
  >
    {clientLogos.map((logo, index) => (
      <div
        key={`${ariaHidden ? "duplicate" : "original"}-${logo.src}-${index}`}
        className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-md sm:h-24 sm:w-44 sm:p-4 md:h-28 md:w-52 md:p-5 lg:h-32 lg:w-64 lg:p-6"
      >
        <img
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
    ))}
  </div>
);

const ClientsSection = () => {
  return (
    <section className="overflow-hidden bg-muted py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto mb-8 sm:mb-10 md:mb-12">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary sm:text-base">
          Clientele
        </p>
        <h2 className="mb-3 text-center font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Clients We Work With
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground sm:text-base md:text-lg">
          Organizations across Pakistan that have trusted us with their projects
        </p>
      </div>

      <div className="group relative overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
