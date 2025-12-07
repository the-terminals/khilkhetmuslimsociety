import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-semibold text-accent">ইভেন্ট শুরু হয়ে গেছে!</p>
      </div>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: "দিন" },
    { value: timeLeft.hours, label: "ঘণ্টা" },
    { value: timeLeft.minutes, label: "মিনিট" },
    { value: timeLeft.seconds, label: "সেকেন্ড" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
              <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {block.value.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
          </div>
          <span className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}