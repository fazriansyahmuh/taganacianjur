import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import MottoSection from "@/components/MottoSection";
import ServicesSection from "@/components/ServicesSection";
import OrganizationSection from "@/components/OrganizationSection";
import TimelineSection from "@/components/TimelineSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import MembersSection from "@/components/MembersSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <MottoSection />
        <AboutSection />
        <ServicesSection />
        <OrganizationSection />
        <MembersSection />
        <TimelineSection />
        <NewsSection />
        <GallerySection />
        <PartnersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
