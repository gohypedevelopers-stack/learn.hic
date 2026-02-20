import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CTASection from "@/components/landing/CTASection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import ApplicationSection from "@/components/landing/ApplicationSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <CTASection />
      <ReviewsSection />
      <ApplicationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
