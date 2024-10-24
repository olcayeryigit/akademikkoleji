"use client";
import Image from 'next/image';
import React from 'react';

const Section1 = () => {
  const datas = [
    {
      title:"ANAOKULU",
      alt: 'Image 1', 
      text: "Kendine güvenen, neşeli, sağlıklı ve motive çocuklar için.",
    },
    {
      title:"İLKOKUL",
      alt: 'Image 2',
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
    },
    {
      title:"ORTAOKUL",
      alt: 'Image 3',
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
    },
    { title:"LİSE",
      alt: 'Image 4',
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
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
            <div className='bg-[#143256] p-4 absolute bottom-0 left-0 w-full'>
              <p className='text-xl font-bold text-white'>{data.title}</p>
            </div>
            {/* Açıklama Metni */}
            <div className={`absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
              <p className='text-base font-semibold text-white text-center'>
                {data.text}
              </p>
            </div>
            {/* Kutu Hover Durumunda Genişleme */}
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out bg-[#143256] transform translate-y-full group-hover:translate-y-0 rounded`}>
            <p className='text-xl font-bold text-white'>{data.title}</p>

              <p className='text-base font-semibold text-white text-center'>
             
                {data.text}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Section1;