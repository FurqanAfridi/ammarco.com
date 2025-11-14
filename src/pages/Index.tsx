import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CompanyOverviewSection from "@/components/home/CompanyOverviewSection";
import ObjectivesSection from "@/components/home/ObjectivesSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesSection from "@/components/home/ServicesSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CompanyOverviewSection />
        <ObjectivesSection />
        <PhilosophySection />
        <ServicesSection />
        <LeadershipSection />
        <SustainabilitySection />
        <ProjectsSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
