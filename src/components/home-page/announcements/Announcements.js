"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./announcements.scss";
import Image from "next/image";

const announcements = [
  { title: "Yeni Eğitim Programı Başlıyor", date: "22-10-2024", description: "Yeni eğitim programımız 22-10-2024 tarihinde başlıyor." },
  { title: "Okul Spor Etkinliği", date: "01-11-2024", description: "01-11-2024 tarihinde düzenlenecek olan okul spor etkinliğine bekliyoruz." },
  { title: "Mezuniyet Töreni", date: "15-12-2024", description: "15-12-2024 tarihinde gerçekleşecek olan Mezuniyet töreni için hazırlıklara başlandı." },
  { title: "Kariyer Günü Etkinliği", date: "10-11-2024", description: "10-11-2024 tarihinde gerçekleşecek Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak." },
  { title: "Yazılım Atölyesi", date: "05-12-2024", description: "Yazılım alanında uzmanların katılacağı atölyeler 05-12-2024 tarihinde başlıyor." },
  { title: "STEM Proje Yarışması", date: "20-01-2025", description: "Öğrencilerin STEM projelerini sergileyeceği yarışma 20-01-2025 tarihinde gerçekleşecek." },
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

  const today = new Date();
  const formattedDay = today.getDate();
  const formattedMonth = today.toLocaleString("tr-TR", { month: "long" });
  const formattedYear = today.getFullYear();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= currentAnnouncements.length ? 0 : nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [currentAnnouncements.length]);

  return (
    <div className="px-5 lg:px-24 py-24 bg-[#F4F5F6] ">
      <div className="announcement-container container mx-auto  ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Akademik Koleji Duyurular</h2>
        
        <div className="flex flex-col grid grid-cols-1 lg:grid-cols-5 shadow-lg mx-auto rounded-lg overflow-hidden bg-white max-w-[1200px]  ">

          <div className="lg:col-span-2 announcements-column flex flex-col p-6 text-gray-800 bg-[#97E981]">
            <div className="text-center mb-6 flex justify-center gap-2">
         
          
              <div className="flex flex-col gap-2">
               <div className="text-5xl font-semibold">{formattedDay}</div>
              <div className="text-2xl text-gray-600">{formattedMonth}</div>
              <div className="text-2xl text-gray-600">{formattedYear}</div>  
              </div>
             
            </div>

            {currentAnnouncements.map((announcement, index) => (
              <div 
                key={index} 
                className={`flex flex-col p-4 mb-4 rounded-lg transition duration-300 h-28 bg-white
                            ${highlightedIndex === index ? "bg-opacity-80" : "bg-opacity-50"}`}
              >
                <div className="font-semibold text-md">{announcement.title}</div>
                <p className="text-sm text-gray-700">{announcement.description}</p>
                <span className="text-xs text-gray-500">{announcement.date}</span>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-4">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} 
                disabled={currentPage === 0} 
                className={`text-sm w-8 h-2 rounded-md transition duration-300 bg-white
                            ${currentPage === 0 ? "bg-opacity-80" : "bg-opacity-50"}`}
              >
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(announcements.length / announcementsPerPage) - 1))} 
                disabled={currentPage >= Math.ceil(announcements.length / announcementsPerPage) - 1} 
                className={`text-sm w-8 h-2 rounded-md transition duration-300 bg-white 
                            ${currentPage >= Math.ceil(announcements.length / announcementsPerPage) - 1 ? "bg-opacity-80" : "bg-opacity-50"}`}
              >
              </button>
            </div>
          </div>

          <div className="calendar-column lg:col-span-3 border-l border-gray-100 ">
            <Calendar 

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
              className="border-l w-full h-full px-20 flex flex-col mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
