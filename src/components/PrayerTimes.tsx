import { useState, useEffect } from "react";
import { Clock, MapPin, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrayerTime {
  name: string;
  nameBn: string;
  time: string;
}

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<string>("");

  const fetchPrayerTimes = async () => {
    setLoading(true);
    try {
      const today = new Date();
      const dateStr = today.toLocaleDateString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDate(dateStr);

      // Using Aladhan API for Dhaka
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=1`
      );
      const data = await response.json();

      if (data.code === 200) {
        const timings = data.data.timings;
        setPrayerTimes([
          { name: "Fajr", nameBn: "ফজর", time: timings.Fajr },
          { name: "Dhuhr", nameBn: "যোহর", time: timings.Dhuhr },
          { name: "Asr", nameBn: "আসর", time: timings.Asr },
          { name: "Maghrib", nameBn: "মাগরিব", time: timings.Maghrib },
          { name: "Isha", nameBn: "এশা", time: timings.Isha },
        ]);
      }
    } catch (error) {
      console.error("Failed to fetch prayer times:", error);
      // Fallback static times for Dhaka
      setPrayerTimes([
        { name: "Fajr", nameBn: "ফজর", time: "05:15" },
        { name: "Dhuhr", nameBn: "যোহর", time: "12:00" },
        { name: "Asr", nameBn: "আসর", time: "15:45" },
        { name: "Maghrib", nameBn: "মাগরিব", time: "17:15" },
        { name: "Isha", nameBn: "এশা", time: "18:30" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  // Convert to Bengali numerals
  const toBengaliNumerals = (num: string | number): string => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/[0-9]/g, (d) => bengaliDigits[parseInt(d)]);
  };

  // Convert 24h to 12h format with Bengali numerals
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    let h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${toBengaliNumerals(h)}:${toBengaliNumerals(minutes)} ${ampm}`;
  };

  return (
    <section id="prayer" className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold">নামাজের সময়সূচী</h2>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <MapPin className="h-4 w-4" />
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
          {date && <p className="text-sm opacity-80 mt-1">{date}</p>}
        </div>

        {loading ? (
          <div className="flex justify-center">
            <RefreshCw className="h-8 w-8 animate-spin opacity-50" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {prayerTimes.map((prayer, index) => (
              <div
                key={prayer.name}
                className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 text-center transition-all hover:bg-primary-foreground/20 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg font-bold">{prayer.nameBn}</p>
                <p className="text-2xl font-bold mt-1">{formatTime(prayer.time)}</p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchPrayerTimes}
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            রিফ্রেশ করুন
          </Button>
        </div>
      </div>
    </section>
  );
}