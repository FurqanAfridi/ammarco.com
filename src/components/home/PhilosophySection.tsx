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
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Our Philosophy
          </h2>
          <p className="mb-6 text-xl font-semibold text-primary sm:mb-8 sm:text-2xl md:text-3xl">
            Our philosophy is simple
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:gap-6 md:mb-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
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
          <p className="mx-auto max-w-3xl px-1 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            We keep prices sensible and quality high. Dedication is how we get there.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
