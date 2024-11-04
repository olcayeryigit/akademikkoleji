"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ImageBanner from '@/components/common/image-banner/ImageBanner';

const Ortaokul = () => {
  const pathname = usePathname();
  const currentTitle = pathname.split("/").pop().toLowerCase();

  const developmentAreas = [
    {
      "slug": "ogrenci-merkezli-egitim",
      "title": "Öğrenci Merkezli Eğitim",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "description": "Çocukların öğrenme süreçlerini destekleyici etkinlikler ve bilgiler.",
      "iconSrc": "/img/v.png",
      "content": [
        {
          "heading": "Öğrenci Merkezli Eğitim Nedir?",
          "paragraph": "Öğrenci merkezli eğitim, öğrencilerin ilgi ve ihtiyaçlarına göre şekillenen bir öğretim yaklaşımıdır. Bu yöntemde öğrenciler aktif birer katılımcı olarak öğrenme sürecine dahil edilir."
        },
        {
          "heading": "Öğrenme Sürecinde Rol",
          "paragraph": "Bu yaklaşımda öğrenciler, kendi öğrenme hedeflerini belirleme ve süreçte aktif rol alma fırsatı bulurlar. Bu durum, motivasyonlarını artırır."
        },
        {
          "heading": "İletişim ve İş Birliği",
          "paragraph": "Öğrenci merkezli eğitim, öğrenciler arasında iletişim ve iş birliğini teşvik eder. Grup çalışmaları, sosyal becerilerin gelişmesine katkı sağlar."
        },
        {
          "heading": "Kendine Güvenin Artması",
          "paragraph": "Öğrenciler, kendi öğrenme süreçlerinde aktif olduklarında daha fazla sorumluluk alırlar ve bu da kendine güvenlerini artırır."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, öğrenci merkezli eğitim felsefesini benimseyerek çocuklarımızın bireysel gelişimlerini destekliyoruz."
        }
      ]
    },
    {
      "slug": "psikolojik-danisma",
      "title": "Psikolojik Danışma",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "description": "Çocukların zeka gelişimini destekleyici etkinlikler ve bilgiler.",
      "iconSrc": "/img/o.png",
      "content": [
        {
          "heading": "Psikolojik Danışmanın Rolü",
          "paragraph": "Psikolojik danışma, çocukların duygusal ve zihinsel sağlığını destekler. Bu süreç, çocukların kendilerini ifade etmelerini kolaylaştırır."
        },
        {
          "heading": "Zeka Gelişiminin Önemi",
          "paragraph": "Zeka gelişimi, çocukların bilişsel becerilerini destekleyerek dünyayı daha iyi anlamalarına yardımcı olur."
        },
        {
          "heading": "Duygusal Destek",
          "paragraph": "Çocuklar, duygusal olarak zorlandıklarında danışmanlık hizmetlerinden yararlanarak kendilerini daha iyi hissedebilirler."
        },
        {
          "heading": "Problem Çözme Becerileri",
          "paragraph": "Psikolojik danışma, çocukların sorunları çözme yeteneklerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocuklarımızın duygusal ve zihinsel gelişimlerini destekleyen psikolojik danışmanlık hizmetleri sunuyoruz."
        }
      ]
    },
    {
      "slug": "stem-egitimi",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "title": "STEM Eğitimi",
      "description": "Çocukların STEM (Bilim, Teknoloji, Mühendislik, Matematik) alanındaki becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "STEM Eğitiminin Önemi",
          "paragraph": "STEM eğitimi, çocukların analitik düşünme ve problem çözme becerilerini geliştirmelerine yardımcı olur."
        },
        {
          "heading": "Yaratıcılığın Teşvik Edilmesi",
          "paragraph": "STEM eğitimi, çocukların yaratıcı düşünmelerini ve yenilikçi çözümler geliştirmelerini destekler."
        },
        {
          "heading": "Uygulamalı Öğrenme Deneyimleri",
          "paragraph": "Çocuklar, uygulamalı projelerle STEM becerilerini gerçek dünyada deneyimleyerek öğrenirler."
        },
        {
          "heading": "Teknoloji Kullanımı",
          "paragraph": "STEM eğitimi, çocukların teknolojiyi etkili bir şekilde kullanmalarını sağlar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocuklarımıza STEM alanında güçlü bir temel oluşturacak eğitim programları sunuyoruz."
        }
      ]
    },
    {
      "slug": "dijital-vatandaslik-egitimi",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "title": "Dijital Vatandaşlık Eğitimi",
      "description": "Çocukların dijital dünyada güvenli ve sorumlu bir şekilde hareket etmelerini sağlayan etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Dijital Vatandaşlığın Önemi",
          "paragraph": "Dijital vatandaşlık, çocukların çevrimiçi ortamlarda nasıl güvenli ve sorumlu bir şekilde hareket edeceklerini öğrenmelerini sağlar."
        },
        {
          "heading": "İnternet Güvenliği",
          "paragraph": "Çocuklar, çevrimiçi ortamlarda karşılaşabilecekleri riskleri ve bu risklerden nasıl korunacaklarını öğrenirler."
        },
        {
          "heading": "Sosyal Medya Kullanımı",
          "paragraph": "Dijital vatandaşlık eğitimi, sosyal medya platformlarının nasıl güvenli bir şekilde kullanılacağını öğretir."
        },
        {
          "heading": "Dijital İz Bırakma",
          "paragraph": "Çocuklar, çevrimiçi aktivitelerinin sonuçlarını ve dijital iz bırakmanın önemini anlarlar."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocuklarımıza dijital vatandaşlık eğitimi vererek güvenli bir çevrimiçi deneyim yaşamalarını sağlıyoruz."
        }
      ]
    },
    {
      "slug": "okuma-becerileri",
      "img": "/img/2-.jpg", // Resim yolu veya URL
      "title": "Okuma Becerileri",
      "description": "Çocukların okuma becerilerini geliştiren etkinlikler ve bilgiler.",
      "iconSrc": "/img/156.png",
      "content": [
        {
          "heading": "Okuma Becerilerinin Önemi",
          "paragraph": "Okuma becerileri, çocukların bilişsel gelişiminde ve akademik başarılarında kritik bir rol oynar."
        },
        {
          "heading": "Erken Okuma Deneyimi",
          "paragraph": "Çocukların erken yaşta okuma deneyimi yaşamaları, kelime dağarcıklarını ve dil becerilerini geliştirir."
        },
        {
          "heading": "Etkili Okuma Yöntemleri",
          "paragraph": "Farklı okuma stratejileri, çocukların anlamalarını ve okudukları metinleri daha iyi kavramalarını sağlar."
        },
        {
          "heading": "Okuma Alışkanlıkları",
          "paragraph": "Çocuklara düzenli okuma alışkanlıkları kazandırmak, yaşam boyu öğrenmeyi teşvik eder."
        },
        {
          "heading": "Akademik Koleji Yaklaşımı",
          "paragraph": "Akademik Koleji olarak, çocuklarımızın okuma becerilerini geliştirmek için çeşitli etkinlikler ve programlar sunuyoruz."
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