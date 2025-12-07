import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PrayerTimes } from "@/components/PrayerTimes";
import { PostFeed } from "@/components/PostFeed";
import { AboutPreview } from "@/components/AboutPreview";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PrayerTimes />
        <PostFeed />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;