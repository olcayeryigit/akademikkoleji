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
      icon: "/images/home-page/section-3/icon/170.png",
      bgColor: "bg-blue-700 ",
      borderColor: "border-blue-800",
      image: "/images/home-page/section-3/img/175.png",
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
      icon: "/images/home-page/section-3/icon/172.png",

      bgColor: "bg-green-700",
      borderColor: "border-green-800",
      image: "/images/home-page/section-3/img/176.png",
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
      icon: "/images/home-page/section-3/icon/171.png",

      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-800",
      image: "/images/home-page/section-3/img/179.png",
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
      icon: "/images/home-page/section-3/icon/174.png",

      bgColor: "bg-red-600",
      borderColor: "border-red-800",
      image: "/images/home-page/section-3/img/182.png",
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
              src="/images/home-page/section-3/x.png"
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
                src={corner.image}
                alt=""
                fill
                className="object-cover rounded-t-lg  "
              />
                <img src="/img/bg7.png" alt="Overlay Görsel" class="absolute  w-full h-full opacity-90 " />

              <div className={`absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50 p-3 rounded-full bg-white shadow-xl`}>
                <Image src={corner.icon} width={70} height={70}/>
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