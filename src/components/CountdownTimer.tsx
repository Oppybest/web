'use client';

import { useEffect, useState } from 'react';

function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 20,
    minutes: 12,
    seconds: 57,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white text-base font-bold rounded-lg px-2 py-1 min-w-[40px] text-center">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-xs text-gray-400 mt-1">DAYS</div>
      </div>
      <span className="text-[#e1550d] text-base font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white text-base font-bold rounded-lg px-2 py-1 min-w-[40px] text-center">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs text-gray-400 mt-1">HOURS</div>
      </div>
      <span className="text-[#e1550d] text-base font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white text-base font-bold rounded-lg px-2 py-1 min-w-[40px] text-center">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs text-gray-400 mt-1">MINUTES</div>
      </div>
      <span className="text-[#e1550d] text-base font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white text-base font-bold rounded-lg px-2 py-1 min-w-[40px] text-center">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs text-gray-400 mt-1">SECONDS</div>
      </div>
    </div>
  );
}
