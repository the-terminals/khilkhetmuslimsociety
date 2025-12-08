import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { EventSection } from "@/components/EventSection";
import { PostFeed } from "@/components/PostFeed";
import { PrayerTimes } from "@/components/PrayerTimes";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <EventSection />
        <PostFeed />
        <PrayerTimes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
