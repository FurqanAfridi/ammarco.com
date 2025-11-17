const ClientsSection = () => {
  const clientLogos = [
    "/images/1708851314184.jpeg",
    "/images/1.png",
    "/images/2.png",
    "/images/saif-group-black-logo.png",
    "/images/images (3).png",
    "/images/Akdn-logo.png",
    "/images/images (1).jpeg",
    "/images/social-image.jpg",
    "/images/Ministry-of-Information-Technology-and-Telecommunication-Pakistan.jpg",
    "/images/images.jpeg",
    "/images/raf,360x360,075,t,fafafa_ca443f4786.u3.jpg",
    "/images/NUST_Vector.svg.png",
    "/images/images.png"
  ];

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-primary mb-4">
          Clientele
        </h2>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-1xl md:text-2xl font-heading font-bold text-center text-primary mb-4">
          Partnering with Pakistan's most respected organizations
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {/* First Set */}
          {clientLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-64 h-32 md:w-80 md:h-40 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate Set for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-64 h-32 md:w-80 md:h-40 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
