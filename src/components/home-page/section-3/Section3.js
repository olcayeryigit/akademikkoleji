"use client";
import Image from 'next/image';
import React from 'react';

const Section3 = () => {
  const corners = [
    {
      order: "1.",
      title: "Dijital Eğitim Modeli Endüstri 4.0",
      text: "Uyguladığımız benzersiz eğitim modeliyle, değişime açık ve uyumlu, yüksek problem çözme kabiliyetine sahip, etkili reel ve sanal iletişim becerilerini geliştirmiş, büyük verileri teknoloji ile analiz edebilen ve yöneten donanımlı öğrenciler yetiştiriyoruz.",
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className='container mx-auto text-center'>
        <div className=' mb-4 flex items-center justify-center gap-2'
        ><Image width={100} height={50} src="/img/home-page/section-3/4X4.svg"/>
        <h1 className='text-2xl font-bold' >Eğitim Modeli</h1> </div>
        <h6 className='text-xl ms-4 text-start mb-8'>
          Öğrencilerimizin bedensel, zihinsel ve akademik gelişimlerinde, belirlediğimiz hedeflere emin adımlarla, dörtlü eğitim modelimizle ulaşıyoruz.
        </h6>
        <div className="corner-section flex flex-col md:flex-row items-stretch justify-center w-full relative z-10 space-y-4 md:space-y-0">
          
          {/* Sol Bölüm */}
          <div className='flex flex-col justify-between w-full md:w-1/2 p-4 space-y-4 text-start'>
            <div className="corner-text flex flex-col h-full mb-4 bg-red-400 bg-opacity-20 rounded-md py-5 px-3 border border-red-400">
              <h4 className="font-bold text-md mb-2">
                <span className='text-red-700'>{corners[0].order}</span> {corners[0].title}
              </h4>
              <p className="text-justify">{corners[0].text}</p>
            </div>
            <div className="corner-text flex flex-col h-full mb-4 bg-orange-400 bg-opacity-20 rounded-md py-5 px-3 border border-orange-400">
              <h4 className="font-bold text-md mb-2">
                <span className='text-orange-700'>{corners[2].order}</span> {corners[2].title}
              </h4>
              <p className="text-justify">{corners[2].text}</p>
            </div>
          </div>

          {/* Orta Resim - Ortalanmış */}
          <div className="flex justify-center p-4">
            <Image 
              src="/img/home-page/section-3/egitim.png" 
              alt="Orta Resim" 
              width={750} 
              height={750} 
              className="object-contain" 
            />
          </div>

          {/* Sağ Bölüm */}
          <div className='flex flex-col justify-between w-full md:w-1/2 p-4 space-y-4 text-start'>
            <div className="corner-text flex flex-col h-full mb-4 bg-green-500 bg-opacity-20 rounded-md py-5 px-3 border border-green-500">
              <h4 className="font-bold text-md mb-2">
                <span className='text-green-700'>{corners[1].order}</span> {corners[1].title}
              </h4>
              <p className="text-justify ">{corners[1].text}</p>
            </div>
            <div className="corner-text mt-5 flex flex-col h-full mb-4 bg-blue-700 bg-opacity-20 rounded-md py-5 px-3 border border-blue-400">
              <h4 className="font-bold text-md mb-2">
                <span className='text-blue-900'>{corners[3].order}</span> {corners[3].title}
              </h4>
              <p className="text-justify">{corners[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3; 