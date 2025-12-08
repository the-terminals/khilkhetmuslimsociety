import { ArrowRight, Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { eventData } from "@/data/eventData";
import eventPoster from "@/assets/event-poster.png";

export function EventSection() {
  return (
    <section id="event" className="py-16 md:py-20 bg-secondary/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            🎉 আসন্ন ইভেন্ট
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {eventData.title}
          </h2>
          <p className="text-xl text-primary font-semibold">{eventData.subtitle}</p>
          <div className="section-divider mt-4" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Poster */}
          <div className="relative animate-fade-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={eventPoster}
                alt="Youth Revival Call"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Right - Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Presented By & Organizer */}
            <div className="card-islamic p-4">
              <p className="text-sm text-muted-foreground">প্রেজেন্টস</p>
              <p className="text-lg font-bold text-accent">{eventData.presenter}</p>
              <p className="text-sm text-muted-foreground mt-2">আয়োজনে</p>
              <p className="text-lg font-bold text-primary">{eventData.organizer}</p>
            </div>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{eventData.date}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>দিনব্যাপী সেমিনার</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{eventData.location}</p>
                  <p className="text-sm">{eventData.locationDetails}</p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="card-islamic p-6">
              <p className="text-center text-sm text-muted-foreground mb-4">
                ইভেন্ট শুরু হতে বাকি
              </p>
              <CountdownTimer targetDate={eventData.dateISO} />
            </div>

            {/* Register Button */}
            <a
              href={eventData.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full btn-islamic text-lg py-6 group">
                এখনই রেজিস্ট্রেশন করুন
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <p className="text-center text-sm text-muted-foreground">
              ⚠️ {eventData.note}
            </p>
          </div>
        </div>

        {/* Speakers */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              <Users className="inline-block h-6 w-6 mr-2 text-primary" />
              আলোচক ও অতিথিবৃন্দ
            </h3>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {eventData.speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className="card-islamic p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full gradient-islamic flex items-center justify-center">
                  <span className="text-sm text-primary-foreground">🎤</span>
                </div>
                <h4 className="font-bold text-foreground text-sm">{speaker.name}</h4>
                {speaker.title && (
                  <p className="text-xs text-muted-foreground mt-1">{speaker.title}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              রেজিস্ট্রেশনে যা পাচ্ছেন
            </h3>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {eventData.benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="card-islamic p-4 text-center hover:shadow-xl transition-all duration-300"
              >
                <span className="text-3xl mb-2 block">{benefit.icon}</span>
                <p className="font-medium text-foreground text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Attraction */}
        <div className="mt-12 text-center">
          <div className="inline-block card-islamic p-6 bg-primary/5 border-primary/20">
            <span className="text-4xl mb-2 block">⚽</span>
            <p className="text-lg font-bold text-primary">বিশেষ আকর্ষণ</p>
            <p className="text-muted-foreground">ইয়ুথদের জন্য থাকছে ফুটবল ম্যাচ!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
