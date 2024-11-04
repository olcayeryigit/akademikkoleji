"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ImageBanner from '@/components/common/image-banner/ImageBanner';

const Ortaokul = () => {
  const pathname = usePathname();
  const currentTitle = pathname.split("/").pop().toLowerCase();

  const developmentAreas = [
    {
      "slug": "kultur-ve-edebiyat-kulubu",
      "title": "Kültür ve Edebiyat Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların öğrenme süreçlerini destekleyici etkinlikler ve bilgiler.",
      "iconSrc": "/img/v.png",
      "content": [
        {
          "heading": "Kültür ve Edebiyatın Önemi",
          "paragraph": "Kültür ve edebiyat, çocukların duygusal ve sosyal gelişimlerini destekler. Bu alanlar, çocukların dünyayı daha iyi anlamalarına yardımcı olur."
        },
        {
          "heading": "Yaratıcılığın Geliştirilmesi",
          "paragraph": "Edebiyat etkinlikleri, çocukların yaratıcı düşünme becerilerini geliştirmelerine katkı sağlar."
        },
        {
          "heading": "Okuma Alışkanlığının Kazandırılması",
          "paragraph": "Kültür ve edebiyat kulübü, çocukların düzenli okuma alışkanlığı kazanmalarına yardımcı olur."
        },
        {
          "heading": "İletişim Becerileri",
          "paragraph": "Bu kulüp, çocukların kendilerini ifade etme ve iletişim becerilerini geliştirmelerine fırsat tanır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, kültür ve edebiyatın değerini vurgulayan eğitim programları sunuyoruz."
        }
      ]
    },
    {
      "slug": "sivil-savunma-kulubu",
      "title": "Sivil Savunma Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların zeka gelişimini destekleyici etkinlikler ve bilgiler.",
      "iconSrc": "/img/o.png",
      "content": [
        {
          "heading": "Sivil Savunma Eğitiminin Önemi",
          "paragraph": "Sivil savunma eğitimi, çocukların güvenlik bilincini artırır ve acil durumlarda nasıl hareket edeceklerini öğretir."
        },
        {
          "heading": "Zeka ve Strateji Gelişimi",
          "paragraph": "Bu kulüp, çocukların problem çözme ve stratejik düşünme becerilerini geliştirir."
        },
        {
          "heading": "İş Birliği ve Takım Çalışması",
          "paragraph": "Sivil savunma etkinlikleri, çocukların birlikte çalışma ve iş birliği yapma yeteneklerini destekler."
        },
        {
          "heading": "Kendine Güvenin Artması",
          "paragraph": "Acil durumlar karşısında bilgi sahibi olan çocuklar, kendine güven duygularını artırırlar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocukların güvenli bir geleceğe hazırlanması için gerekli bilgileri sunuyoruz."
        }
      ]
    },
    {
      "slug": "satranc-kulubu",
      "title": "Satranç Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların zeka gelişimini destekleyici etkinlikler ve bilgiler.",
      "iconSrc": "/img/o.png",
      "content": [
        {
          "heading": "Satranç Oynamanın Faydaları",
          "paragraph": "Satranç, çocukların stratejik düşünme ve problem çözme becerilerini geliştirir."
        },
        {
          "heading": "Odaklanma ve Konsantrasyon",
          "paragraph": "Satranç oynamak, çocukların odaklanma yeteneklerini artırır."
        },
        {
          "heading": "Sosyal Becerilerin Gelişimi",
          "paragraph": "Satranç kulübü, çocukların sosyal becerilerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Kendine Güvenin Artması",
          "paragraph": "Başarılar, çocukların kendine güven duygularını pekiştirir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, satrancın eğitici ve eğlenceli yanlarını ön planda tutuyoruz."
        }
      ]
    },
    {
      "slug": "bilim-fen-ve-teknoloji-kulubu",
      "title": "Bilim Fen ve Teknoloji Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların bilimsel düşünme ve teknoloji kullanma becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/o.png",
      "content": [
        {
          "heading": "Bilimsel Düşünmenin Önemi",
          "paragraph": "Bilimsel düşünme, çocukların olayları analiz etme ve mantıklı sonuçlara ulaşma yeteneklerini geliştirir."
        },
        {
          "heading": "Teknoloji Kullanımının Geliştirilmesi",
          "paragraph": "Bu kulüp, çocukların teknolojiyi etkili bir şekilde kullanma becerilerini artırır."
        },
        {
          "heading": "Yaratıcılığın Teşvik Edilmesi",
          "paragraph": "Bilim ve teknoloji etkinlikleri, çocukların yenilikçi çözümler geliştirmelerine olanak tanır."
        },
        {
          "heading": "Uygulamalı Öğrenme Deneyimleri",
          "paragraph": "Çocuklar, bilim projeleri ile gerçek dünya deneyimlerini kazanırlar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, bilim ve teknoloji alanında güçlü bir temel oluşturacak eğitim programları sunuyoruz."
        }
      ]
    },
    {
      "slug": "gorsel-sanatlar-kulubu",
      "title": "Görsel Sanatlar Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların görsel ifade becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Görsel Sanatların Önemi",
          "paragraph": "Görsel sanatlar, çocukların yaratıcılıklarını geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Yaratıcılığın Teşvik Edilmesi",
          "paragraph": "Sanat etkinlikleri, çocukların farklı bakış açıları geliştirmelerine katkı sağlar."
        },
        {
          "heading": "Teknik Becerilerin Geliştirilmesi",
          "paragraph": "Görsel sanatlar, çocukların çeşitli teknik becerilerini geliştirmelerine olanak tanır."
        },
        {
          "heading": "Duygusal İfade",
          "paragraph": "Sanat, çocukların duygularını ifade etmelerine yardımcı olur."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocuklarımıza görsel sanatlar alanında destekleyici eğitimler sunuyoruz."
        }
      ]
    },
    {
      "slug": "muzik-kulubu",
      "title": "Müzik Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların müzik becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Müziğin Önemi",
          "paragraph": "Müzik, çocukların duygusal ve sosyal gelişimlerini destekler."
        },
        {
          "heading": "Müzikal Yeteneklerin Geliştirilmesi",
          "paragraph": "Müzik eğitimi, çocukların ritim ve melodi gibi becerilerini artırır."
        },
        {
          "heading": "Sosyal Becerilerin Gelişimi",
          "paragraph": "Müzik kulübü, çocukların grup halinde çalışarak sosyal becerilerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Kendine Güvenin Artması",
          "paragraph": "Müzikal başarılar, çocukların kendine güven duygularını pekiştirir."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, müzik eğitimi ile çocuklarımızın gelişimine katkı sağlıyoruz."
        }
      ]
    },
    {
      "slug": "gezi-tanitim-ve-turizm-kulubu",
      "title": "Gezi Tanıtım ve Turizm Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların gezip görme ve keşfetme becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Keşfetmenin Önemi",
          "paragraph": "Gezi etkinlikleri, çocukların farklı kültürleri ve yaşam tarzlarını tanımalarına yardımcı olur."
        },
        {
          "heading": "Doğa ile Etkileşim",
          "paragraph": "Doğa gezileri, çocukların çevre bilincini artırır."
        },
        {
          "heading": "Sosyal Becerilerin Gelişimi",
          "paragraph": "Gezi kulübü, çocukların sosyal etkileşimlerini güçlendirir."
        },
        {
          "heading": "Yeni Deneyimler Kazanma",
          "paragraph": "Farklı yerleri ziyaret etmek, çocukların yeni deneyimler kazanmasına olanak tanır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, gezip görme deneyimlerini eğitici bir şekilde sunuyoruz."
        }
      ]
    },
    {
      "slug": "bilim-kulubu",
      "title": "Bilim Kulübü",
      "img": "/img/2-.jpg",
      "description": "Çocukların bilimsel düşünme ve keşfetme becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Bilimsel Düşüncenin Gelişimi",
          "paragraph": "Bilim kulübü, çocukların bilimsel düşünme becerilerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Deneylerle Öğrenme",
          "paragraph": "Deneysel etkinlikler, çocukların öğrenmelerini pekiştirir."
        },
        {
          "heading": "Takım Çalışması ve İş Birliği",
          "paragraph": "Bu kulüp, çocukların takım çalışması becerilerini geliştirmelerine olanak tanır."
        },
        {
          "heading": "Yaratıcılığın Teşvik Edilmesi",
          "paragraph": "Bilimsel projeler, çocukların yaratıcılıklarını artırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocukların bilim alanında güçlü bir temel kazanmalarına destek oluyoruz."
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

export default Ortaokul;