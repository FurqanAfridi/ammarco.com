import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Ammarco is only one of its kinds, sole entity having its associated network in Islamabad, established and registered with Government of Pakistan.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the strategic associate of our valued customers and provide value added services for the most feasible, cost effective and profitable projects.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Objectives</h2>
              <ul className="text-lg text-muted-foreground leading-relaxed space-y-3">
                <li>✓ To bring widespread resources to each project</li>
                <li>✓ To go the extra mile to ensure clients' satisfaction – every time</li>
                <li>✓ Quality and durability in archetypal contemporary designs</li>
                <li>✓ Exemplary professionalism in every project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: "200+", label: "Projects Completed" },
              { icon: Users, number: "50+", label: "Expert Team Members" },
              { icon: Globe, number: "10+", label: "Years of Excellence" },
              { icon: TrendingUp, number: "100%", label: "Quality Commitment" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">
            Our Company Profile
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Ammarco Engineering Associates is a young multi-disciplinary enterprise based in Islamabad, established and registered with the Government of Pakistan. Our designs draw onboard perception of inspired ideas and innovative problem solving, cultivated through the multi-cultural setting within our offices.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We gratify ourselves in bringing professional services for interior & exterior design consultancy, planning and execution of business & residential projects. Equipped with specialized and experienced team of technical staff including Engineers, Sub Engineers, Electricians, Plumbers, Painters, Masons and Labor.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We bring together extensive capabilities and resources to each project, not just through our talented and experienced professionals but also as a strategic partner to our clients. We implement unique principal in-charge of concepts providing high level of executive input and oversight to all projects.
            </p>
            <p className="text-lg leading-relaxed">
              The end result is vibrant, energetic and original architectural solutions that explore the juxtaposition of modern architecture, nature and traditional designs. We provide the best price sensitive and quality oriented services using dedication as our tool to ensure quality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Customer Expectations</h2>
          <p className="text-center text-gray-200 mb-12 text-xl max-w-3xl mx-auto">
            Our customers expect from us and we deliver:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Long-term partnership",
              "Listening to their requirements",
              "Total commitment to Business goals",
              "Meticulous project management",
              "Creative solutions",
              "Stringent budget controls",
              "Quality without compromise",
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
