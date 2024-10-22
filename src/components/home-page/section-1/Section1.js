"use client";
import Image from 'next/image';
import React from 'react';

const Section1 = () => {
  const datas = [
    {
      src: '/img/home-page/section-1/1.png', 
      alt: 'Image 1', 
      text: "Kendine güvenen, neşeli, sağlıklı ve motive çocuklar için.",
      colorClass: 'bg-red-600',
      borderClass: 'border-red-800'
    },
    {
      src: '/img/home-page/section-1/2.png', 
      alt: 'Image 2',
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
      colorClass: 'bg-green-600',
      borderClass: 'border-green-800'
    },
    {
      src: '/img/home-page/section-1/3.png', 
      alt: 'Image 3',
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
      colorClass: 'bg-orange-600',
      borderClass: 'border-orange-800'
    },
    {
      src: '/img/home-page/section-1/4.png', 
      alt: 'Image 4',
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
      colorClass: 'bg-blue-600',
      borderClass: 'border-blue-800'
    },
  ];

  return (
    <div className="section-1-wrapper">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {datas.map((data, index) => (
          <div 
            className={`section-1-content shadow-lg rounded-lg overflow-hidden relative group transform transition-transform duration-500 hover:scale-105 ${data.borderClass} border-2`}
            key={index}
          >
            <Image 
              src={data.src} 
              alt={data.alt} 
              width={318}
              height={185}
              className="section-1-image object-cover w-full h-54 transition-transform duration-500 group-hover:scale-110" 
            />
            <div className={`absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
              ${data.colorClass} bg-opacity-90 rounded-lg`}>
              <p className='text-base font-semibold px-4 pt-2 mb-5 text-white text-center min-h-[70px]'>
                {data.text}
              </p>
              <button 
                className="btn-zoom text-white text-sm py-2 px-6 border-2 rounded-full transition-transform duration-300 ease-in-out border-white hover:bg-white hover:text-black hover:scale-110">
                Detaylı Bilgi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Section1;