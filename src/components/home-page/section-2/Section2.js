"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const Section2 = () => {
  const data = [
    {
      id: 1,
      title: "Akademik Koleji",
      p: "Eşitlik, hoşgörü, adalet ve toplum değerlerimiz, eğitim misyonumuza derinden etki eden faktörler olmuştur.",
      p1: "Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk oluşturmaya çalışmaktadır. Her öğrenciye etkin bir şekilde hitap edebilmek, zihinsel, sosyal ve ruhsal gelişimlerini zihin ve kalp alışkanlıkları yoluyla beslemektir.",
      p2: "Akademik Koleji, öğrencileri, doğrularını söylemeye ve varsayımları sorgulamaya, empati ve şefkat göstermeye ve çevrelerindeki dünya hakkında kalıcı bir merak ve bağlılık geliştirmeye teşvik eder. Donanımlı müfredatımız, nitelikli öğretmenlerimiz ve geniş imkanları barındıran büyük eğitim kampüsümüzle Akademik Koleji olarak, çocuklarımızın geleceklerini şekillendirmede ebeveynlerimizin en büyük yardımcıları oluyoruz.",
      image: "/img/home-page/section-2/1.png",
    },
    {
      id: 2,
      title: "Eğitim Sistemimiz",
      p: "Eğitimin amacı, kısaca insanların hayatta başarılı olmalarına ve kariyer yapmalarına yardımcı olmaktır.",
      p1: "Geniş anlamda ise akademik başarının ve iyi bir kariyer hedefinin yanı sıra, eşitlik, doğruluk, adalet ve erdem kavramlarını özümsemiş, ahlaki değerlere sahip, çevresine ve insanlığa faydalı olma ilkesini benimsemiş, üstün insani değerler taşıyan vasıflı bireyler yetiştirmektir. Bu hedeflere ulaşabilmek için belirli etkileşimli ve eleştirel düşünme becerilerinin geliştirmesi gerekir.",
      p2: "Akademik Koleji olarak Dijital Eğitim Modeli Endüstri 4.0 ile teknolojiyi eğitim sistemimizin her alanında etkili bir çarpan olarak kullanıyoruz. Teknolojik alt yapımız ve donanımlı sınıflarımızla, öğretmenlerimiz önderliğinde, öğrencilerimize hızlıca ulaşabilecekleri sınırsız nitelikli eğitim materyali sunuyoruz. Multi Lingual (Çok Dilli) eğitim programlarımızla öğrencilerimizin ikinci ve üçüncü yabancı dil öğrenimlerini sağlarken birer dünya vatandaşı olmaları yolunda onlara rehberlik ediyoruz. Üstün kişilik özelliklerini donanımlı akademik gelişimle birleştirmeyi ve yalnızca ülkemizde değil, dünyada da aranan, vasıflı ve aydın bireyler yetiştirmeyi eğitim sistemimizin odağına koyuyoruz.",
      image: "/img/home-page/section-2/1.png",
    },
    {
      id: 3,
      title: "Yayınlarımız",
      p: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden tarafından hazırlanan özgün yayınlarımız.",
      p1: "Bilim, sanat, teknoloji ve kültür alanında büyük bir hızla büyüyen ve gelişen dünyamızda, öğrencilerimizin eğitiminde kullandığımız yayınlarımızın da bu büyüme ve gelişime uygun olarak güncel tutulmasını önemsiyoruz. Bir üst sınıfa en donanımlı hazırlığı sağlayacak ve nihayetinde ülkemizin ve dünyanın önde gelen üniversitelerine öğrenci kazandıracak donanımlı yayınları kullanmak temel ilkelerimizdendir.",
      p2: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden oluşan Eğitim Komisyonumuzca, dünyada ve ülkemizde, eğitim alanında meydana gelen gelişmeleri yakından takip ederek, öğrencilerimizin emsallerinin önüne geçmesini sağlayacak, ulusal ve uluslararası yayınları sistemimize entegre ediyoruz. Kariyerlerinde kilometre taşı niteliğinde olacak olan LGS ve YKS sınavlarına yönelik stratejik çalışma programlarını, nitelikli yayınlarla sunuyoruz. Bunun yanı sıra sosyal ve kültürel anlamda donanımlı birer birey olmaları adına ihtiyaç duyacakları yayınları, kişilik eğitimi, bireye özgü eğitim, STEM ART Eğitimi, Multi Lingual Eğitim ve daha birçok özellik arz eden eğitim programlarımız dahilinde istifadelerine sunuyoruz.",
      image: "/img/home-page/section-2/3.png",
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
    <div className="container mx-auto p-8">
      {/* Butonlar */}
      <div className="flex justify-center gap-4 mb-5">
        {data.map((item) => (
          <button
            key={item.id}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg ${
              selectedId === item.id
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-900 hover:bg-opacity-30"
            }`}
            onClick={() => handleButtonClick(item.id)}
          >
            <FaQuestion className={selectedId === item.id ? "text-white" : "text-blue-700"} />
            {item.title}
          </button>
        ))}
      </div>

      <hr className="my-6 border-gray-300" />

      {/* İçerik ve Görsel */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Metin Bölümü */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">{showData.title}</h1>
          <p className="text-lg text-gray-700">{showData.p}</p>
          <p className="text-base text-gray-600">{showData.p1}</p>
          <p className="text-base text-gray-600">{showData.p2}</p>
        </div>

        {/* Görsel Bölümü */}
        <div className="relative w-full h-64 md:w-1/3 md:h-auto  overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
          <Image
            src={showData.image}
            alt={showData.title}
            objectFit="contain"
            className="rounded-lg px-2"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;