import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { eventData } from "@/data/eventData";
import eventPoster from "@/assets/event-poster.png";
import kmsLogo from "@/assets/kms-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden islamic-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-cream" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <img src={kmsLogo} alt="" className="h-5 w-5" />
              <span className="text-sm font-medium text-primary">আসসালামু আলাইকুম</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                খিলক্ষেত মুসলিম
                <span className="block text-primary">সোসাইটি</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                এক উম্মাহ এক দেহ
              </p>
              <div className="section-divider !mx-0" />
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              তাওহীদের ভিত্তিতে সারা পৃথিবীর সকল মুসলিম উম্মাহকে এক প্ল্যাটফর্মে একত্রিত করার লক্ষ্যে আমাদের যাত্রা।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/event">
                <Button size="lg" className="btn-islamic group">
                  ইভেন্টে যোগ দিন
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/5">
                  আমাদের সম্পর্কে
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Event Card */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="card-islamic p-6 md:p-8 space-y-6">
              {/* Event Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold">
                  🎉 আসন্ন ইভেন্ট
                </span>
                <span className="text-sm text-muted-foreground">প্রথমবার!</span>
              </div>

              {/* Event Poster */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={eventPoster}
                  alt="Youth Revival Call"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Event Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-accent font-medium">{eventData.presenter}</p>
                  <h3 className="text-2xl font-bold text-foreground">{eventData.title}</h3>
                  <p className="text-lg text-primary font-semibold">{eventData.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {eventData.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    খিলক্ষেত, ঢাকা
                  </span>
                </div>

                {/* Countdown */}
                <div className="pt-4 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground mb-3">ইভেন্ট শুরু হতে বাকি</p>
                  <CountdownTimer targetDate={eventData.dateISO} />
                </div>

                {/* Register Button */}
                <a
                  href={eventData.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full btn-islamic">
                    এখনই রেজিস্ট্রেশন করুন
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Decorative floating element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}