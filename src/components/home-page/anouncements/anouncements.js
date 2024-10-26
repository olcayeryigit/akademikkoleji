"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { FaFutbol, FaBriefcase, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import "./announcements.scss";

const announcements = [
  { title: "Yeni Eğitim Programı Başlıyor", date: "22-10-2024", description: "Yeni eğitim programımız 22-10-2024 tarihinde başlıyor.", icon: <FaGraduationCap className="text-xl" /> },
  { title: "Okul Spor Etkinliği", date: "01-11-2024", description: "01-11-2024 tarihinde düzenlenecek olan okul spor etkinliğine bekliyoruz.", icon: <FaFutbol className="text-xl" /> },
  { title: "Mezuniyet Töreni", date: "15-12-2024", description: "15-12-2024 tarihinde gerçekleşecek olan Mezuniyet töreni için hazırlıklara başlandı.", icon: <FaGraduationCap className="text-xl" /> },
  { title: "Kariyer Günü Etkinliği", date: "10-11-2024", description: "10-11-2024 tarihinde gerçekleşecek Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak.", icon: <FaBriefcase className="text-xl" /> },
  { title: "Yazılım Atölyesi", date: "05-12-2024", description: "Yazılım alanında uzmanların katılacağı atölyeler 05-12-2024 tarihinde başlıyor.", icon: <FaLaptopCode className="text-xl" /> },
  { title: "STEM Proje Yarışması", date: "20-01-2025", description: "Öğrencilerin STEM projelerini sergileyeceği yarışma 20-01-2025 tarihinde gerçekleşecek.", icon: <FaGraduationCap className="text-xl" /> },
];

function convertDateFormat(dateString) {
  const [day, month, year] = dateString.split('-');
  return `${year}.${month}.${day}`;
}

const Announcements = () => {
  const [value, setValue] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const announcementsPerPage = 3;

  const markedDates = announcements.map(announcement => new Date(convertDateFormat(announcement.date)));
  const indexOfLastAnnouncement = (currentPage + 1) * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= currentAnnouncements.length ? 0 : nextIndex;
      });
    }, 8000); // Her 8 saniyede bir değiştir

    return () => clearInterval(interval); // Temizleme işlemi
  }, [currentAnnouncements.length]);

  return (
    <div className="bg-[#F9FAFB] px-32 py-10">

    <div className="announcement-container container mx-auto  rounded-lg shadow-lg p-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Akademik Koleji Duyurular</h2>
      <div className="grid md:grid-cols-5 gap-4">
        
        <div className="md:col-span-2 announcements-column flex flex-col">
          {currentAnnouncements.map((announcement, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-3 mb-3 rounded-lg shadow-md transition duration-300 ease-in-out bg-white text-gray-800 ${highlightedIndex === index ? "bg-gray-300" : ""}`}
            >
              <div className="flex items-center mb-1">
                {announcement.icon}
                <span className="font-semibold text-md ml-2">{announcement.title}</span>
              </div>
              <p className="text-xs text-gray-600">{announcement.description}</p>
              <span className="text-xs text-gray-500">{announcement.date}</span>
            </div>
          ))}

          <div className="flex justify-center gap-2 ">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} 
              disabled={currentPage === 0} 
              className="bg-gray-300 w-6 h-2 rounded-full flex justify-center items-center hover:bg-gray-400 transition duration-300"
            >
            </button>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(announcements.length / announcementsPerPage) - 1))} 
              disabled={currentPage >= Math.ceil(announcements.length / announcementsPerPage) - 1} 
              className="bg-gray-300 w-6 h-2 rounded-full flex justify-center items-center hover:bg-gray-400 transition duration-300"
            >
            </button>
          </div>
        </div>

        <div className="calendar-column bg-white p-4 rounded-lg shadow-md md:col-span-3">
          <Calendar 
            className="react-calendar" 
            locale="tr-TR" 
            tileClassName={({ date }) => {
              return markedDates.some(markedDate => 
                markedDate.getFullYear() === date.getFullYear() &&
                markedDate.getMonth() === date.getMonth() &&
                markedDate.getDate() === date.getDate()
              ) ? 'highlight' : null; 
            }}
            onChange={setValue} 
            value={value} 
          />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Announcements;
