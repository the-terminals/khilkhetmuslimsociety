import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { eventData } from "@/data/eventData";
import eventPoster from "@/assets/event-poster.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden islamic-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-cream" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Content - Full Width */}
          <div className="space-y-8 animate-fade-up text-center">
            {/* Event Badge */}
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold">
              🎉 আসন্ন ইভেন্ট
            </span>

            {/* Event Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {eventData.title}
                <span className="block text-primary mt-2">{eventData.subtitle}</span>
              </h1>
              <div className="section-divider" />
            </div>

            {/* Event Poster */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <img
                src={eventPoster}
                alt="Youth Revival Call"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{eventData.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{eventData.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{eventData.location}, {eventData.locationDetails}</span>
              </div>
            </div>

            {/* Presented By & Organizer */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <span className="text-muted-foreground">প্রেজেন্টস বাই</span>
                <p className="text-lg font-bold text-accent">{eventData.presenter}</p>
              </div>
              <div>
                <span className="text-muted-foreground">হোস্টেড বাই</span>
                <p className="text-lg font-bold text-primary">{eventData.organizer}</p>
              </div>
            </div>

            {/* Countdown */}
            <div className="card-islamic p-6 max-w-lg mx-auto">
              <p className="text-center text-sm text-muted-foreground mb-4">ইভেন্ট শুরু হতে বাকি</p>
              <CountdownTimer targetDate={eventData.dateISO} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={eventData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-islamic group text-lg px-8 py-6">
                  এখনই রেজিস্ট্রেশন করুন
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/5 text-lg px-8 py-6">
                  আমাদের সম্পর্কে
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              ⚠️ {eventData.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
