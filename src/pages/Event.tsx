import { ArrowRight, Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { eventData } from "@/data/eventData";
import eventPoster from "@/assets/event-poster.png";

export default function Event() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-background to-cream islamic-pattern">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div>
                  <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                    🎉 {eventData.presenter}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {eventData.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-primary font-semibold">
                    {eventData.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {eventData.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    দিনব্যাপী
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    খিলক্ষেত, ঢাকা
                  </span>
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
          </div>
        </section>

        {/* Speakers */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <Users className="inline-block h-8 w-8 mr-2 text-primary" />
                আলোচক ও অতিথিবৃন্দ
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {eventData.speakers.map((speaker, index) => (
                <div
                  key={speaker.name}
                  className="card-islamic p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full gradient-islamic flex items-center justify-center">
                    <span className="text-lg text-primary-foreground">🎤</span>
                  </div>
                  <h3 className="font-bold text-foreground">{speaker.name}</h3>
                  {speaker.title && (
                    <p className="text-xs text-muted-foreground mt-1">{speaker.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                রেজিস্ট্রেশনে যা পাচ্ছেন
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {eventData.benefits.map((benefit, index) => (
                <div
                  key={benefit.text}
                  className="card-islamic p-6 text-center hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-4xl mb-3 block">{benefit.icon}</span>
                  <p className="font-semibold text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Attraction */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <span className="text-5xl mb-4 block">⚽</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                বিশেষ আকর্ষণ
              </h2>
              <p className="text-xl mb-8 opacity-90">
                ইয়ুথদের জন্য থাকছে ফুটবল ম্যাচ!
              </p>
              <a
                href={eventData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  এখনই রেজিস্ট্রেশন করুন
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-16 md:py-20 bg-background islamic-pattern">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-islamic p-6 text-center">
                <Calendar className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-foreground mb-2">তারিখ</h3>
                <p className="text-muted-foreground">{eventData.date}</p>
              </div>
              <div className="card-islamic p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-foreground mb-2">সময়</h3>
                <p className="text-muted-foreground">দিনব্যাপী অনুষ্ঠান</p>
              </div>
              <div className="card-islamic p-6 text-center">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-foreground mb-2">স্থান</h3>
                <p className="text-muted-foreground">খিলক্ষেত, ঢাকা</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}