import { organizationInfo } from "@/data/eventData";

export function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-20 bg-background islamic-pattern">
      <div className="container px-4">
        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            আমাদের সম্পর্কে
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {organizationInfo.intro}
          </p>
          <p className="mt-4 text-sm text-primary font-medium">
            প্রতিষ্ঠিত: {organizationInfo.established}
          </p>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
            আমাদের মূল্যবোধ
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationInfo.values.map((value) => (
              <div
                key={value.title}
                className="card-islamic p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
