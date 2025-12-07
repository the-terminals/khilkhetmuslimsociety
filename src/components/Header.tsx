import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import kmsLogo from "@/assets/kms-logo.png";

const navItems = [
  { name: "হোম", path: "/" },
  { name: "আমাদের সম্পর্কে", path: "/about" },
  { name: "ইভেন্ট", path: "/event" },
  { name: "গ্যালারি", path: "/gallery" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={kmsLogo}
            alt="খিলক্ষেত মুসলিম সোসাইটি"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary leading-tight">
              খিলক্ষেত মুসলিম সোসাইটি
            </h1>
            <p className="text-xs text-muted-foreground">এক উম্মাহ এক দেহ</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}