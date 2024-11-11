"use client";
import LogoButton from '@/components/common/buttons/LogoButton';
import Image from 'next/image';
import React from 'react';

const News = () => {
  const datas = [
    {
      title: "Basketbol Efsanesi Barış Güney'den Akademik International Kampüsüne Anlamlı Ziyaret",
      alt: 'Eğitim Görseli 1',
      text: "Eski profesyonel basketbolcu ve Bursa Uludağ Basketbol Baş Antrenörü Barış Güney, Akademik Koleji International School Space Kampüsü'nü ziyaret ederek, okulun spor çalışmaları hakkında bilgi aldı ve samimi bir sohbet gerçekleştirdi. Akademik Koleji ailesi olarak, spor alanındaki vizyonumuzu paylaşma fırsatı bulduğumuz ve değerli görüşleriyle bizleri onurlandıran Barış Güney'e teşekkür ederiz.",
      date: "02/12/2024",
      status: "Yeni",
      src: '/images/main.jpg', 
    },
    {
      title: "Bursa Özel Okul Bursluluk Sınavları",
      alt: 'Eğitim Görseli 2',
      text: "Bursa Bursluluk Sınavı 2025, 1-2-3-4-5-6-7-8- 9-10-11. Sınıflar için 4-5 Ocak 2025 tarihinde Bursa Nilüfer Akademik Koleji'nde yapılacaktır.",
      date: "28/05/2024",
      status: "Devam Ediyor",
      src: '/images/main.jpg', 
    },
    {
      title: "Akademik Koleji International School Nasa Campus Yeni Eğitim Yılına Başlıyor",
      alt: 'Eğitim Görseli 3',
      text: "Akademik Koleji International School Nasa Campus, yeni eğitim öğretim dönemine coşkuyla kapılarını açtı. Öğrencilerimizin parlak geleceğine ışık tutacak olan bu yeni dönemde, deneyimli öğretmen kadromuz ve özverili idari ekibimiz, eğitim yolculuğunda onlara rehberlik etmeye hazır.",
      date: "12/02/2024",
      status: "Tamamlandı",
      src: '/images/main.jpg', 
    },
    {
      title: "Akademik Koleji International School Space Campus 2024-2025 Eğitim Öğretim Yılına Başladı",
      alt: 'Eğitim Görseli 4',
      text: "Akademik Koleji International School Space Campus, 2024-2025 eğitim öğretim yılına heyecanla kapılarını açtı! Deneyimli eğitim kadromuz ve sunduğumuz uluslararası standartlardaki eğitimle, her öğrencimizin yeteneklerini keşfetmesine olanak sağlayacağız.",
      date: "20/11/2024",
      status: "Yeni",
      src: '/images/main.jpg', 
    },   {
      title: "Akademik Koleji International School Space Campus 2024-2025 Eğitim Öğretim Yılına Başladı",
      alt: 'Eğitim Görseli 4',
      text: "Akademik Koleji International School Space Campus, 2024-2025 eğitim öğretim yılına heyecanla kapılarını açtı! Deneyimli eğitim kadromuz ve sunduğumuz uluslararası standartlardaki eğitimle, her öğrencimizin yeteneklerini keşfetmesine olanak sağlayacağız.",
      date: "20/10/2024",
      status: "Yeni",
      src: '/images/main.jpg', 
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-12">
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
                src={datas[0].src}
                alt={datas[0].alt}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0 cursor-pointer">
                <h2 className="text-lg font-bold text-white">{datas[0].title}</h2>
                <p className="text-md text-white font-normal line-clamp-2 overflow-hidden text-ellipsis" style={{ maxHeight: '3rem' }}>
                  {datas[0].text}
                </p>
                <div className='flex items-center gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="#e5e7eb" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/><path fill="#e5e7eb" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"/></svg>
                                <p className="text-md text-gray-200">{datas[0].date}</p>
                </div>
                <p className="text-md text-green-300">{datas[0].status}</p>
              </div>

              {/* Hover Durumu İçin Kutu */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="font-bold text-white flex flex-col items-center gap-2 px-5">
                  <h2 className="text-lg font-bold text-white line-clamp-4 overflow-hidden text-ellipsis">{datas[0].title}</h2>
                  <p className="text-md text-white font-normal line-clamp-4 overflow-hidden text-ellipsis" style={{ maxHeight: '8rem' }}>
                    {datas[0].text}
                  </p>
                
                  <LogoButton
  text="Haberin Devamına Git"
  bgColor="bg-black"
  textColor="text-white"
  hoverBgColor="hover:bg-white"
  hoverTextColor="hover:text-black"
  border="border-2"
  borderColor="border-white"
  hoverBorderColor="hover:border-white"
  rounded="rounded-full"
theme="dark"
size="medium"
flexType="inline"
/>

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
                  src={data.src}
                  alt={data.alt}
                  fill
                  className="object-cover w-full rounded-lg"
                />
              </div>

              {/* Kart Başlığı, Açıklama ve Tarih */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0 cursor-pointer h-28">
                <h2 className="text-md font-bold text-white line-clamp-2 overflow-hidden text-ellipsis">{data.title}</h2>
                <div className='flex items-center gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24"><path fill="#e5e7eb" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/><path fill="#e5e7eb" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"/></svg>
                                <p className="text-sm text-gray-200">{data.date}</p>
                </div>
                
                <p className="text-sm text-green-300">{data.status}</p>
              </div>

              {/* Hover Durumu İçin Kutu */}
              <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 px-4 pt-5
               cursor-pointer">
                <div className="text-white flex flex-col gap-2">
                  <h2 className="text-md font-bold text-white line-clamp-3 overflow-hidden text-ellipsis">{data.title}</h2>
                  <p className="text-md text-white font-normal line-clamp-2 overflow-hidden text-ellipsis" style={{ maxHeight: '3rem' }}>
                    {data.text}
                  </p>
                  <div className='absolute bottom-5 '>
                  <LogoButton
  text="Haberin Devamına Git"
  bgColor="bg-black"
  textColor="text-white"
  hoverBgColor="hover:bg-white"
  hoverTextColor="hover:text-black"
  border="border-2"
  borderColor="border-white"
  hoverBorderColor="hover:border-white"
  rounded="rounded-full"
theme="dark"
size="small"
flexType="inline"
/>
           </div>       
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></div>
  );
};

export default News;
