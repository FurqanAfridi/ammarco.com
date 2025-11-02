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
            About Ammarco
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Engineering excellence through innovation, dedication, and expertise since our inception.
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
                To deliver world-class engineering solutions that exceed client expectations while
                maintaining the highest standards of quality, safety, and professionalism. We strive
                to be the preferred partner for complex engineering projects across Pakistan.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be recognized as Pakistan's leading engineering firm, known for innovation,
                reliability, and sustainable practices. We envision a future where our projects
                contribute significantly to national development and environmental preservation.
              </p>
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
              { icon: Globe, number: "15+", label: "Years of Experience" },
              { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
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
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Ammarco Engineering was founded with a vision to bring international engineering
              standards to Pakistan while addressing local needs with precision and care. What
              started as a small team of dedicated professionals has grown into one of Pakistan's
              most trusted engineering firms.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Over the years, we've had the privilege of working with prestigious clients including
              government institutions, international development organizations, and leading private
              sector companies. Each project has strengthened our commitment to excellence and
              expanded our capabilities.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Ammarco Engineering stands at the forefront of Pakistan's engineering sector,
              combining cutting-edge technology with local expertise to deliver projects that make
              a lasting impact on communities and the nation's infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
              },
              {
                title: "Excellence",
                description:
                  "We pursue the highest standards in every project, never compromising on quality or safety.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and methods to deliver cutting-edge solutions to our clients.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-gray-200 leading-relaxed">{value.description}</p>
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
