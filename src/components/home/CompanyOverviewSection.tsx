import { motion } from "framer-motion";

const CompanyOverviewSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
              Ammarco is the exclusive registered entity of its kind in Pakistan, supported by a comprehensive network and official government accreditation.
              </p>
              <p className="text-lg">
                Ammarco gratifies itself in bringing in its professional services for interior & exterior design consultancy, planning and execution of business & residential projects. Equipped with specialized and experienced team of technical staff; Civil Engineers, Electrical Engineers, Mechanical Engineers, MEP Engineers & Sub Engineers.
              </p>
              <p className="text-lg">
                Ammarco Engineering Associates is a young multi-disciplinary enterprise based in Islamabad. Our designs draw onboard perception of inspired ideas and innovative problem solving, cultivated through the multi-cultural setting within our offices. The end result is vibrant, energetic and original architectural solutions that explore the juxtaposition of modern architecture, nature and traditional designs.
              </p>
            </div>
          </motion.div>

          {/* Decorative Element/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2069"
                alt="Modern architecture and design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;

