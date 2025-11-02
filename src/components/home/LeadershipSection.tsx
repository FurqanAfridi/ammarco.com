import { Linkedin } from "lucide-react";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Ammar Mahdy",
      title: "CEO & Founder",
      linkedin: "#",
    },
    {
      name: "Syed Tajdar Nazar Gillani",
      title: "Head of Operations",
      linkedin: "#",
    },
    {
      name: "M. Furqan Javed Afridi",
      title: "Head of IT & HR",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-primary">
            Visionary Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden hover-lift border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-white">
                    {leader.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                  {leader.name}
                </h3>
                <p className="text-muted-foreground mb-4">{leader.title}</p>

                {/* LinkedIn Link */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg transition-all duration-300 group-hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
