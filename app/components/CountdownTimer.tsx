"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="flex gap-3 sm:gap-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">--</span>
            </div>
            <span className="text-xs sm:text-sm text-white/70 mt-1">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-white/70 mt-1">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
