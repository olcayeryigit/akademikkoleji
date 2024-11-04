"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBook, FaPen, FaSchool } from "react-icons/fa";
import { RiBook2Fill } from "react-icons/ri";

const Section2 = () => {
  const data = [
    {
      id: 1,
      title: "Akademik Koleji",
      description:
        "Eşitlik, hoşgörü, adalet ve toplum değerlerimiz, eğitim misyonumuza derinden etki eden faktörler olmuştur.",
      p1: "Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk oluşturmaya çalışmaktadır. Her öğrenciye etkin bir şekilde hitap edebilmek, zihinsel, sosyal ve ruhsal gelişimlerini zihin ve kalp alışkanlıkları yoluyla beslemektir.",
      p2: "Akademik Koleji, öğrencileri, doğrularını söylemeye ve varsayımları sorgulamaya, empati ve şefkat göstermeye ve çevrelerindeki dünya hakkında kalıcı bir merak ve bağlılık geliştirmeye teşvik eder. Donanımlı müfredatımız, nitelikli öğretmenlerimiz ve geniş imkanları barındıran büyük eğitim kampüsümüzle Akademik Koleji olarak, çocuklarımızın geleceklerini şekillendirmede ebeveynlerimizin en büyük yardımcıları oluyoruz.",
      image: "/img/home-page/section-2/1-.jpg",
      icon: <FaSchool />,
    },
    {
      id: 2,
      title: "Eğitim Sistemimiz",
      description:
        "Eğitimin amacı, insanların hayatta başarılı olmalarına ve kariyer yapmalarına yardımcı olmaktır.",
      p1: "Geniş anlamda ise akademik başarının ve iyi bir kariyer hedefinin yanı sıra, eşitlik, doğruluk, adalet ve erdem kavramlarını özümsemiş, ahlaki değerlere sahip, çevresine ve insanlığa faydalı olma ilkesini benimsemiş, üstün insani değerler taşıyan vasıflı bireyler yetiştirmektir. Bu hedeflere ulaşabilmek için belirli etkileşimli ve eleştirel düşünme becerilerinin geliştirmesi gerekir.",
      p2: "Akademik Koleji olarak Dijital Eğitim Modeli Endüstri 4.0 ile teknolojiyi eğitim sistemimizin her alanında etkili bir çarpan olarak kullanıyoruz. Teknolojik alt yapımız ve donanımlı sınıflarımızla, öğretmenlerimiz önderliğinde, öğrencilerimize hızlıca ulaşabilecekleri sınırsız nitelikli eğitim materyali sunuyoruz. Multi Lingual (Çok Dilli) eğitim programlarımızla öğrencilerimizin ikinci ve üçüncü yabancı dil öğrenimlerini sağlarken birer dünya vatandaşı olmaları yolunda onlara rehberlik ediyoruz. Üstün kişilik özelliklerini donanımlı akademik gelişimle birleştirmeyi ve yalnızca ülkemizde değil, dünyada da aranan, vasıflı ve aydın bireyler yetiştirmeyi eğitim sistemimizin odağına koyuyoruz.",
      image: "/img/home-page/section-2/3-.jpeg",
      icon: <FaPen />,
    },
    {
      id: 3,
      title: "Yayınlarımız",
      description:
        "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden tarafından hazırlanan özgün yayınlarımız.",
      p1: "Bilim, sanat, teknoloji ve kültür alanında büyük bir hızla büyüyen ve gelişen dünyamızda, öğrencilerimizin eğitiminde kullandığımız yayınlarımızın da bu büyüme ve gelişime uygun olarak güncel tutulmasını önemsiyoruz. Bir üst sınıfa en donanımlı hazırlığı sağlayacak ve nihayetinde ülkemizin ve dünyanın önde gelen üniversitelerine öğrenci kazandıracak donanımlı yayınları kullanmak temel ilkelerimizdendir.",
      p2: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden oluşan Eğitim Komisyonumuzca, dünyada ve ülkemizde, eğitim alanında meydana gelen gelişmeleri yakından takip ederek, öğrencilerimizin emsallerinin önüne geçmesini sağlayacak, ulusal ve uluslararası yayınları sistemimize entegre ediyoruz. Kariyerlerinde kilometre taşı niteliğinde olacak olan LGS ve YKS sınavlarına yönelik stratejik çalışma programlarını, nitelikli yayınlarla sunuyoruz. Bunun yanı sıra sosyal ve kültürel anlamda donanımlı birer birey olmaları adına ihtiyaç duyacakları yayınları, kişilik eğitimi, bireye özgü eğitim, STEM ART Eğitimi, Multi Lingual Eğitim ve daha birçok özellik arz eden eğitim programlarımız dahilinde istifadelerine sunuyoruz.",
      image: "/img/home-page/section-2/2-.jpg",
      icon:<RiBook2Fill />
      ,
    },

  ];

  const [selectedId, setSelectedId] = useState(1);
  const selectedData = data.find((item) => item.id === selectedId);

  return (
    <div className="container mx-auto py-4 px-4 md:px-0">
      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`p-6 border rounded-lg transition-all duration-300 cursor-pointer ${
              selectedId === item.id
                ? "bg-gray-50 border-gray-600 shadow-lg"
                : "bg-white border-gray-300"
            } hover:shadow-lg hover:border-gray-600`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl text-gray-800">{item.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Seçilen Kartın Detayları */}
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Metin Bölümü */}
        <div className="w-full md:w-2/3 space-y-4 transition-opacity duration-500 ease-in-out">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            {selectedData.title}
          </h1>
          <p className="text-base text-gray-600">{selectedData.p1}</p>
          <p className="text-base text-gray-600">{selectedData.p2}</p>
        </div>

        {/* Resim Bölümü */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg transform transition duration-500 ease-in-out">
            <Image
              src={selectedData.image}
              alt={`Image for ${selectedData.title}`}
              fill
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

