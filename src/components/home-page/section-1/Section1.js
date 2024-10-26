"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Section1 = () => {
  const datas = [
    {
      title: "ANAOKULU",
      alt: 'Image 1',
      text: "Kendine güvenen, neşeli, sağlıklı ve motive çocuklar için.",
      links: [
        { href: "/anaokulu", label: "Anaokulu Programı" },
        { href: "/anaokulu/galeri", label: "Anaokulu Galerisi" },
      ],
    },
    {
      title: "İLKOKUL",
      alt: 'Image 2',
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
      links: [
        { href: "/ilkokul", label: "İlkokul Programı" },
        { href: "/ilkokul/galeri", label: "İlkokul Galerisi" },
      ],
    },
    {
      title: "ORTAOKUL",
      alt: 'Image 3',
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
      links: [
        { href: "/ortaokul", label: "Ortaokul Programı" },
        { href: "/ortaokul/galeri", label: "Ortaokul Galerisi" },
      ],
    },
    {
      title: "LİSE",
      alt: 'Image 4',
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
      links: [
        { href: "/lise", label: "Lise Programı" },
        { href: "/lise/galeri", label: "Lise Galerisi" },
      ],
    },
  ];

  return (
    <div className="section-1-wrapper container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {datas.map((data, index) => (
          <div
            className="section-1-content relative overflow-hidden group rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            key={index}
          >
            <Image
              src="/img/2-.jpg"
              alt={data.alt}
              width={318}
              height={240}
              className="object-cover w-full h-56 rounded-lg"
            />
            
            {/* Kart Başlığı ve Açıklama */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0">
              <h2 className="text-xl font-bold text-white">{data.title}</h2>  
              <p className="text-sm text-white">{data.text}</p> 
            </div>
            
            {/* Hover Durumu İçin Kutu */}
            <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              <p className="text-lg font-bold text-white flex items-center">
                {data.title} <FaArrowRight className="ml-2" />
              </p>
              {data.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="block mt-2 px-4 py-2 text-white text-md hover:text-gray-300 transition-colors duration-200"
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
