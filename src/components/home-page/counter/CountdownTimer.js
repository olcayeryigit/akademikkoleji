import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Zaman dolduysa
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const renderCircle = (value, maxValue, color, unit) => {
    const radius = 40; // Daire yarıçapı
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / maxValue) * circumference;

    return (
      <div className="flex flex-col items-center font-bold">
        <svg width="100" height="100" viewBox="0 0 100 100" className="w-[80px] md:w-[100px]">
          <circle
            stroke="#fff"
            fill="transparent"
            strokeWidth="10"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth="10"
            r={radius}
            cx="50"
            cy="50"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="18"
            fill="black"
          >
            {value}
          </text>
        </svg>
        <h3 className="text-lg font-semibold mt-2 text-gray-800">{unit}</h3>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {/* Responsively display the circles in two columns on small screens */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {renderCircle(timeRemaining.days, 365, '#FF5733', 'Gün')}
        {renderCircle(timeRemaining.hours, 24, '#33FF57', 'Saat')}
        {renderCircle(timeRemaining.minutes, 60, '#3357FF', timeRemaining.seconds < 60 ? 'Dakika' : 'Saniye')}
        {renderCircle(timeRemaining.seconds, 60, '#FF33A1', 'Saniye')}
      </div>
    </div>
  );
};

export default CountdownTimer;
