"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Section1 = () => {
  const datas = [
    {
      title: "ANAOKULU",
      alt: 'Image 1',
      text: "Kendine güvenen, neşeli, sağlıklı ve motive çocuklar için.",
      links: [
        { href: "/anaokulu", label: "Anaokulu Programı" },
        { href: "/anaokulu/galeri", label: "Anaokulu Galerisi" },
      ], // Birden fazla link eklendi
    },
    {
      title: "İLKOKUL",
      alt: 'Image 2',
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
      links: [
        { href: "/ilkokul", label: "İlkokul Programı" },
        { href: "/ilkokul/galeri", label: "İlkokul Galerisi" },
      ], // Birden fazla link eklendi
    },
    {
      title: "ORTAOKUL",
      alt: 'Image 3',
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
      links: [
        { href: "/ortaokul", label: "Ortaokul Programı" },
        { href: "/ortaokul/galeri", label: "Ortaokul Galerisi" },
      ], // Birden fazla link eklendi
    },
    {
      title: "LİSE",
      alt: 'Image 4',
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
      links: [
        { href: "/lise", label: "Lise Programı" },
        { href: "/lise/galeri", label: "Lise Galerisi" },
      ], // Birden fazla link eklendi
    },
  ];

  return (
    <div className="section-1-wrapper">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {datas.map((data, index) => (
          <div 
            className={`section-1-content shadow-lg relative overflow-hidden group`}
            key={index}
          >
            <Image 
              src="/img/0.png"
              alt={data.alt} 
              width={318}
              height={185}
              className="section-1-image object-cover w-full h-54" 
            />
            {/* "İLKOKUL" Metni */}
            <div className='bg-gradient-to-r from-[#0F2A46] to-[#143256]  absolute bottom-0 left-0 w-full'>
              <p className='text-xl font-bold text-white p-4'>{data.title}</p>
            </div>
            {/* Açıklama Metni */}
            <div className={`absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
             
            </div>
            {/* Kutu Hover Durumunda Genişleme */}
            <div className={`bg-gradient-to-r from-[#0F2A46] to-[#143256] absolute inset-0 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 rounded`}>
              <p className='text-xl font-bold text-white px-4 pt-4 pb-2'>{data.title}</p>
              {data.links.map((link, linkIndex) => (
             <Link
             key={linkIndex}
             href={link.href} 
             className='block px-4 py-2 text-gray-200 text-md hover:text-white'
           >
             {link.label}
           </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Section1;