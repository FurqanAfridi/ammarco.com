import { motion } from "framer-motion";
import { Target, Crosshair, Heart } from "lucide-react";

const PhilosophySection = () => {
  const values = [
    {
      icon: Target,
      title: "Commitment",
      description: "Through strong technical expertise and modern equipment",
    },
    {
      icon: Crosshair,
      title: "Precision",
      description: "Experienced staff delivering projects that meet global standards",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "Adapting to local environments while maintaining excellence",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary">
            Our Philosophy
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            Our philosophy is simple
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide the best price sensitive and quality oriented services using dedication as our tool to ensure quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
