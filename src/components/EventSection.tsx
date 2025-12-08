import { Users, CheckCircle } from "lucide-react";
import { eventData } from "@/data/eventData";
import { SpeakerCard } from "./SpeakerCard";

export function EventSection() {
  return (
    <section id="event" className="py-16 md:py-20 bg-secondary/30">
      <div className="container px-4">
        {/* Speakers Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Users className="inline-block h-4 w-4 mr-2" />
              আলোচক ও অতিথিবৃন্দ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              বিশেষ আলোচকগণ
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {eventData.speakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                title={speaker.title}
                hasImage={speaker.hasImage}
                delay={index * 50}
              />
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="inline-block h-4 w-4 mr-2" />
              রেজিস্ট্রেশনে যা পাচ্ছেন
            </span>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {eventData.benefits.map((benefit, index) => (
              <div
                key={benefit.text}
                className="card-islamic p-4 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl mb-2 block">{benefit.icon}</span>
                <p className="font-medium text-foreground text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Attraction */}
        <div className="mt-12 text-center">
          <div className="inline-block card-islamic p-6 bg-primary/5 border-primary/20 animate-pulse-slow">
            <span className="text-4xl mb-2 block">⚽</span>
            <p className="text-lg font-bold text-primary">বিশেষ আকর্ষণ</p>
            <p className="text-muted-foreground">ইয়ুথদের জন্য থাকছে ফুটবল ম্যাচ!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
