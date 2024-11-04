"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ImageBanner from '@/components/common/image-banner/ImageBanner';

const Ilkokul = () => {
  const pathname = usePathname();
  const currentTitle = pathname.split("/").pop().toLowerCase();

  const developmentAreas = [
    {
      "slug": "etkilesimli-ogrenme",
      "title": "İlkokulda Etkileşimli Öğrenme",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "description": "Çocukların fiziksel ve duygusal gelişimini destekleyici etkinlikler ve bilgiler.",
      "iconSrc":"/img/v.png" ,
      "content": [
        {
          "heading": "Fiziksel ve Duygusal Gelişim Eğitiminin Önemi",
          "paragraph": "Çocukların ilk yıllarında fiziksel ve duygusal esenliği, sosyal ilişkileri üzerinde güçlü bir etkiye sahiptir. Fiziksel ve duygusal olarak sağlıklı olan çocuklar, yetişkinler ve akranlarıyla daha iyi ilişkiler kurabilir ve sürdürebilir. Fiziksel, sosyal ve duygusal gelişim eğitimi, küçük bir çocuğun iyi olma duygusu için esastır."
        },
        {
          "heading": "Başkalarıyla İlişkiler",
          "paragraph": "Okul öncesi çağındaki çocuklar arkadaşlarıyla hayali oyunlar oynar ve duygu ve düşüncelerini ifade etmek için kelimeler kullanır. Arkadaşlarıyla oyuncak ve materyal paylaşmak için destek almaya ihtiyaç duysalar da zamanla bu becerilerde gelişirler."
        },
        {
          "heading": "Öz-Farkındalık",
          "paragraph": "Çocuklar, farklı aktiviteler sırasında vücutlarını kontrol etme yeteneklerini geliştirirler. Sırayla almayı ve akranlarıyla sohbet etmeyi öğrenirler. Bu tür beceriler çocukların bağımsızlık kazanmalarına katkı sağlar."
        },
        {
          "heading": "Duygusal Düzenleme",
          "paragraph": "Okul öncesi çağındaki çocuklar, duygularını tanımayı ve ifade etmeyi öğrenirler. Bu beceriler, duyguları yönetme ve sosyal ilişkilerde kendilerini doğru ifade etme yeteneklerini geliştirir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji Özel Anaokulu olarak çocuklarımızın fiziksel, duygusal ve sosyal gelişimlerini bilimsel yöntemlerle destekliyoruz."
        }
      ]
    },
   
  ];
  const area = developmentAreas.find(item => item.slug === currentTitle);

  return (

    <div className="">
      {area ? (
        <div>
          <ImageBanner 
  src="/img/common/r.png" 
  title={area.title} 
  iconSrc={area.iconSrc} 
/>
<div className='container mx-auto py-12'>
          <h1 className="text-3xl font-bold text-[#1F2937] mb-6">{area.title}</h1>
          <p className="text-gray-700 text-lg mb-8 ">{area.description}</p>
          {area.content.map((section, index) => (
            <div key={index} className="mb-6">


              <h2 className="text-2xl font-semibold text-[#1F2937] mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{section.paragraph}</p>
            </div>
          ))}
        </div></div>
      ) : (
        <p className="text-center text-gray-500">Bu başlık altında içerik bulunamadı.</p>
      )}
    </div>
  );
};

export default Ilkokul;