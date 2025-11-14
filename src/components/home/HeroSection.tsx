import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 200) {
          clearInterval(timer1);
          return 200;
        }
        return prev + Math.ceil(200 / steps);
      });
    }, interval);

    const timer2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= 15) {
          clearInterval(timer2);
          return 15;
        }
        return prev + 1;
      });
    }, interval * 2);

    const timer3 = setInterval(() => {
      setCount3((prev) => {
        if (prev >= 10) {
          clearInterval(timer3);
          return 10;
        }
        return prev + Math.ceil(10 / steps);
      });
    }, interval);

    const timer4 = setInterval(() => {
      setCount4((prev) => {
        if (prev >= 50) {
          clearInterval(timer4);
          return 50;
        }
        return prev + Math.ceil(50 / steps);
      });
    }, interval);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="relative flex w-full min-h-screen flex-col overflow-hidden bg-background text-foreground pt-20 pb-20 md:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Side: Content */}
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-8">
        {/* Top Section: Logo & Main Content */}
        <div>
          <motion.header className="mb-2" variants={itemVariants}>
            <div className="flex items-center">
              <img
                src="/logo-ammarco.png"
                alt="AMMARCO Engineering Associates"
                className="h-16 md:h-20 lg:h-24 w-auto"
              />
              <div className="ml-4">
                <p className="text-lg md:text-2xl font-bold text-foreground">AMMARCO</p>
                <p className="text-xs tracking-wider text-muted-foreground">
                  ENGINEERING ASSOCIATES
                </p>
              </div>
            </div>
          </motion.header>

          <motion.main variants={containerVariants}>
            <motion.h1
              className="text-3xl font-heading font-bold leading-normal text-gradient-primary md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Engineering Pakistan's Future
            </motion.h1>
            <motion.div
              className="my-4 h-1 w-20 bg-gradient-accent"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className="mb-4 max-w-md text-base text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Quality and Durability wrapped in a combination of Archetypal Contemporary
              designs — brought to you through exemplary professionalism.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link to="/projects">
                  Explore Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-6 text-lg"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6 max-w-md"
              variants={containerVariants}
            >
              {[
                { number: count3, suffix: "+", label: "Years Experience" },
                { number: count1, suffix: "+", label: "Projects Delivered" },
                { number: count4, suffix: "+", label: "Happy Clients" },
                { number: "PEC", suffix: "", label: "C-6 Registered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-primary/5 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold mb-1 text-primary">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.main>
        </div>

        {/* Bottom Section: Contact Info */}
        <motion.footer className="mt-12 w-full" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-4 text-xs text-muted-foreground sm:grid-cols-3 border-t border-border pt-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <a
                href="https://ammarco.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                ammarco.pk
              </a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary mr-2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Right Side: Image with Clip Path Animation */}
      <motion.div
        className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070)`,
        }}
        initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, ease: "circOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent"></div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
