import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const LeadershipSection = () => {
  const leaders: {
    name: string;
    title: string;
    role: string;
    linkedin: string;
    description: string;
    image: string | null;
    imageClass?: string;
  }[] = [
    {
      name: "Ammar Mahdi",
      title: "CEO & Founder",
      role: "Chief Executive Officer",
      linkedin: "",
      description: "Leads Ammarco's growth and the direction of the company",
      image: "/Ammar.jpeg",
    },
    {
      name: "Syed Tajdar Nazar Gillani",
      title: "Head of Operations",
      role: "Operations Excellence",
      linkedin: "",
      description: "Looks after day-to-day operations and project delivery",
      image: "/Tajdar.jpeg",
    },

    {
      name: "Mr. Imran Haider",
      title: "Director Technical",
      role: "Technical Support",
      linkedin: "",
      description: "Heads technical support and engineering work",
      image: null,
    },
    {
      name: "Ghazanfar Abbas",
      title: "Finance Head",
      role: "Finance",
      linkedin: "",
      description: "Heads finance and commercial control for Ammarco",
      image: "/Ghazanfar-Abbas.jpg",
      imageClass: "object-cover object-top",
    },
  ];

  return (
    <section className="bg-muted py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Our Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl sm:w-[calc(50%-0.75rem)] xl:w-[calc(25%-1.5rem)]"
            >
              {/* Avatar */}
              <div className="w-full aspect-[5/7] bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${leader.imageClass ?? "object-contain"}`}
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-5xl font-heading font-bold text-white">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 font-semibold">{leader.title}</p>
                {leader.role && (
                  <p className="text-xs text-muted-foreground mb-3">{leader.role}</p>
                )}
                {leader.description && (
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{leader.description}</p>
                )}

                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
