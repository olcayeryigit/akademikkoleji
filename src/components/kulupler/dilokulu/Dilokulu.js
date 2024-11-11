"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ImageBanner from '@/components/common/image-banner/ImageBanner';

const DilOkulu = () => {
  const pathname = usePathname();
  const currentTitle = pathname.split("/").pop().toLowerCase();

  const developmentAreas = [
    {
      "slug": "ingilizce-drama-kulubu",
      "subTitle": "İngilizce Drama Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların İngilizce dil becerilerini geliştiren eğlenceli drama etkinlikleri.",
      "content": [
        {
          "heading": "Drama ile Öğrenme",
          "paragraph": "Drama etkinlikleri, dil öğrenimini eğlenceli hale getirir."
        },
        {
          "heading": "Etkileşimli Oyunlar",
          "paragraph": "Çocuklar, etkileşimli oyunlarla kendilerini ifade etmeyi öğrenirler."
        },
        {
          "heading": "Sahne Performansları",
          "paragraph": "Kulüp, çocukların sahne performanslarını sergileme fırsatı sunar."
        },
        {
          "heading": "Yaratıcılığı Teşvik Etme",
          "paragraph": "Drama çalışmaları, çocukların yaratıcılıklarını geliştirir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, dilin eğlenceli yönlerini ön planda tutuyoruz."
        }
      ]
    },
    {
      "slug": "ingilizce-karaoke-kulubu",
      "subTitle": "İngilizce Karaoke Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların İngilizce şarkılarla dil becerilerini geliştirdiği eğlenceli bir kulüp.",
      "content": [
        {
          "heading": "Şarkı Söyleyerek Öğrenme",
          "paragraph": "Karaoke etkinlikleri, çocukların kelime dağarcığını zenginleştirir."
        },
        {
          "heading": "Müzik ve Dil",
          "paragraph": "Çocuklar, müzik aracılığıyla dil öğrenmenin keyfini çıkarır."
        },
        {
          "heading": "Sosyal Etkileşim",
          "paragraph": "Karaoke, çocukların sosyal becerilerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Performans ve Güven",
          "paragraph": "Sahneye çıkma fırsatları, çocukların kendine güven duygusunu artırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, müzik ve dili bir araya getiren etkinlikler sunuyoruz."
        }
      ]
    },
    {
      "slug": "ingilizce-scrabble-kulubu",
      "subTitle": "İngilizce Scrabble Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların İngilizce kelime dağarcığını geliştirirken eğlendiği bir kulüp.",
      "content": [
        {
          "heading": "Kelime Dağarcığı Geliştirme",
          "paragraph": "Scrabble oyunu, çocukların kelime bilgilerini artırmalarına yardımcı olur."
        },
        {
          "heading": "Stratejik Düşünme",
          "paragraph": "Oyun, çocukların stratejik düşünme becerilerini geliştirmelerine katkı sağlar."
        },
        {
          "heading": "Eğlenceli Rekabet",
          "paragraph": "Kulüp, eğlenceli bir rekabet ortamı sunar."
        },
        {
          "heading": "Sosyal Beceriler",
          "paragraph": "Çocuklar, grup halinde oynayarak sosyal becerilerini geliştirirler."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, kelime oyunları ile öğrenmeyi eğlenceli hale getiriyoruz."
        }
      ]
    },
    {
      "slug": "almanca-kulubu",
      "subTitle": "Almanca Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların Almanca dil becerilerini geliştiren etkinlikler.",
      "content": [
        {
          "heading": "Dil Öğreniminin Temelleri",
          "paragraph": "Almanca Kulübü, dilin temellerini eğlenceli bir şekilde öğretir."
        },
        {
          "heading": "Kültürel Etkinlikler",
          "paragraph": "Çocuklar, Almanca kültürünü tanıma fırsatı bulur."
        },
        {
          "heading": "Etkileşimli Oyunlar",
          "paragraph": "Dil öğrenimi için etkileşimli oyunlar ve aktiviteler düzenlenir."
        },
        {
          "heading": "Konuşma Pratiği",
          "paragraph": "Kulüp, konuşma pratiği yaparak çocukların dil becerilerini geliştirmelerini sağlar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, Almanca diline yönelik kapsamlı bir eğitim sunuyoruz."
        }
      ]
    }
  ];
  
  const area = developmentAreas.find(item => item.slug === currentTitle);

  return (

    <div className="">
      {area ? (
        <div>
          <ImageBanner 
  src={area.src} 
  title="Dilokulu Kulüpleri" 

  subTitle={area.subTitle} 
/>
<div className='container mx-auto py-12'>
          <h1 className="text-3xl font-bold text-[#1F2937] mb-6">{area.subTitle}</h1>
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

export default DilOkulu;