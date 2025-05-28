import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScrollingLogos from '@/components/ScrollingLogos';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import HowToBuySection from '@/components/HowToBuySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <Header />
      <HeroSection />
      <ScrollingLogos />
      <VideoSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <FAQSection />
      <Footer />
    </main>
  );
}
