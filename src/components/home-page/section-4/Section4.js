"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./section-4.scss";

const Section4 = () => {
  const links = [
    { href: '#', text: 'Kariyer Gelişim Kulübü', icon: "/img/home-page/section-4/icons/speech.svg", bgImage: "/img/home-page/section-4/images/kariyer.jpg", color: 'bg-gradient-to-r from-blue-900 to-blue-500', description: 'Kariyer fırsatlarını keşfedin.' },
    { href: '#', text: 'Spor ve Satranç Kulübü', icon: "/img/home-page/section-4/icons/chess.png", bgImage: "/img/home-page/section-4/images/satranc.jpg", color: 'bg-gradient-to-r from-green-900 to-green-500', description: 'Zihin açıcı satranç oyunları.' },
    { href: '#', text: 'Kültür Edebiyat Kulübü', icon: "/img/home-page/section-4/icons/edebiyat.svg", bgImage: "/img/home-page/section-4/images/backgrounds.png", color: 'bg-gradient-to-r from-yellow-900 to-yellow-500', description: 'Edebiyat dünyasında yolculuk.' },
    { href: '#', text: 'Görsel Sanatlar Kulübü', icon: "/img/home-page/section-4/icons/gorsel-muzik.svg", bgImage: "/img/home-page/section-4/images/paint.png", color: 'bg-gradient-to-r from-purple-900 to-purple-500', description: 'Sanat eserlerinizi yaratın.' },
    { href: '#', text: 'Diğer Etkinlikler', icon: "/img/home-page/section-4/icons/diger.svg", bgImage: "/img/home-page/section-4/images/diger.jpg", color: 'bg-gradient-to-r from-pink-900 to-pink-500', description: 'Çeşitli etkinliklerle tanışın.' },
    { href: '#', text: 'Robotik Kodlama Kulübü', icon: "/img/home-page/section-4/icons/code.png", bgImage: "/img/home-page/section-4/images/kodlama.jpg", color: 'bg-gradient-to-r from-teal-900 to-teal-500', description: 'Kodlama ve robotik dünyasına adım atın.' },
    { href: '#', text: 'Sosyal Etkinlikler Kulübü', icon: "/img/home-page/section-4/icons/sosyal.svg", bgImage: "/img/home-page/section-4/images/sosyal.jpg", color: 'bg-gradient-to-r from-orange-900 to-orange-500', description: 'Sosyal etkinlikler sizi bekliyor.' },
    { href: '#', text: 'Bilim ve Teknoloji Kulübü', icon: "/img/home-page/section-4/icons/science.png", bgImage: "/img/home-page/section-4/images/fen.jpg", color: 'bg-gradient-to-r from-indigo-900 to-indigo-500', description: 'Bilimsel keşifler ve deneyler.' }
  ];

  return (
    <div className="relative bg-[url('/img/common/f.png')] bg-cover bg-center bg-no-repeat py-12  ">


      <div className='container mx-auto w-3/4'>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight text-center mb-8">
         Akademik Koleji Öğrenci Kulüpleri  
        </h1>              
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group`}
              style={{
                backgroundImage: `url(${link.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className={`absolute inset-0 ${link.color} opacity-80`}></div>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative flex flex-col items-center justify-center h-full p-4 text-center text-white">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image src={link.icon} alt={link.text} width={64} height={64} className="object-contain" />
                </div>
                <h2 className="text-lg font-semibold mb-2">{link.text}</h2>
                {/* Kısa cümle */}
                <p className="text-sm opacity-90">{link.description}</p>
              </div>
              <span className={`absolute inset-0 rounded-lg border-4 border-transparent transition-opacity duration-300 border-opacity-0 group-hover:border-opacity-100 border-white`}></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
