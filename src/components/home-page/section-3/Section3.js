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
      icon: <FaGraduationCap size={50} className="text-blue-600" />,
      bgColor: "bg-blue-300",
      borderColor: "border-blue-600",
      textColor: "text-blue-900", // Title rengi icon border rengi ile aynı
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
      icon: <FaChartLine size={50} className="text-green-600" />,
      bgColor: "bg-green-300",
      borderColor: "border-green-600",
      textColor: "text-green-900", // Title rengi icon border rengi ile aynı
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
      icon: <FaLanguage size={60} className="text-yellow-600" />,
      bgColor: "bg-yellow-300",
      borderColor: "border-yellow-600",
      textColor: "text-yellow-900", // Title rengi icon border rengi ile aynı
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
      icon: <FaSwimmer size={50} className="text-red-600" />,
      bgColor: "bg-red-300",
      borderColor: "border-red-600",
      textColor: "text-red-900", // Title rengi icon border rengi ile aynı
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/img/home-page/section-3/1.png"
            width={502}
            height={63}
            className="rounded-lg object-contain"
          />
        </div>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10">
          Öğrencilerimizin bedensel, zihinsel ve akademik gelişimlerinde, belirlediğimiz hedeflere emin adımlarla, dörtlü eğitim modelimizle ulaşıyoruz.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-5">
          <div className="flex flex-col items-start w-full md:w-1/2">
            {corners.slice(0, 2).map((corner) => (
              <div
                key={corner.order}
                className={`${corner.bgColor} rounded-2xl p-6 shadow-lg mb-6 transition-all duration-300 ease-in-out flex flex-col justify-between h-full`}
              >
                <div className="flex items-center mb-4"></div>
                <h4 className={`font-semibold text-xl ${corner.textColor} mb-2 flex-grow`}>
                  <span className="font-bold">{corner.order}</span> {corner.title}
                </h4>
                <p className={`text-base text-gray-600 flex-grow`}>{corner.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center w-full md:w-1/4">
            <div className="flex items-center mb-6">
              <div className={`relative w-[100px] h-[100px] flex justify-center items-center overflow-hidden rounded-full shadow-lg ${corners[0].bgColor} border ${corners[0].borderColor} border-4`}>
                {corners[0].icon}
              </div>
            </div>
            <div className="flex justify-between gap-6 md:gap-24 mb-6">
              <div className={`relative w-[100px] h-[100px] flex justify-center items-center overflow-hidden rounded-full shadow-lg ${corners[1].bgColor} border ${corners[1].borderColor} border-4`}>
                {corners[1].icon}
              </div>
              <div className={`relative w-[100px] h-[100px] flex justify-center items-center overflow-hidden rounded-full shadow-lg ${corners[2].bgColor} border ${corners[2].borderColor} border-4`}>
                {corners[2].icon}
              </div>
            </div>
            <div className="flex items-center">
              <div className={`relative w-[100px] h-[100px] flex justify-center items-center overflow-hidden rounded-full shadow-lg ${corners[3].bgColor} border ${corners[3].borderColor} border-4`}>
                {corners[3].icon}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end w-full md:w-1/2">
            {corners.slice(2, 4).map((corner) => (
              <div
                key={corner.order}
                className={`${corner.bgColor} rounded-2xl p-6 shadow-lg mb-6 transition-all duration-300 ease-in-out flex flex-col justify-between h-full `}
              >
                <div className="flex items-center mb-4"></div>
                <h4 className={`font-semibold text-xl ${corner.textColor} mb-2 flex-grow`}>
                  <span className="font-bold">{corner.order}</span> {corner.title}
                </h4>
                <p className={`text-base text-gray-600  flex-grow`}>{corner.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;