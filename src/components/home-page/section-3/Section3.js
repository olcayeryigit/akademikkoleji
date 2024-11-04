"use client";
import React from "react";
import { FaGraduationCap, FaChartLine, FaLanguage, FaSwimmer } from "react-icons/fa";
import Image from "next/image";

const Section3 = () => {
  const corners = [
    {
      order: "1.",
      title: "Dijital Eğitim Modeli Endüstri 4.0",
      text: "Uyguladığımız benzersiz eğitim modeliyle, değişime açık ve uyumlu, yüksek problem çözme kabiliyetine sahip, etkili reel ve sanal iletişim becerilerini geliştirmiş, büyük verileri teknoloji ile analiz edebilen ve yöneten donanımlı öğrenciler yetiştiriyoruz.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="white" d="m16 10.6l4-2.3L16 6l-4 2.3zm0 3.05l2.75-1.6v-2.1L16 11.55l-2.75-1.6v2.1zM2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20zm4 0q0-2.7-1.025-5.062t-2.787-4.126t-4.126-2.787T2 7V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>,
      bgColor: "bg-blue-700 ",
      borderColor: "border-blue-800",
      image: "/img/home-page/section-3/grad.jpg"
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256"><path fill="white" d="M96 113.89L107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.84 100.42l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16M208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8"/></svg>,
      bgColor: "bg-green-700",
      borderColor: "border-green-800",
      image: "/img/home-page/section-3/success.jpg"
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 640 512"><path fill="white" d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24m-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9c8.4 6.4 17.1 12.5 26.1 18c5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3c-12.6-7.8-24.5-16.1-35.4-24.9c-10.9 8.7-22.7 17.1-35.4 24.9c-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2q13.95-8.55 26.1-18c-7.9-8.4-14.9-17-21-25.7c-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9l7.3-4.3c5.4-3.2 12.4-1.7 16 3.4c5 7 10.8 14 17.4 20.9c13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24m58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9"/></svg>,
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-800",
      image: "/img/home-page/section-3/language.jpg"
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 13c.5.5 2.13-.112 3.262-.5c1.46-.5 3.238 0 2.738-.5l-2-2s-4.5 2.5-4 3m-9 7c2 0 3-1 5-1s3 1 5 1s3-1 5-1s3 1 5 1M2 16c2 0 3-1 5-1s3 1 5 1s3-1 5-1s3 1 5 1M17.5 4l-5.278 3l3.278 3.5L12 12m7.222-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>,
      bgColor: "bg-red-600",
      borderColor: "border-red-800",
      image: "/img/home-page/section-3/sports.jpg"
    },
  ];

  return (
    <div className=" py-12 ">

    <div className="container mx-auto text-center">
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2 text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-3">
          <div>4</div>
          <div className="relative w-12 h-12">
            <Image
              src="/img/x.png"
              fill
              className="rounded-lg object-cover"
              alt="Section Image"
            />
          </div>
          <div>4</div>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-3 ">
          Eğitim Modeli
        </h1>
      </div>
      <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10">
        Öğrencilerimizin bedensel, zihinsel ve akademik gelişimlerinde, belirlediğimiz hedeflere emin adımlarla, dörtlü eğitim modelimizle ulaşıyoruz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
        {corners.map((corner) => (
          <div key={corner.order} className="shadow-2xl rounded-lg bg-white">
            <div className="relative w-full h-[180px]">
              <Image
                src="/img/2-.jpg"
                alt={corner.title}
                fill
                className="object-cover rounded-t-lg  "
              />
              <div className={`absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50 p-5 rounded-full ${corner.bgColor}`}>
                {corner.icon}
              </div>
            </div>
            <div className="mt-10 p-4 ">
              <h4 className="font-semibold text-xl mb-2">
                <span className="font-bold">{corner.order}</span> {corner.title}
              </h4>
              <p className="text-base text-gray-800">{corner.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Section3;

{/*
  "use client";
import React from "react";
import { FaGraduationCap, FaChartLine, FaLanguage, FaSwimmer } from "react-icons/fa";
import Image from "next/image";

const Section3 = () => {
  const corners = [
    {
      order: "1.",
      title: "Dijital Eğitim Modeli Endüstri 4.0",
      text: "Uyguladığımız benzersiz eğitim modeliyle, değişime açık ve uyumlu, yüksek problem çözme kabiliyetine sahip, etkili reel ve sanal iletişim becerilerini geliştirmiş, büyük verileri teknoloji ile analiz edebilen ve yöneten donanımlı öğrenciler yetiştiriyoruz.",
      icon: <FaGraduationCap size={40} className="text-white" />,
      bgColor: "bg-blue-700",
      borderColor: "border-blue-800",
      image: "/img/home-page/section-3/grad.jpg",
      textBgColor: "bg-blue-100", // Daha açık pastel ton
      shadowColor: "shadow-blue-500", // Gölge rengi
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
      icon: <FaChartLine size={40} className="text-white" />,
      bgColor: "bg-green-700",
      borderColor: "border-green-800",
      image: "/img/home-page/section-3/success.jpg",
      textBgColor: "bg-green-100", // Daha açık pastel ton
      shadowColor: "shadow-green-500", // Gölge rengi
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
      icon: <FaLanguage size={40} className="text-white" />,
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-800",
      image: "/img/home-page/section-3/language.jpg",
      textBgColor: "bg-yellow-100", // Daha açık pastel ton
      shadowColor: "shadow-yellow-500", // Gölge rengi
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
      icon: <FaSwimmer size={40} className="text-white" />,
      bgColor: "bg-red-600",
      borderColor: "border-red-800",
      image: "/img/home-page/section-3/sports.jpg",
      textBgColor: "bg-red-100", // Daha açık pastel ton
      shadowColor: "shadow-red-500", // Gölge rengi
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-2">
          <Image
            src="/img/home-page/section-3/1.png"
            width={420}
            height={270}
            className="rounded-lg object-cover"
            alt="Section Image"
          />
        </div>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10">
          Öğrencilerimizin bedensel, zihinsel ve akademik gelişimlerinde, belirlediğimiz hedeflere emin adımlarla, dörtlü eğitim modelimizle ulaşıyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {corners.map((corner) => (
            <div
              key={corner.order}
              className={`rounded-lg ${corner.textBgColor} border-2 ${corner.borderColor} ${corner.shadowColor} shadow-sm`}
            >
              <div className="relative w-full h-[180px]">
                <Image
                  src="/img/2-.jpg"
                  alt={corner.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className={`absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50 p-5 rounded-full ${corner.bgColor}`}>
                  {corner.icon}
                </div>
              </div>
              <div className="mt-10 p-4">
                <h4 className="font-semibold text-xl mb-2">
                  <span className="font-bold">{corner.order}</span> {corner.title}
                </h4>
                <p className="text-base text-gray-800">{corner.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section3;bg-[url('/img/common/deneme.png')] bg-cover bg-center

*/}