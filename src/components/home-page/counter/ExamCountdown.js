import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import Image from 'next/image';

// Aktif ve pasif ikonlar
const activeIcon = (
  <div>
    <Image src="/img/184.png" width={40} height={40} />
  </div>
);

const passiveIcon = (
  <Image src="/img/183.png" width={40} height={40} />
);

const ExamCountdown = () => {
  const examDates = [
    { id: 1, date: new Date('2025-05-01T00:00:00'), name: '2025 TYT' },
    { id: 2, date: new Date('2025-06-01T00:00:00'), name: '2025 AYT' },
    { id: 3, date: new Date('2025-07-01T00:00:00'), name: '2025 YDT' },
  ];

  const [selectedTab, setSelectedTab] = useState(examDates[0].id); // Aktif sekmeyi takip etmek için id

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400">
      <div className="container mx-auto w-full px-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Resim ve Logo */}
          <div className="relative h-[28rem] flex justify-center items-center order-2 md:order-1">
            <Image src="/70.png" fill className="object-contain z-40" />
            <Image src="/Yeni klasör/107.svg" fill className="object-cover z-30" />
          </div>

          {/* Metin ve Tablar */}
          <div className="flex flex-col justify-center gap-8 order-1 md:order-2">
            <div className="space-y-2">
              <h2 className="text-xl md:text-3xl font-extrabold tracking-wide">AKADEMİK KOLEJİ İLE</h2>
              <h2 className="text-xl md:text-3xl font-extrabold tracking-wide">ZAMANI VERİMLİ KULLANIN!</h2>
            </div>

            {/* Tablar */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center justify-center">
                {examDates.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => handleTabClick(exam.id)} // Tab seçildiğinde id ile aktif yap
                    className={`w-full h-16 flex items-center justify-center text-xs md:text-lg transition duration-300 transform
                    ${selectedTab === exam.id
                        ? 'bg-orange-400 text-white border-white shadow-lg' // Aktif tab stilleri
                        : 'bg-white text-[#111827] border-[#111827] hover:bg-gray-300 hover:text-[#090E17] shadow-md' // Pasif tab stilleri
                    }`}
                  >
                    <span className="font-semibold text-md">{exam.name} SINAVI</span>

                    {/* Üçgen işareti */}
                    {selectedTab === exam.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-400" />
                    )}
                  </button>
                ))}
              </div>
              <div className="w-full">
                {examDates.map(
                  (exam) =>
                    selectedTab === exam.id && (
                      <div key={exam.id} className="p-4 bg-gray-100">
                        <CountdownTimer targetDate={exam.date.getTime()} />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Açıklama Metni */}
      <div className="flex items-center justify-center w-full bg-[#FB923C] p-4 order-3 md:order-3">
        <p className="text-base text-gray-900 text-center md:text-left">
          Sınav, bir öğrencinin akademik yolculuğunda kritik bir dönüm noktasıdır. Akademi Koleji olarak, bu sürecin her aşamasında öğrencilerimizin yanındayız. Amacımız, sadece bilgi aktarımı değil; aynı zamanda öğrencilerimizin özgüvenini artırmak ve başarıya ulaşmaları için gerekli olan tüm araçları sağlamaktır.
        </p>
      </div>
    </div>
  );
};

export default ExamCountdown;



/** <p className=" text-md ">
          Sınav, bir öğrencinin akademik yolculuğunda kritik bir dönüm noktasıdır. Akademi Koleji olarak, bu sürecin her aşamasında öğrencilerimizin yanındayız. Amacımız, sadece bilgi aktarımı değil; aynı zamanda öğrencilerimizin özgüvenini artırmak ve başarıya ulaşmaları için gerekli olan tüm araçları sağlamaktır.
        </p>

 */