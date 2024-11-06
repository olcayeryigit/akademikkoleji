"use client";
import React from 'react';
import Image from 'next/image';

const Partners = () => {
  // Partner verisini bileşen içinde tanımlıyoruz
  const partnersData = {
    top: [
      { src: "/logos/partners/top/1.webp", alt: "Partner 1" },
      { src: "/logos/partners/top/2.webp", alt: "Partner 2" },
      { src: "/logos/partners/top/3.webp", alt: "Partner 3" }
    ],
    bottom: [
      { src: "/logos/partners/bottom/1.svg", alt: "Partner 4" },
      { src: "/logos/partners/bottom/6.svg", alt: "Partner 5" },
      { src: "/logos/partners/bottom/2.webp", alt: "Partner 6" },
      { src: "/logos/partners/bottom/3.webp", alt: "Partner 7" },
      { src: "/logos/partners/bottom/4.webp", alt: "Partner 8" },
      { src: "/logos/partners/bottom/5.svg", alt: "Partner 9" }
    ]
  };

  return (
    <div className="partners-section mt-10">
      {/* Top Partnerler */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="font-bold text-2xl gradient-text">Bizi Güçlü Kılan Partnerlerimiz</h2>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {partnersData.top.map((partner, index) => (
          <div key={index} className="relative w-44 h-24">
            <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* Bottom Partnerler */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="font-bold text-2xl gradient-text2">Akademik International Group</h2>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {partnersData.bottom.map((partner, index) => (
          <div key={index} className="relative w-44 h-24">
            <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-text {
          background: linear-gradient(90deg, #DF5B5B, #00A9F2);
          background-size: 200% 200%; /* Gradyanın boyutunu ayarlıyoruz */
          animation: gradient 5s ease infinite; /* Geçiş süresi ve animasyon ayarları */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; /* Arka plan gradyanı metne uygulanır */
          display: inline-block; /* Metin içeriğinin gradyan efekti için genişliği ayarlıyoruz */
        }
            .gradient-text2 {
          background: linear-gradient(90deg, #00A9F2 ,#DF5B5B);
          background-size: 200% 200%; /* Gradyanın boyutunu ayarlıyoruz */
          animation: gradient 5s ease infinite; /* Geçiş süresi ve animasyon ayarları */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; /* Arka plan gradyanı metne uygulanır */
          display: inline-block; /* Metin içeriğinin gradyan efekti için genişliği ayarlıyoruz */
        }
      `}</style>
    </div>
  );
};

export default Partners;
