// components/Section6.js
"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './section6.scss'; // SCSS dosyasını içe aktar
import { FaBriefcase, FaFutbol, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const announcements = [
  { title: "Yeni Eğitim Programı Başlıyor", date: "22-10-2024", description: "Yeni eğitim programımız 22-10-2024 tarihinde başlıyor.", icon: <FaGraduationCap className="text-xl" /> },
  { title: "Okul Spor Etkinliği", date: "01-11-2024", description: "01-11-2024 tarihinde düzenlenecek olan okul spor etkinliğine bekliyoruz.", icon: <FaFutbol className="text-xl" /> },
  { title: "Mezuniyet Töreni", date: "15-12-2024", description: "15-12-2024 tarihinde gerçekleşecek olan Mezuniyet töreni için hazırlıklara başlandı.", icon: <FaGraduationCap className="text-xl" /> },
  { title: "Kariyer Günü Etkinliği", date: "10-11-2024", description: "10-11-2024 tarihinde gerçekleşecek Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak.", icon: <FaBriefcase className="text-xl" /> },
  { title: "Yazılım Atölyesi", date: "05-12-2024", description: "Yazılım alanında uzmanların katılacağı atölyeler 05-12-2024 tarihinde başlıyor.", icon: <FaLaptopCode className="text-xl" /> },
  { title: "STEM Proje Yarışması", date: "20-01-2025", description: "Öğrencilerin STEM projelerini sergileyeceği yarışma 20-01-2025 tarihinde gerçekleşecek.", icon: <FaGraduationCap className="text-xl" /> },
];


const Section6 = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='container mx-auto p-6 flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight text-center mb-6'>
        Akademik Koleji Duyurular</h1>
    <div className="calendar-wrapper relative w-1/2 shadow-lg">
      <div className="calendar-cover">
        <header className="calendar-header">
          <h2 className="day">{date.getDate()}</h2>
          <h3 className="month">{date.toLocaleString('tr-TR', { month: 'long', year: 'numeric' })}</h3>
        </header>
        <div className="wires">
        <div className='flex gap-7'>
                  <div className="wire left"></div>
          <div className="wire left"></div>
            </div>
        <div className='flex gap-7'>
             <div className="wire right"></div>
          <div className="wire right"></div>
        </div>
         
        </div>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          locale="tr-TR" // Türkçe dil ayarı
          className="react-calendar"
        />
      </div>
    </div>
    </div>
  );
};

export default Section6;
