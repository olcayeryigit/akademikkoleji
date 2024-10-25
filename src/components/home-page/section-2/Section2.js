"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBook, FaPen, FaSchool } from "react-icons/fa";

const Section2 = () => {
  const data = [
    {
      id: 1,
      title: "Akademik Koleji",
      p: "Eşitlik, hoşgörü, adalet ve toplum değerlerimiz, eğitim misyonumuza derinden etki eden faktörler olmuştur.",
      p1: "Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk oluşturmaya çalışmaktadır. Her öğrenciye etkin bir şekilde hitap edebilmek, zihinsel, sosyal ve ruhsal gelişimlerini zihin ve kalp alışkanlıkları yoluyla beslemektir.",
      p2: "Akademik Koleji, öğrencileri, doğrularını söylemeye ve varsayımları sorgulamaya, empati ve şefkat göstermeye ve çevrelerindeki dünya hakkında kalıcı bir merak ve bağlılık geliştirmeye teşvik eder. Donanımlı müfredatımız, nitelikli öğretmenlerimiz ve geniş imkanları barındıran büyük eğitim kampüsümüzle Akademik Koleji olarak, çocuklarımızın geleceklerini şekillendirmede ebeveynlerimizin en büyük yardımcıları oluyoruz.",
      image: "/img/home-page/section-2/1-.jpg",
      icon: <FaSchool/>
      , // Buton ikonu
    },
    {
     
      id: 2,
      title: "Yayınlarımız",
      p: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden tarafından hazırlanan özgün yayınlarımız.",
      p1: "Bilim, sanat, teknoloji ve kültür alanında büyük bir hızla büyüyen ve gelişen dünyamızda, öğrencilerimizin eğitiminde kullandığımız yayınlarımızın da bu büyüme ve gelişime uygun olarak güncel tutulmasını önemsiyoruz. Bir üst sınıfa en donanımlı hazırlığı sağlayacak ve nihayetinde ülkemizin ve dünyanın önde gelen üniversitelerine öğrenci kazandıracak donanımlı yayınları kullanmak temel ilkelerimizdendir.",
      p2: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden oluşan Eğitim Komisyonumuzca, dünyada ve ülkemizde, eğitim alanında meydana gelen gelişmeleri yakından takip ederek, öğrencilerimizin emsallerinin önüne geçmesini sağlayacak, ulusal ve uluslararası yayınları sistemimize entegre ediyoruz. Kariyerlerinde kilometre taşı niteliğinde olacak olan LGS ve YKS sınavlarına yönelik stratejik çalışma programlarını, nitelikli yayınlarla sunuyoruz. Bunun yanı sıra sosyal ve kültürel anlamda donanımlı birer birey olmaları adına ihtiyaç duyacakları yayınları, kişilik eğitimi, bireye özgü eğitim, STEM ART Eğitimi, Multi Lingual Eğitim ve daha birçok özellik arz eden eğitim programlarımız dahilinde istifadelerine sunuyoruz.",
      image: "/img/home-page/section-2/2-.jpg",
      icon:<FaPen /> , // Farklı bir ikon
    },
    {
     id: 3,
      title: "Eğitim Sistemimiz",
      p: "Eğitimin amacı, kısaca insanların hayatta başarılı olmalarına ve kariyer yapmalarına yardımcı olmaktır.",
      p1: "Geniş anlamda ise akademik başarının ve iyi bir kariyer hedefinin yanı sıra, eşitlik, doğruluk, adalet ve erdem kavramlarını özümsemiş, ahlaki değerlere sahip, çevresine ve insanlığa faydalı olma ilkesini benimsemiş, üstün insani değerler taşıyan vasıflı bireyler yetiştirmektir. Bu hedeflere ulaşabilmek için belirli etkileşimli ve eleştirel düşünme becerilerinin geliştirmesi gerekir.",
      p2: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden oluşan Eğitim Komisyonumuzca, dünyada ve ülkemizde, eğitim alanında meydana gelen gelişmeleri yakından takip ederek, öğrencilerimizin emsallerinin önüne geçmesini sağlayacak, ulusal ve uluslararası yayınları sistemimize entegre ediyoruz. Kariyerlerinde kilometre taşı niteliğinde olacak olan LGS ve YKS sınavlarına yönelik stratejik çalışma programlarını, nitelikli yayınlarla sunuyoruz. Bunun yanı sıra sosyal ve kültürel anlamda donanımlı birer birey olmaları adına ihtiyaç duyacakları yayınları, kişilik eğitimi, bireye özgü eğitim, STEM ART Eğitimi, Multi Lingual Eğitim ve daha birçok özellik arz eden eğitim programlarımız dahilinde istifadelerine sunuyoruz.",
      image: "/img/home-page/section-2/3.jpeg",
      icon: <FaBook />, // Başka bir ikon
    },
  ];

  const [showData, setShowData] = useState(data[0]);
  const [selectedId, setSelectedId] = useState(1);

  const handleButtonClick = (id) => {
    const selectedData = data.find((item) => item.id === id);
    if (selectedData) {
      setShowData(selectedData);
      setSelectedId(id);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        {data.map((item) => (
  <button
  key={item.id}
  className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-md transform hover:scale-105 ${
    selectedId === item.id
      ? "bg-[#143256] text-white shadow-xl" // Seçili buton için mavi arka plan
      : "bg-white text-[#143256] border border-[#143256] hover:bg-[#F4F1ED] hover:shadow-lg" // Diğer butonlar için beyaz arka plan
  }`}
  onClick={() => handleButtonClick(item.id)}
>
  {item.icon && (
    <span className={`transition-colors ${selectedId === item.id ? "text-white" : "#143256 hover:text-[#E12640]"}`}>
      {item.icon}
    </span>
  )}
  <span className="tracking-wide">{item.title}</span>
</button>
   
        ))}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-12">
        {/* Text Section */}
        <div className="w-full md:w-2/3 space-y-6 flex flex-col justify-between">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">{showData.title}</h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">{showData.p}</p>
            <p className="text-base text-gray-600">{showData.p1}</p>
            <p className="text-base text-gray-600">{showData.p2}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <Image
              src={showData.image}
              alt={`Image for ${showData.title}`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;