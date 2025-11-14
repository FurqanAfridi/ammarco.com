import { motion } from "framer-motion";
import { Handshake, Target, Network, Heart } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: Handshake,
      title: "Strategic Partnership",
      description: "To be the strategic associate of our valued customers",
    },
    {
      icon: Target,
      title: "Value-Added Services",
      description: "To provide value added services for the most feasible, cost effective and profitable projects",
    },
    {
      icon: Network,
      title: "Comprehensive Resources",
      description: "Bring in widespread resources to each project",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "To go the extra mile to ensure clients' satisfaction — every time!",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Our Objectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving excellence through clear goals and unwavering commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
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

