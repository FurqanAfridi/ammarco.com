import { motion } from "framer-motion";
import { Handshake, Target, Network, Heart } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: Handshake,
      title: "Strategic Partnership",
      description: "We work as a partner, not just a contractor.",
    },
    {
      icon: Target,
      title: "Value-Added Services",
      description: "Practical, cost-effective work that still makes commercial sense.",
    },
    {
      icon: Network,
      title: "The Right Resources",
      description: "The people and equipment each project actually needs.",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "We go the extra mile so clients are happy, every time.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-muted py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-3 font-heading text-3xl font-bold text-primary sm:mb-4 sm:text-4xl md:text-5xl">
            Our Objectives
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Clear goals. Honest delivery. Work we can stand behind.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary transition-colors group-hover:text-secondary sm:mb-4 sm:text-2xl">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;

