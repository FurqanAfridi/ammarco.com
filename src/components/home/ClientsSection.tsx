const ClientsSection = () => {
  const clients = [
    "HBL",
    "USAID",
    "DAI KPG Project",
    "Naklah Supplies",
    "IKAN Engineering",
    "Face Impact",
    "Torque Engineering",
    "FR Constructions",
    "Vector Engineering",
    "High Rise Engineering",
    "Octagon Engineering",
  ];

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-muted-foreground">
          Partnering with Pakistan's most respected organizations
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        <div className="flex space-x-16 animate-marquee">
          {/* First Set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl font-heading font-bold text-foreground/70 hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
          {/* Duplicate Set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl font-heading font-bold text-foreground/70 hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
