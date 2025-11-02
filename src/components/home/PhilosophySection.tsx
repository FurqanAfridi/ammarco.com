import { Target, Zap, Users } from "lucide-react";

const PhilosophySection = () => {
  const values = [
    {
      icon: Target,
      title: "Commitment",
      description:
        "Dedicated to delivering projects on time with unwavering quality standards and professional excellence.",
    },
    {
      icon: Zap,
      title: "Precision",
      description:
        "Leveraging modern equipment and technical expertise to ensure accuracy in every detail of our work.",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description:
        "Building lasting relationships through transparency, communication, and exceeding expectations.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary">
            Our Philosophy is Simple
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with modern equipment and experienced staff to deliver
            projects that meet global standards while adapting to local requirements. Our approach
            ensures quality, efficiency, and client satisfaction in every endeavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 hover-lift border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
