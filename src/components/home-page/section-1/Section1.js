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
      image: "/images/home-page/section-1/1.png", // Resim alanı eklendi
      links: [
        { href: "/anaokulu", label: "Anaokulu Eğitimleri" },
        { href: "/anaokulu", label: "Anaokulu Kulüpleri" },
      ],
    },
    {
      title: "İLKOKUL",
      alt: 'Image 2',
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
      image: "/images/home-page/section-1/2.png", // Resim alanı eklendi
      links: [
        { href: "/ilkokul", label: "İlkokul Eğitimi" },
      ],
    },
    {
      title: "ORTAOKUL",
      alt: 'Image 3',
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
      image: "/images/home-page/section-1/3.png", // Resim alanı eklendi
      links: [
        { href: "/ortaokul", label: "Ortaokul Eğitimi" },
        { href: "/ortaokul", label: "Ortaokul Kulüpleri" },
      ],
    },
    {
      title: "LİSE",
      alt: 'Image 4',
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
      image: "/images/home-page/section-1/4.png", // Resim alanı eklendi
      links: [
        { href: "/lise", label: "Lise Eğitimi" },
        { href: "/lise", label: "Lise Kulüpleri" },
      ],
    },
  ];

  return (
    <div className="py-12 relative bg-gradient-to-l from-gray-300 to-gray-100 ">
      <div className="section-1-wrapper container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {datas.map((data, index) => (
            <div
              className="section-1-content relative overflow-hidden group rounded-lg shadow-2xl transition-all duration-300 ease-in-out border-4 border-white  "
              key={index}
            >
              <Image
                src={data.image} // JSON'dan gelen resim kullanılıyor
                alt={data.alt}
                width={318}
                height={240}
                className="object-cover w-full h-56 rounded-lg"
              />

              {/* Kart Başlığı ve Açıklama */}
              <div className=" absolute  bottom-0 left-0 w-full p-3 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0">
                <div className='flex items-center gap-2 '>
                  <div className='p-1 bg-white rounded-full border border-black'>
                    <div className='relative w-4 h-4'>
                      <Image src="/logos/ak-2.png" fill className='contain'/>
                    </div></div>
                    <h2 className="text-md font-bold text-white"> {data.title}</h2>

                  </div>
                <p className="text-sm mt-1 text-white">{data.text}</p>
              </div>

              {/* Hover Durumu İçin Kutu */}
              <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 ps-16 pt-12">
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  <div className='bg-black p-2 rounded-full border-2 border-white'>
                    <div className='relative w-4 h-4'>
                      <Image src="/logos/ak-1.png" fill className='contain'/>
                    </div>
                  </div>
                  <p>{data.title}</p>

                </div>
                {data.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="relative block mt-2 text-white text-md hover:text-gray-200 transition-colors duration-200"
                  >
                  
                    {link.label}
                    
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;
