"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Section4 = () => {
  const leftLinks = [
    { href: '#', text: 'KARİYER GELİŞİM KULÜBÜ', icon: "/img/home-page/section-4/icons/speech.svg", src: "/img/home-page/section-4/images/kariyer.jpg" },
    { href: '#', text: 'SPOR ve SATRANÇ KULÜBÜ', icon: "/img/home-page/section-4/icons/chess.png", src: "/img/home-page/section-4/images/satranc.jpg" },
    { href: '#', text: 'KÜLTÜR EDEBİYAT KULÜBÜ', icon: "/img/home-page/section-4/icons/edebiyat.svg", src: "/img/home-page/section-4/images/backgrounds.png" },
    { href: '#', text: 'GÖRSEL SANATLAR VE MÜZİK KULÜBÜ', icon: "/img/home-page/section-4/icons/gorsel-muzik.svg", src: "/img/home-page/section-4/images/paint.png" }
  ];

  const rightLinks = [
    { href: '#', text: 'DİĞER ETKİNLİKLER', icon: "/img/home-page/section-4/icons/diger.svg", src: "/img/home-page/section-4/images/diger.jpg" },
    { href: '#', text: 'ROBOTİK KODLAMA KULÜBÜ', icon: "/img/home-page/section-4/icons/code.png", src: "/img/home-page/section-4/images/kodlama.jpg" },
    { href: '#', text: 'SOSYAL ETKİNLİKLER', icon: "/img/home-page/section-4/icons/sosyal.svg", src: "/img/home-page/section-4/images/sosyal.jpg" },
    { href: '#', text: 'BİLİM, FEN ve TEKNOLOJİ KULÜBÜ', icon: "/img/home-page/section-4/icons/science.png", src: "/img/home-page/section-4/images/fen.jpg" }
  ];

  return (
    <div className="container mx-auto w-full h-auto grid grid-cols-1 md:grid-cols-9 gap-8 p-8">
      {/* Sol tarafta kare linkler */}
      <div className="md:col-span-3 grid grid-cols-2 gap-6">
        {leftLinks.map((link, index) => (
          <div
          as={Link}
          href=""
            key={index}
            className="relative bg-black flex items-center justify-center group overflow-hidden rounded shadow-xl aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
          >
            {/* Arka plan resmi */}
            <Image
              fill
              src={link.src}
              alt={link.text}
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />

            {/* Opak mavi katman */}
            <div className="absolute inset-0 bg-blue-900 opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Icon */}
            <div className="relative z-10 flex flex-col items-center text-white">
              <Image
                width={50}
                height={50}
                src={link.icon}
                alt={link.text}
                className="mb-2 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-md font-semibold text-center">{link.text}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Ortadaki video */}
      <div className="md:col-span-3 flex flex-col justify-center items-center">
        {/* Üst logo */}
        <div className='shadow-2xl rounded w-full h-full mb-4 flex justify-center items-center'>
          <Image width={304} height={77} src="/img/logo/2.png" alt="Logo" className="transform "/>
        </div>

        {/* Video */}
        <div className="relative w-full h-0 mb-4" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-2 border-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            src="https://www.youtube.com/embed/0aFJtpYco0E?si=WJwq3XH39dHs6zh_"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Alt logo */}
        <Image width={309} height={77} src="/img/logo/1.png" alt="Logo" className="transform hover:scale-110 transition duration-500"/>
      </div>

      {/* Sağ tarafta kare linkler */}
      <div className="md:col-span-3 grid grid-cols-2 gap-6">
        {rightLinks.map((link, index) => (
          <div
             as={Link}
          href=""
            key={index}
            className="relative bg-black flex items-center justify-center group overflow-hidden rounded shadow-xl aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer"
          >
            {/* Arka plan resmi */}
            <Image
              fill
              src={link.src}
              alt={link.text}
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />

            {/* Opak mavi katman */}
            <div className="absolute inset-0 bg-blue-900 opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Icon */}
            <div className="relative z-10 flex flex-col items-center text-white">
              <Image
                width={50}
                height={50}
                src={link.icon}
                alt={link.text}
                className="mb-2 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-md font-semibold text-center">{link.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;