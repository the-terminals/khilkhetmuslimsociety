import { Calendar, Facebook, Globe, Heart, Target, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { organizationInfo } from "@/data/eventData";
import kmsLogo from "@/assets/kms-logo.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-cream islamic-pattern">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img
                src={kmsLogo}
                alt="KMS Logo"
                className="w-24 h-24 mx-auto mb-6 animate-float"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                আমাদের সম্পর্কে
              </h1>
              <p className="text-xl text-primary font-semibold mb-2">
                {organizationInfo.tagline}
              </p>
              <div className="section-divider mt-6" />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="card-islamic p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>প্রতিষ্ঠিত: {organizationInfo.established}</span>
                </div>
                <div className="prose prose-lg max-w-none">
                  {organizationInfo.intro.split("\n\n").map((para, index) => (
                    <p
                      key={index}
                      className="text-foreground leading-relaxed mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                আমাদের মূল্যবোধ
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {organizationInfo.values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-islamic p-6 text-center hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-islamic flex items-center justify-center">
                    <span className="text-2xl text-primary-foreground">
                      {index === 0 && "☪️"}
                      {index === 1 && "🤝"}
                      {index === 2 && "💚"}
                      {index === 3 && "📢"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-background islamic-pattern">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="card-islamic p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">আমাদের লক্ষ্য</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  তাওহীদের ভিত্তিতে সকল মুসলিম উম্মাহকে একত্রিত করে দ্বীনের প্রচার ও প্রসারে কাজ করা। খিলক্ষেত এলাকা থেকে শুরু করে সারা পৃথিবীর মুসলমানদের সাথে সম্পর্ক স্থাপন।
                </p>
              </div>

              {/* Vision */}
              <div className="card-islamic p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">আমাদের দৃষ্টিভঙ্গি</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  সম্প্রীতি, সহানুভূতি, সমর্থন, পরামর্শ ও সহযোগিতার মাধ্যমে একটি সুন্দর মুসলিম সমাজ গঠন করা যেখানে প্রতিটি মুসলিম নিজেকে পরিবারের অংশ মনে করবে।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">আমাদের সাথে যুক্ত থাকুন</h2>
            <p className="text-lg opacity-90 mb-8">
              আমাদের ফেসবুক পেইজ ও গ্রুপে যোগ দিন
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={organizationInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  ফেসবুক পেইজ
                </Button>
              </a>
              <a
                href={organizationInfo.socialLinks.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Users className="h-5 w-5 mr-2" />
                  ফেসবুক গ্রুপ
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}