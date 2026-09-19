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
      className="relative flex w-full min-h-0 flex-col overflow-hidden bg-background text-foreground pt-20 lg:min-h-screen lg:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Side: Content */}
      <div className="flex w-full min-w-0 flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:w-2/5 lg:px-8 lg:py-12">
        {/* Top Section: Logo & Main Content */}
        <div>
          <motion.header className="mb-4 sm:mb-6" variants={itemVariants}>
            <div className="flex min-w-0 items-center">
              <img
                src="/logo-ammarco.png"
                alt="AMMARCO Engineering Associates"
                className="h-16 w-auto shrink-0 sm:h-20 md:h-28 lg:h-36"
              />
              <div className="ml-3 min-w-0 sm:ml-4">
                <p className="text-base font-bold text-foreground sm:text-lg md:text-2xl">AMMARCO</p>
                <p className="text-[10px] tracking-wider text-foreground sm:text-xs">
                  ENGINEERING ASSOCIATES
                </p>
              </div>
            </div>
          </motion.header>

          <motion.main variants={containerVariants}>
            <motion.h1
              className="font-heading text-2xl font-bold leading-tight text-gradient-primary sm:text-3xl md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Engineering Pakistan's Future
            </motion.h1>
            <motion.div
              className="my-3 h-1 w-16 bg-gradient-accent sm:my-4 sm:w-20"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className="mb-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base md:text-lg lg:text-xl"
              variants={itemVariants}
            >
              Quality work and lasting construction, with contemporary design
              and a team you can rely on.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mb-6 flex w-full flex-col gap-3 sm:mb-8 sm:flex-row sm:gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-accent px-6 py-5 text-base font-semibold text-white hover:bg-accent/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Link to="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full px-6 py-5 text-base font-semibold sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              className="grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:gap-6"
              variants={containerVariants}
            >
              {[
                { number: count3, suffix: "+", label: "Years Experience" },
                { number: count1, suffix: "+", label: "Projects Delivered" },
                { number: count4, suffix: "+", label: "Happy Clients" },
                { number: "PEC", suffix: "", label: "Registered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl border border-primary/10 bg-primary/5 p-3 transition-all hover:border-primary/30 sm:p-4"
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
        <motion.footer className="mt-8 w-full sm:mt-10 lg:mt-12" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:grid-cols-2 sm:gap-4 sm:pt-8">
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
                href="https://ammarcoassociates.com"
                className="hover:text-primary transition-colors"
              >
                ammarcoassociates.com
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
        className="hero-media relative mt-4 h-56 w-full bg-cover bg-center sm:mt-6 sm:h-72 md:h-96 lg:mt-0 lg:h-auto lg:min-h-full lg:w-3/5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent"></div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
