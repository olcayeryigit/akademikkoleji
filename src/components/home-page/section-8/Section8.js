"use client";
import Image from 'next/image';
import React from 'react';

const Section8 = () => {
  const datas = [
    {
      title: "Basketbol Efsanesi Barış Güney'den Akademik International Kampüsüne Anlamlı Ziyaret",
      alt: 'Eğitim Görseli 1',
      text: "Eski profesyonel basketbolcu ve Bursa Uludağ Basketbol Baş Antrenörü Barış Güney, Akademik Koleji International School Space Kampüsü'nü ziyaret ederek, okulun spor çalışmaları hakkında bilgi aldı ve samimi bir sohbet gerçekleştirdi. Akademik Koleji ailesi olarak, spor alanındaki vizyonumuzu paylaşma fırsatı bulduğumuz ve değerli görüşleriyle bizleri onurlandıran Barış Güney'e teşekkür ederiz.",
      date: "2024-11-01",
      status: "Yeni",
      image: "/img/2-.jpg"
    },
    {
      title: "Bursa Özel Okul Bursluluk Sınavları",
      alt: 'Eğitim Görseli 2',
      text: "Bursa Bursluluk Sınavı 2025, 1-2-3-4-5-6-7-8- 9-10-11. Sınıflar için 4-5 Ocak 2025 tarihinde Bursa Nilüfer Akademik Koleji'nde yapılacaktır.",
      date: "2024-10-28",
      status: "Devam Ediyor",
      image: "/img/2-.jpg"
    },
    {
      title: "Akademik Koleji International School Nasa Campus Yeni Eğitim Yılına Başlıyor",
      alt: 'Eğitim Görseli 3',
      text: "Akademik Koleji International School Nasa Campus, yeni eğitim öğretim dönemine coşkuyla kapılarını açtı. Öğrencilerimizin parlak geleceğine ışık tutacak olan bu yeni dönemde, deneyimli öğretmen kadromuz ve özverili idari ekibimiz, eğitim yolculuğunda onlara rehberlik etmeye hazır.",
      date: "2024-10-25",
      status: "Tamamlandı",
      image: "/img/2-.jpg"
    },
    {
      title: "Akademik Koleji International School Space Campus 2024-2025 Eğitim Öğretim Yılına Başladı",
      alt: 'Eğitim Görseli 4',
      text: "Akademik Koleji International School Space Campus, 2024-2025 eğitim öğretim yılına heyecanla kapılarını açtı! Deneyimli eğitim kadromuz ve sunduğumuz uluslararası standartlardaki eğitimle, her öğrencimizin yeteneklerini keşfetmesine olanak sağlayacağız.",
      date: "2024-10-20",
      status: "Yeni",
      image: "/img/2-.jpg"
    },   {
      title: "Akademik Koleji International School Space Campus 2024-2025 Eğitim Öğretim Yılına Başladı",
      alt: 'Eğitim Görseli 4',
      text: "Akademik Koleji International School Space Campus, 2024-2025 eğitim öğretim yılına heyecanla kapılarını açtı! Deneyimli eğitim kadromuz ve sunduğumuz uluslararası standartlardaki eğitimle, her öğrencimizin yeteneklerini keşfetmesine olanak sağlayacağız.",
      date: "2024-10-20",
      status: "Yeni",
      image: "/img/2-.jpg"
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-3xl font-bold">HABERLER</h1>
        <h2 className="text-xl text-gray-500 pt-3 hover:underline cursor-pointer">TÜM HABERLER</h2>
      </div>

      {/* Galeri Yapısı */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Sol tarafta büyük resim */}
        <div className="w-full relative group h-96 lg:h-full">
          {datas.length > 0 && (
            <div className="relative w-full h-full">
              <Image
                src={datas[0].image}
                alt={datas[0].alt}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0 cursor-pointer">
                <h2 className="text-sm font-bold text-white">{datas[0].title}</h2>
                <p className="text-xs text-white font-normal line-clamp-2 overflow-hidden text-ellipsis" style={{ maxHeight: '2.5rem' }}>
                  {datas[0].text}
                </p>
                <p className="text-xs text-gray-300">{datas[0].date}</p>
                <p className="text-xs text-green-300">{datas[0].status}</p>
              </div>

              {/* Hover Durumu İçin Kutu */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-lg font-bold text-white flex flex-col items-center gap-2 px-4">
                  <h2 className="text-sm font-bold text-white">{datas[0].title}</h2>
                  <p className="text-xs text-white font-normal line-clamp-4 overflow-hidden text-ellipsis" style={{ maxHeight: '4rem' }}>
                    {datas[0].text}
                  </p>
                  <div className="logo-button flex items-center gap-2 bg-black hover:bg-white hover:text-black cursor-pointer p-3 rounded-full border-white border-2 mt-4">
                    <span className="text-xs">Haberin Devamına Git</span>
                    <div className="logo1 relative w-4 h-4">
                      <Image src="/img/logo/ak-1.png" fill className="contain" />
                    </div>
                    <div className="logo2 relative w-4 h-4">
                      <Image src="/img/logo/ak-2.png" fill className="contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sağda küçük resimler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {datas.slice(1).map((data, index) => (
            <div
              className="section-1-content relative overflow-hidden group rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              key={index}
            >
              <div className="relative w-full h-56">
                <Image
                  src={data.image}
                  alt={data.alt}
                  fill
                  className="object-cover w-full rounded-lg"
                />
              </div>

              {/* Kart Başlığı, Açıklama ve Tarih */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0 cursor-pointer">
                <h2 className="text-xs font-bold text-white">{data.title}</h2>
                <p className="text-xs text-gray-300">{data.date}</p>
                <p className="text-xs text-green-300">{data.status}</p>
              </div>

              {/* Hover Durumu İçin Kutu */}
              <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 px-4 pt-10 cursor-pointer">
                <div className="text-lg font-bold text-white flex flex-col items-center gap-2">
                  <h2 className="text-sm font-bold text-white">{data.title}</h2>
                  <p className="text-xs text-white font-normal line-clamp-2 overflow-hidden text-ellipsis" style={{ maxHeight: '2.5rem' }}>
                    {data.text}
                  </p>
                  <div className="logo-button flex items-center gap-2 bg-black hover:bg-white hover:text-black cursor-pointer p-3 rounded-full border-white border-2 mt-4">
                    <span className="text-xs">Haberin Devamına Git</span>
                    <div className="logo1 relative w-4 h-4">
                      <Image src="/img/logo/ak-1.png" fill className="contain" />
                    </div>
                    <div className="logo2 relative w-4 h-4">
                      <Image src="/img/logo/ak-2.png" fill className="contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
