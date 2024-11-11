"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Font Awesome ok ikonu

const Clubs = () => {
  const links = [
    { href: '#', text: 'Kariyer Gelişim Kulübü', icon: "/img/section-4/10.png", bgImage: "/img/home-page/section-4/images/kariyer.jpg", color: 'bg-gradient-to-r from-gray-300 to-gray-100', description: 'Kariyer fırsatlarını keşfedin.' },
    { href: '#', text: 'Spor ve Satranç Kulübü', icon: "/img/section-4/12.png", bgImage: "/img/home-page/section-4/images/satranc.jpg", color: 'bg-gradient-to-r from-green-200 to-green-100', description: 'Zihin açıcı satranç oyunları.' },
    { href: '#', text: 'Kültür Edebiyat Kulübü', icon: "/img/section-4/13.png", bgImage: "/img/home-page/section-4/images/backgrounds.png", color: 'bg-gradient-to-r from-yellow-200 to-yellow-100', description: 'Edebiyat dünyasında yolculuk.' },
    { href: '#', text: 'Görsel Sanatlar Kulübü', icon: "/img/section-4/15.png", bgImage: "/img/home-page/section-4/images/paint.png", color: 'bg-gradient-to-r from-purple-200 to-purple-100', description: 'Sanat eserlerinizi yaratın.' },
    { href: '#', text: 'Diğer Etkinlikler', icon: "/img/section-4/11.png", bgImage: "/img/home-page/section-4/images/diger.jpg", color: 'bg-gradient-to-r from-pink-200 to-pink-100', description: 'Çeşitli etkinliklerle tanışın.' },
    { href: '#', text: 'Robotik Kodlama Kulübü', icon: "/img/section-4/14.png", bgImage: "/img/home-page/section-4/images/kodlama.jpg", color: 'bg-gradient-to-r from-teal-200 to-teal-100', description: 'Kodlama ve robotik dünyasına adım atın.' },
    { href: '#', text: 'Sosyal Etkinlikler Kulübü', icon: "/img/section-4/26.png", bgImage: "/img/home-page/section-4/images/sosyal.jpg", color: 'bg-gradient-to-r from-red-200 to-red-100', description: 'Sosyal etkinlikler sizi bekliyor.' },
    { href: '#', text: 'Bilim ve Teknoloji Kulübü', icon: "/img/section-4/24.png", bgImage: "/img/home-page/section-4/images/fen.jpg", color: 'bg-gradient-to-r from-blue-200 to-blue-100', description: 'Bilimsel keşifler ve deneyler.' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-white ">
       
      <div className='container mx-auto w-full md:w-3/4 px-6 md:px-0 py-12 '>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-3 text-center ">
          Akademik Koleji Öğrenci Kulüpleri  
        </h1>   
        <h2 className='text-lg text-gray-800 max-w-2xl mx-auto mb-10 text-center'>Sosyal, Kültürel ve Akademik Gelişim İçin Kulüpler</h2>           
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group`}
            >
              <div className={`absolute inset-0 ${link.color} opacity-80`}></div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img src="/bg-9.png" className="absolute w-full h-full object-cover opacity-50" alt="Your Image"/>
              <div className="relative flex flex-col items-center justify-center h-full p-4 text-center ">
                <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-110">
                  <Image src={link.icon} alt={link.text} fill className="object-contain" />
                </div>
                <h2 className="text-lg font-semibold mb-2">{link.text}</h2>
                {/* Sağ üst köşeye ok ikonu ekleme */}
                <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaArrowRight className="text-white text-xl" />
                </div>
              </div>
              <span className={`absolute inset-0 rounded-lg border-2 border-transparent transition-transform duration-300 border-4 group-hover:border-white`}></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
