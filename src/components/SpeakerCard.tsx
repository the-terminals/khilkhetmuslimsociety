import { Book, Mic, Award, Star, Heart, Sparkles, Moon, Sun, BookOpen, Bookmark, GraduationCap, Crown, Lightbulb } from "lucide-react";

// Unique icons for each speaker
const speakerIcons = [
  Book,        // মুফতি তারিকুজ্জামান
  Star,        // মুহাম্মাদ রাফিউজ্জামান
  Moon,        // মাওলানা মুহাম্মদ যাইনুল আবেদীন
  Sparkles,    // সালেহ আহমেদ তোহা
  Lightbulb,   // মাহমুদ আকিব
  Crown,       // মাওলানা হুসাইন আহমাদ কাসেমী
  Award,       // মাওলানা মারুফ হুসাইন
  BookOpen,    // মাওলানা জহিরুল ইসলাম সিরাজী
  Heart,       // তামিম মৃধা
  GraduationCap, // আহমেদ রফিক
  Bookmark,    // আব্দুল্লাহ আল মাসউদ
  Sun,         // আহমেদ জুনাইদ
];

interface SpeakerCardProps {
  name: string;
  title?: string;
  hasImage: boolean;
  imageUrl?: string;
  delay?: number;
  index?: number;
}

export function SpeakerCard({ name, title, hasImage, imageUrl, delay = 0, index = 0 }: SpeakerCardProps) {
  const IconComponent = speakerIcons[index % speakerIcons.length];
  
  return (
    <div 
      className="group relative animate-fade-up h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="card-islamic p-4 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 overflow-hidden h-full flex flex-col">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg border-2 border-primary/30 animate-pulse" />
        </div>
        
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
            {hasImage && imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full gradient-islamic flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </div>
            )}
          </div>
          
          {/* Mic Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Mic className="h-4 w-4 text-accent-foreground" />
          </div>
        </div>
        
        {/* Name */}
        <h4 className="font-bold text-foreground text-sm leading-tight mb-1 relative z-10 group-hover:text-primary transition-colors duration-300 flex-grow">
          {name}
        </h4>
        
        {/* Title */}
        {title && (
          <p className="text-xs text-muted-foreground relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {title}
          </p>
        )}
        
        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}
