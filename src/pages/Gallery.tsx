import { ImageIcon, Upload } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Placeholder images - these would be replaced with actual gallery images
const placeholderImages = [
  { id: 1, title: "ইভেন্ট ছবি ১", placeholder: true },
  { id: 2, title: "ইভেন্ট ছবি ২", placeholder: true },
  { id: 3, title: "ইভেন্ট ছবি ৩", placeholder: true },
  { id: 4, title: "ইভেন্ট ছবি ৪", placeholder: true },
  { id: 5, title: "ইভেন্ট ছবি ৫", placeholder: true },
  { id: 6, title: "ইভেন্ট ছবি ৬", placeholder: true },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-cream islamic-pattern">
          <div className="container px-4 text-center">
            <ImageIcon className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              গ্যালারি
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের বিভিন্ন অনুষ্ঠান ও কার্যক্রমের স্মৃতিময় মুহূর্তগুলো
            </p>
            <div className="section-divider mt-6" />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {placeholderImages.map((image, index) => (
                <div
                  key={image.id}
                  className="card-islamic overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-muted-foreground">
                      <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">শীঘ্রই আসছে</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-foreground">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container px-4 text-center">
            <div className="max-w-2xl mx-auto card-islamic p-8 md:p-12">
              <Upload className="h-16 w-16 mx-auto mb-6 text-primary opacity-50" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                গ্যালারি শীঘ্রই আপডেট হবে
              </h2>
              <p className="text-muted-foreground mb-6">
                আমাদের ইভেন্ট ও কার্যক্রমের ছবি শীঘ্রই এখানে যুক্ত করা হবে। 
                আমাদের ফেসবুক পেইজে আপডেট পেতে ফলো করুন।
              </p>
              <a
                href="https://www.facebook.com/khilkhetmuslimsociety/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                ফেসবুক পেইজে যান →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}