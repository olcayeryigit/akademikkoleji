import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

// Aktif ve pasif ikonlar
const activeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 48 48">
    <path fill="white" fillRule="evenodd" d="M39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3m3 7h-6v16.5l3 4.5l3-4.5zM6 9v30a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3m14 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-9-3v3h3v-3zm-1-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m6.707-10.293a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" clipRule="evenodd" />
  </svg>
);

const passiveIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 48 48">
    <path fill="black" fillRule="evenodd" d="M39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3m3 7h-6v16.5l3 4.5l3-4.5zM6 9v30a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3m14 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-9-3v3h3v-3zm-1-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m6.707-10.293a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" clipRule="evenodd" />
  </svg>
);

const ExamCountdown = () => {
  const examDates = [
    { id: 1, date: new Date('2025-05-01T00:00:00'), name: '2025 TYT' },
    { id: 2, date: new Date('2025-06-01T00:00:00'), name: '2025 AYT' },
    { id: 3, date: new Date('2025-07-01T00:00:00'), name: '2025 YDT' },
  ];

  const [selectedDate, setSelectedDate] = useState(examDates[0].date.getTime());

  const handleExamClick = (date) => {
    setSelectedDate(date.getTime());
  };

  return (
    <div className="p-8">
      <div className="container mx-auto bg-gradient-to-r from-green-200 via-blue-200 to-red-200 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Sınav Takvimi: Akademi Koleji ile Zamanı Verimli Kullanın!</h1>
        <p className="mb-6 text-lg text-black  text-center">
          Sınav, bir öğrencinin akademik yolculuğunda kritik bir dönüm noktasıdır. Akademi Koleji olarak, bu sürecin her aşamasında öğrencilerimizin yanındayız.
          Amacımız, sadece bilgi aktarımı değil; aynı zamanda öğrencilerimizin özgüvenini artırmak ve başarıya ulaşmaları için gerekli olan tüm araçları sağlamaktır.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {examDates.map((exam) => (
            <button
              key={exam.id}
              onClick={() => handleExamClick(exam.date)}
              className={`flex items-center gap-2 border-2 rounded-full py-2 px-6 transition duration-300 transform ${
                selectedDate === exam.date.getTime()
                  ? 'border-white text-white bg-[#090E17] hover:bg-[#0A111D] shadow-lg scale-105' // Aktif buton için stiller
                  : 'border-gray-600 text-[#090E17] bg-white hover:bg-gray-300 hover:text-[#090E17] shadow-md' // Pasif buton için daha belirgin stiller
              }`}
            >
              {selectedDate === exam.date.getTime() ? activeIcon : passiveIcon} {/* İkon ekleniyor */}
              <span className="font-semibold">{exam.name}</span>
            </button>
          ))}
        </div>
        <CountdownTimer targetDate={selectedDate} />
      </div>
    </div>
  );
};

export default ExamCountdown;
