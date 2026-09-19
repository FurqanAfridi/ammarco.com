import { motion } from "framer-motion";

const CompanyOverviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                Ammarco is a registered engineering firm in Pakistan, with a nationwide network and official government accreditation.
              </p>
              <p className="text-base sm:text-lg">
                We plan and deliver interior and exterior design for commercial and residential projects. The team includes civil, electrical, mechanical, and MEP engineers who stay with the job from drawings to handover.
              </p>
              <p className="text-base sm:text-lg">
                Ammarco Engineering Associates is based in Islamabad. We mix modern architecture with local and traditional design so each project feels considered, not generic.
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
                loading="lazy"
                decoding="async"
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
