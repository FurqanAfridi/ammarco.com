import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/home/LeadershipSection";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6">
            Who We Are
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            Ammarco is a registered engineering and construction firm with a network across Pakistan.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary sm:mb-6 sm:text-3xl md:text-4xl">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work as a partner to our clients and help them deliver practical, cost-effective projects.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary sm:mb-6 sm:text-3xl md:text-4xl">Our Objectives</h2>
              <ul className="text-lg text-muted-foreground leading-relaxed space-y-3">
                <li>✓ Bring the right people and resources to every project</li>
                <li>✓ Go the extra mile so clients are satisfied, every time</li>
                <li>✓ Quality and durability in contemporary design</li>
                <li>✓ Professional conduct on every job</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
            {[
              { icon: Award, number: "200+", label: "Projects Completed" },
              { icon: Users, number: "50+", label: "Expert Team Members" },
              { icon: Globe, number: "10+", label: "Years in Practice" },
              { icon: TrendingUp, number: "100%", label: "Quality Commitment" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2 font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-primary sm:mb-8 sm:text-3xl md:text-4xl">
            Our Company Profile
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Ammarco Engineering Associates is based in Islamabad and registered with the Government of Pakistan. We work across disciplines, and the office brings together people with different backgrounds so problems get more than one kind of answer.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We handle interior and exterior design, planning, and delivery for commercial and residential projects. The team includes civil, electrical, mechanical, and MEP engineers.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              A principal stays involved from concept through site work, so clients get consistent decisions rather than a job handed from desk to desk.
            </p>
            <p className="text-lg leading-relaxed">
              The aim is simple: buildings that mix modern architecture with local and traditional design, at a price that makes sense, finished to a standard we can stand behind.
            </p>
          </div>
        </div>
      </section>

      {/* Visionary Leadership */}
      <LeadershipSection />

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold sm:mb-8 sm:text-3xl md:mb-12 md:text-4xl">Customer Expectations</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-base text-gray-200 sm:mb-12 sm:text-lg md:text-xl">
            What clients ask of us, and what we deliver:
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
            {[
              "Long-term partnership",
              "Listening to their requirements",
              "Commitment to your business goals",
              "Careful project management",
              "Creative solutions",
              "Stringent budget controls",
              "Quality we don't cut",
              "On time delivery",
              "Customer support",
              "Comprehensive documentation",
              "Completeness",
              "Sincerity",
            ].map((value, index) => (
              <div key={index} className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-200 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
