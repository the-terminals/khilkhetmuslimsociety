import { Link } from "react-router-dom";
import { Facebook, Globe, Heart } from "lucide-react";
import { organizationInfo } from "@/data/eventData";
import kmsLogo from "@/assets/kms-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={kmsLogo}
                alt="KMS Logo"
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-lg font-bold">{organizationInfo.name}</h3>
                <p className="text-sm opacity-90">{organizationInfo.tagline}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              তাওহীদের ভিত্তিতে সকল মুসলিম উম্মাহকে এক প্ল্যাটফর্মে একত্রিত করার লক্ষ্যে প্রতিষ্ঠিত।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">দ্রুত লিংক</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                হোম
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                আমাদের সম্পর্কে
              </Link>
              <Link to="/event" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                ইভেন্ট
              </Link>
              <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                গ্যালারি
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">সোশ্যাল মিডিয়া</h4>
            <div className="flex flex-col gap-3">
              <a
                href={organizationInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Facebook className="h-4 w-4" />
                ফেসবুক পেইজ
              </a>
              <a
                href={organizationInfo.socialLinks.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Facebook className="h-4 w-4" />
                ফেসবুক গ্রুপ
              </a>
              <a
                href={organizationInfo.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Globe className="h-4 w-4" />
                ওয়েবসাইট
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>© ২০২৫ খিলক্ষেত মুসলিম সোসাইটি। সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-400" /> আল্লাহর সন্তুষ্টির জন্য
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}