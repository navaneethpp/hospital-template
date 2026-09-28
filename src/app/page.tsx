import Header from "../components/Header";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import FeaturedServices from "../components/FeaturedServices";
import StatsBar from "../components/StatsBar";
import DoctorsSection from "../components/DoctorsSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="pt-16 sm:pt-20 md:pt-20">
        <Hero />
        <Departments />
        <FeaturedServices />
        <StatsBar />
        <DoctorsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
