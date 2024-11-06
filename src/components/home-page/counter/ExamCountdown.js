import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import Image from 'next/image';

// Aktif ve pasif ikonlar
const activeIcon = (
  <div>
    <Image src="/img/184.png" width={40} height={40}/>
  </div>
);

const passiveIcon = (
  <Image src="/img/183.png" width={40} height={40}/>
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
    <div className="p-8 bg-[#FCF7F5]">
      <div className="container mx-auto corner-shadow pt-6 px-4 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Sınav Takvimi: Akademi Koleji ile Zamanı Verimli Kullanın!</h1>
        <p className="mb-6 text-lg text-black  text-center">
          Sınav, bir öğrencinin akademik yolculuğunda kritik bir dönüm noktasıdır. Akademi Koleji olarak, bu sürecin her aşamasında öğrencilerimizin yanındayız.
          Amacımız, sadece bilgi aktarımı değil; aynı zamanda öğrencilerimizin özgüvenini artırmak ve başarıya ulaşmaları için gerekli olan tüm araçları sağlamaktır.
        </p>
        <div className="flex justify-center gap-2 md:gap-6 mb-6 ">
          {examDates.map((exam) => (
            <button
              key={exam.id}
              onClick={() => handleExamClick(exam.date)}
              className={`flex items-center gap-1 md:gap-2 border-1 md:border-2 rounded-full  md:py-2 md:px-6 transition duration-300 transform text-xs md:text-lg ${
                selectedDate === exam.date.getTime()
                  ? 'border-white text-white bg-[#111827] hover:bg-[#0A111D] shadow-lg scale-105' // Aktif buton için stiller
                  : 'border-[#111827] text-[#111827] bg-white hover:bg-gray-300 hover:text-[#090E17] shadow-md' // Pasif buton için daha belirgin stiller
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
