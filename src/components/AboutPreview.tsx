import { ArrowRight, Heart, Users, BookOpen, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { organizationInfo } from "@/data/eventData";

const icons = [Heart, Users, BookOpen, Megaphone];

export function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-background islamic-pattern">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            আমাদের সম্পর্কে
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            প্রশংসা শুধুই আল্লাহর যিনি আমাদেরকে দ্বীনের স্বার্থে এক উম্মাহ এক দেহ এই ফিকিরকে ধারণ করে একটি প্ল্যাটফর্মে একত্রিত করেছেন।
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {organizationInfo.values.map((value, index) => {
            const Icon = icons[index];
            return (
              <div
                key={value.title}
                className="card-islamic p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/about">
            <Button variant="outline" size="lg" className="group border-primary/50">
              বিস্তারিত জানুন
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}