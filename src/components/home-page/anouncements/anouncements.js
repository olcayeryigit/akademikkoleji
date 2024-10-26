import React, { useState, useEffect } from "react";
import { FaBell, FaFutbol, FaBriefcase, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import Image from "next/image";

// Duyuru verileri
const announcements = [
  { title: "Yeni Eğitim Programı Başlıyor", date: "Ekim 22 2024", description: "Yeni eğitim programımız Kasım ayında başlıyor. Detaylar için web sitemizi ziyaret edin.", icon: <FaGraduationCap className="text-3xl" /> },
  { title: "Okul Spor Etkinliği", date: "Kasım 1 2024", description: "Bu hafta sonu düzenlenecek olan okul spor etkinliğimize herkesi bekliyoruz.", icon: <FaFutbol className="text-3xl" /> },
  { title: "Mezuniyet Töreni", date: "Aralık 15 2024", description: "Mezuniyet töreni hazırlıkları başladı. Ayrıntılı bilgi yakında duyurulacaktır.", icon: <FaGraduationCap className="text-3xl" /> },
  { title: "Kariyer Günü Etkinliği", date: "Kasım 10 2024", description: "Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak. Katılım herkese açıktır.", icon: <FaBriefcase className="text-3xl" /> },
  { title: "Yazılım Atölyesi", date: "Aralık 5 2024", description: "Yazılım alanında uzmanların yer alacağı atölye çalışmalarımıza kayıtlar başladı.", icon: <FaLaptopCode className="text-3xl" /> },
  { title: "STEM Proje Yarışması", date: "Ocak 20 2025", description: "Öğrencilerimizin STEM projelerini sergileyeceği yarışmamıza herkesi bekliyoruz.", icon: <FaGraduationCap className="text-3xl" /> },
];

const Announcements = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const announcementsPerPage = 3;
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);
  const currentAnnouncements = announcements.slice(
    currentPage * announcementsPerPage,
    currentPage * announcementsPerPage + announcementsPerPage
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % currentAnnouncements.length;
        if (nextIndex === 0) setAnimationComplete(true);
        return nextIndex;
      });
    }, 7000); // Toplam bekleme süresi (4.5s geçiş + 2.5s bekleme)

    return () => clearInterval(interval);
  }, [currentAnnouncements]);

  useEffect(() => {
    if (activeIndex > 0) {
      setAnimationComplete(false); // Her animasyonun başlangıcında
    }
  }, [activeIndex]);

  return (
    <div className="announcement-container bg-[#ECF3F5] py-8">
      <div className="container mx-auto w-full md:w-11/12 lg:w-2/3">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Duyurular</h2>

        <div className="flex gap-10">
          <div className="w-2/3">
            <div className="relative">
              {/* Aktif duyuru için animasyonlu çizgi */}
              <div 
                className={`absolute h-1 bg-red-600 transition-all duration-500 ${animationComplete ? 'animated-line' : ''}`}
                style={{
                  left: `${(activeIndex * 100) / currentAnnouncements.length}%`,
                  top: 0,
                  transform: `translateX(-50%)`,
                }} 
              />
              <div className="space-y-4">
                {currentAnnouncements.map((announcement, index) => (
                  <div key={index} className={`announcement-card  flex bg-white rounded-lg shadow-sm relative`}>
                    <div className={`h-1 absolute top-0 w-full transition-all duration-500 ${activeIndex === index ? 'bg-[#E85446]' : 'bg-[#C0E1ED]'}`} />
                    <div className="flex flex-col items-center justify-center rounded-lg px-5">
                 

                      <p className="announcement-date font-semibold text-black"  >
{announcement.date.split(" ")[1]}
                      </p>

                      <p className="text-xs text-gray-600">{announcement.date.split(" ")[0]} </p>
                 <p className="text-xs text-gray-600">{announcement.date.split(" ")[2]}</p>
                    </div>

                    <div className="flex-1 ml-5 py-3">
                      <div className="flex items-center">
                        <h3 className="announcement-title text-sm font-semibold text-gray-800">{announcement.title}</h3>
                        <div className={`ml-2 transition-transform duration-1000  ${activeIndex === index ? 'animate-bell' : ''}`}>
                          <FaBell className={`bell-icon ${activeIndex === index ? 'text-red-600' : 'text-[#C0E1ED]'}`} />
                        </div>
                      </div>
                      <p className="announcement-description text-gray-600 leading-relaxed mt-2 text-sm">{announcement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-1 w-4 rounded-full transition-colors duration-300 
                    ${currentPage === index ? "bg-red-500" : "bg-[#C0E1ED] hover:bg-red-300"}`}
                />
              ))}
            </div>
          </div>

          <div className="relative w-1/3 h-auto">
            <Image
              src="/img/home-page/announcements/annoncements.png"
              fill
              className="object-contain"
              alt="Duyurular"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
