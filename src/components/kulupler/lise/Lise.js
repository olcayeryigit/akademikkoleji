"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ImageBanner from '@/components/common/image-banner/ImageBanner';

const Lise = () => {
  const pathname = usePathname();
  const currentTitle = pathname.split("/").pop().toLowerCase();

  const developmentAreas = [
    {
      "slug": "kutuphanecilik-kulubu",
      "subTitle": "Kütüphanecilik Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların okuma alışkanlığını geliştiren etkinlikler ve bilgiler.",
      "content": [
        {
          "heading": "Kütüphanelerin Önemi",
          "paragraph": "Kütüphaneler, bilgiye erişim ve okuma alışkanlığı kazandırma açısından kritik bir rol oynar."
        },
        {
          "heading": "Okuma Etkinlikleri",
          "paragraph": "Kulüp, çeşitli okuma etkinlikleri ve yarışmalar düzenleyerek çocukların okuma sevgisini artırır."
        },
        {
          "heading": "Kitap Kulüpleri",
          "paragraph": "Çocuklar, belirli kitaplar üzerinde tartışarak eleştirel düşünme becerilerini geliştirirler."
        },
        {
          "heading": "Dijital Kütüphane Kullanımı",
          "paragraph": "Çocuklara dijital kütüphaneleri nasıl kullanacakları öğretilir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, okuma ve bilgiye erişimi teşvik eden programlar sunuyoruz."
        }
      ]
    },
    {
      "slug": "cevre-koruma-kulubu",
      "subTitle": "Çevre Koruma Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların çevre bilincini artıran etkinlikler ve bilgiler.",
      "content": [
        {
          "heading": "Çevre Korumanın Önemi",
          "paragraph": "Çevre koruma, sürdürülebilir bir gelecek için kritik öneme sahiptir."
        },
        {
          "heading": "Doğa Gezileri",
          "paragraph": "Kulüp, doğa gezileri düzenleyerek çocukların doğal yaşamı tanımasına yardımcı olur."
        },
        {
          "heading": "Geri Dönüşüm Projeleri",
          "paragraph": "Çocuklar, geri dönüşüm ve atık yönetimi konularında projeler geliştirirler."
        },
        {
          "heading": "Çevre Bilinci Eğitimi",
          "paragraph": "Kulüp, çevre bilinci geliştiren eğitim programları sunar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çevre koruma konularında çocuklarımızı bilinçlendirmeye odaklanıyoruz."
        }
      ]
    },
    {
      "slug": "kultur-ve-edebiyat-kulubu",
      "subTitle": "Kültür ve Edebiyat Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların kültürel ve edebi becerilerini geliştiren etkinlikler.",
      "content": [
        {
          "heading": "Kültürel Farkındalık",
          "paragraph": "Kültürel etkinlikler, çocukların farklı kültürleri anlamalarına yardımcı olur."
        },
        {
          "heading": "Yazma Becerileri",
          "paragraph": "Kulüp, çocukların yazma becerilerini geliştirmek için çeşitli yazı atölyeleri düzenler."
        },
        {
          "heading": "Edebiyat Okumaları",
          "paragraph": "Edebiyat kulübü, çeşitli kitap okumaları ve tartışmaları ile çocukların düşünce yapılarını zenginleştirir."
        },
        {
          "heading": "Sanat ve Edebiyat Etkinlikleri",
          "paragraph": "Çocuklar, sanat ve edebiyatı birleştiren etkinliklere katılır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, kültürel ve edebi değerleri ön planda tutan eğitimler sunuyoruz."
        }
      ]
    },
    {
      "slug": "sivil-savunma-kulubu",
      "subTitle": "Sivil Savunma Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların güvenlik bilgilerini artıran etkinlikler.",
      "content": [
        {
          "heading": "Acil Durum Eğitimi",
          "paragraph": "Çocuklara acil durumlarda nasıl davranacakları öğretilir."
        },
        {
          "heading": "Sivil Savunma Bilinci",
          "paragraph": "Sivil savunmanın önemi ve gerekliliği hakkında eğitimler verilir."
        },
        {
          "heading": "Pratik Eğitimler",
          "paragraph": "Çocuklar, pratik uygulamalarla güvenlik becerilerini geliştirir."
        },
        {
          "heading": "Toplumsal Sorumluluk",
          "paragraph": "Kulüp, çocuklara toplumsal sorumluluk bilinci kazandırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocukların güvenli bir geleceğe hazırlanması için gerekli bilgileri sunuyoruz."
        }
      ]
    },
    {
      "slug": "gezi-tanitim-ve-turizm-kulubu",
      "subTitle": "Gezi Tanıtım ve Turizm Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların keşfetme ve gezme becerilerini geliştiren etkinlikler.",
      "content": [
        {
          "heading": "Yeni Yerler Keşfetmek",
          "paragraph": "Gezi etkinlikleri, çocukların yeni yerleri tanımalarına olanak tanır."
        },
        {
          "heading": "Kültürel Zenginlikler",
          "paragraph": "Çocuklar, farklı kültürel zenginlikleri deneyimleme fırsatı bulur."
        },
        {
          "heading": "Etkileşimli Eğitimler",
          "paragraph": "Gezi kulübü, etkileşimli eğitimler sunarak çocukların sosyal becerilerini geliştirir."
        },
        {
          "heading": "Doğa ve Tarih",
          "paragraph": "Kulüp, doğa ve tarih gezileri düzenleyerek çocukların çevre bilincini artırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, gezip görme deneyimlerini eğitici bir şekilde sunuyoruz."
        }
      ]
    },
    {
      "slug": "satranc-kulubu",
      "subTitle": "Satranç Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların zeka gelişimini destekleyen etkinlikler.",
      "content": [
        {
          "heading": "Stratejik Düşünme",
          "paragraph": "Satranç, çocukların stratejik düşünme becerilerini geliştirir."
        },
        {
          "heading": "Odaklanma Yeteneği",
          "paragraph": "Oyun, çocukların odaklanma yeteneklerini artırır."
        },
        {
          "heading": "Sosyal Etkileşim",
          "paragraph": "Kulüp, çocukların sosyal etkileşimlerini güçlendirir."
        },
        {
          "heading": "Kendine Güven",
          "paragraph": "Başarılar, çocukların kendine güven duygularını pekiştirir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, satrancın eğitici yönlerini ön planda tutuyoruz."
        }
      ]
    },
    {
      "slug": "bilim-fen-ve-teknoloji-kulubu",
      "subTitle": "Bilim Fen ve Teknoloji Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların bilimsel düşünme ve teknoloji becerilerini geliştiren etkinlikler.",
      "content": [
        {
          "heading": "Bilimsel Düşünme",
          "paragraph": "Bilimsel düşünme becerileri çocukların analitik yeteneklerini geliştirir."
        },
        {
          "heading": "Deneylerle Öğrenme",
          "paragraph": "Uygulamalı bilim deneyleri, öğrenmeyi eğlenceli hale getirir."
        },
        {
          "heading": "Teknoloji ve Yenilik",
          "paragraph": "Kulüp, çocukların teknolojiyi etkin bir şekilde kullanmalarını teşvik eder."
        },
        {
          "heading": "Yaratıcılığı Teşvik Etme",
          "paragraph": "Bilimsel projeler, yaratıcılıklarını artırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, bilim ve teknolojinin önemini vurgulayan programlar sunuyoruz."
        }
      ]
    },
    {
      "slug": "gorsel-sanatlar-kulubu",
      "subTitle": "Görsel Sanatlar Kulübü",
      "src": "/images/main.jpg", // Resim yolu veya URL
      "description": "Çocukların sanatsal yeteneklerini geliştiren etkinlikler.",
      "content": [
        {
          "heading": "Sanatın Önemi",
          "paragraph": "Görsel sanatlar, çocukların yaratıcılıklarını ifade etmelerine olanak tanır."
        },
        {
          "heading": "Farklı Sanat Dallarını Keşfetme",
          "paragraph": "Kulüp, resim, heykel gibi farklı sanat dallarını keşfetme fırsatı sunar."
        },
        {
          "heading": "Sanat Atölyeleri",
          "paragraph": "Çocuklar, sanatsal becerilerini geliştirecek atölye çalışmalarına katılırlar."
        },
        {
          "heading": "Eser Sergileri",
          "paragraph": "Kulüp, çocukların eserlerini sergileme imkanı sunar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, sanatı teşvik eden eğitim programları sunuyoruz."
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
  title="Lise Kulüpleri" 

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

export default Lise;