import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Ammar Mahdi",
      title: "CEO & Founder",
      role: "Chief Executive Officer",
      linkedin: "#",
      description: "Visionary leader driving Ammarco's growth and strategic direction",
      image: "/Ammar.jpeg",
    },
    {
      name: "Syed Tajdar Nazar Gillani",
      title: "Head of Operations",
      role: "Operations Excellence",
      linkedin: "#",
      description: "Overseeing all operational excellence and project delivery",
      image: "/Tajdar.jpeg",
    },
    {
      name: "M. Furqan Javed Afridi",
      title: "Head of IT & HR",
      role: "Technology & Human Resources",
      linkedin: "#",
      description: "Managing technology infrastructure and human resources",
      image: "/Furqan.jpeg",
    },
    {
      name: "Mr. Imran Haider",
      title: "Director Technical",
      role: "Technical Support",
      linkedin: "#",
      description: "Leading technical support and engineering solutions",
      image: null,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-primary">
            Visionary Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-full aspect-[5/7] bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-contain"
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

                {/* LinkedIn Link */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 group-hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
