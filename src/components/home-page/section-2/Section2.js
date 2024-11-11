"use client";
import Image from "next/image";
import React, { useState } from "react";

const Section2 = () => {
  const data = [
    {
      id: 1,
      title: "Akademik Koleji",
      description:
        "Eşitlik, hoşgörü, adalet ve toplum değerlerimiz, eğitim misyonumuza derinden etki eden faktörler olmuştur.",
      p1: "Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk oluşturmaya çalışmaktadır. Her öğrenciye etkin bir şekilde hitap edebilmek, zihinsel, sosyal ve ruhsal gelişimlerini zihin ve kalp alışkanlıkları yoluyla beslemektir.",
      p2: "Akademik Koleji, öğrencileri, doğrularını söylemeye ve varsayımları sorgulamaya, empati ve şefkat göstermeye ve çevrelerindeki dünya hakkında kalıcı bir merak ve bağlılık geliştirmeye teşvik eder. Donanımlı müfredatımız, nitelikli öğretmenlerimiz ve geniş imkanları barındıran büyük eğitim kampüsümüzle Akademik Koleji olarak, çocuklarımızın geleceklerini şekillendirmede ebeveynlerimizin en büyük yardımcıları oluyoruz.",
      image: "/images/home-page/section-2/1.jpg",
      icon: "/images/home-page/section-2/school.png",
    },
    {
      id: 2,
      title: "Eğitim Sistemimiz",
      description:
        "Eğitimin amacı, insanların hayatta başarılı olmalarına ve kariyer yapmalarına yardımcı olmaktır.",
      p1: "Geniş anlamda ise akademik başarının ve iyi bir kariyer hedefinin yanı sıra, eşitlik, doğruluk, adalet ve erdem kavramlarını özümsemiş, ahlaki değerlere sahip, çevresine ve insanlığa faydalı olma ilkesini benimsemiş, üstün insani değerler taşıyan vasıflı bireyler yetiştirmektir. Bu hedeflere ulaşabilmek için belirli etkileşimli ve eleştirel düşünme becerilerinin geliştirmesi gerekir.",
      p2: "Akademik Koleji olarak Dijital Eğitim Modeli Endüstri 4.0 ile teknolojiyi eğitim sistemimizin her alanında etkili bir çarpan olarak kullanıyoruz. Teknolojik alt yapımız ve donanımlı sınıflarımızla, öğretmenlerimiz önderliğinde, öğrencilerimize hızlıca ulaşabilecekleri sınırsız nitelikli eğitim materyali sunuyoruz. Multi Lingual (Çok Dilli) eğitim programlarımızla öğrencilerimizin ikinci ve üçüncü yabancı dil öğrenimlerini sağlarken birer dünya vatandaşı olmaları yolunda onlara rehberlik ediyoruz. Üstün kişilik özelliklerini donanımlı akademik gelişimle birleştirmeyi ve yalnızca ülkemizde değil, dünyada da aranan, vasıflı ve aydın bireyler yetiştirmeyi eğitim sistemimizin odağına koyuyoruz.",
      image: "/images/home-page/section-2/2.jpeg",
      icon: "/images/home-page/section-2/pen.png",
    },
    {
      id: 3,
      title: "Yayınlarımız",
      description:
        "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden tarafından hazırlanan özgün yayınlarımız.",
      p1: "Bilim, sanat, teknoloji ve kültür alanında büyük bir hızla büyüyen ve gelişen dünyamızda, öğrencilerimizin eğitiminde kullandığımız yayınlarımızın da bu büyüme ve gelişime uygun olarak güncel tutulmasını önemsiyoruz. Bir üst sınıfa en donanımlı hazırlığı sağlayacak ve nihayetinde ülkemizin ve dünyanın önde gelen üniversitelerine öğrenci kazandıracak donanımlı yayınları kullanmak temel ilkelerimizdendir.",
      p2: "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden oluşan Eğitim Komisyonumuzca, dünyada ve ülkemizde, eğitim alanında meydana gelen gelişmeleri yakından takip ederek, öğrencilerimizin emsallerinin önüne geçmesini sağlayacak, ulusal ve uluslararası yayınları sistemimize entegre ediyoruz. Kariyerlerinde kilometre taşı niteliğinde olacak olan LGS ve YKS sınavlarına yönelik stratejik çalışma programlarını, nitelikli yayınlarla sunuyoruz. Bunun yanı sıra sosyal ve kültürel anlamda donanımlı birer birey olmaları adına ihtiyaç duyacakları yayınları, kişilik eğitimi, bireye özgü eğitim, STEM ART Eğitimi, Multi Lingual Eğitim ve daha birçok özellik arz eden eğitim programlarımız dahilinde istifadelerine sunuyoruz.",
      image: "/images/home-page/section-2/3.jpeg",
      icon: "/images/home-page/section-2/book.png",
    },
  ];

  const [selectedId, setSelectedId] = useState(1);
  const selectedData = data.find((item) => item.id === selectedId);
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="container mx-auto p-4 md:px-0">
      {/* Kartlar */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`w-full md:w-96 border rounded-lg transition-all duration-300 cursor-pointer p-4 ${
              selectedId === item.id
                ? "bg-gray-50 border-gray-600 shadow-lg"
                : "bg-white border-gray-300"
            } hover:shadow-lg hover:border-gray-600`}
          >
            <div className="flex flex-col md:flex-col items-center gap-0">
              <div className="relative w-28 h-28 mb-2">
                <Image
                  fill
                  src={item.icon}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 text-start md:text-center mb-2">
                  {item.title}
                </h2>
                <h2 className="text-base text-gray-600 text-start md:text-center">
                  {item.description}
                </h2>

                {/* Küçük ekranlar için buton ve içerik */}
                <div className="md:hidden mt-4">
                  <button
                    className="text-[#151A23]"
                    onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
                  >
                    {isOpen === item.id ? "Daha Az" : "Daha Fazla Göster"}
                  </button>
                  {isOpen === item.id && (
                    <div className="mt-2 text-gray-600">
                      <p>{item.p1}</p>
                      <p>{item.p2}</p>
                      <div className="relative w-full h-60 mt-4">
                        <Image
                          fill
                          src={item.image}
                          alt={item.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Seçilen Kartın Detayları */}
      <div className="hidden md:flex flex-col md:flex-row items-start gap-12">
        {/* Metin Bölümü */}
        <div className="w-full md:w-2/3 space-y-4 transition-opacity duration-500 ease-in-out">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            {selectedData.title}
          </h1>
          <h2 className="text-base text-gray-600 ">{selectedData.description}</h2>
          <p className="text-base text-gray-600">{selectedData.p1}</p>
          <p className="text-base text-gray-600">{selectedData.p2}</p>
        </div>

        {/* Resim Bölümü */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="relative w-full h-[600px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg transform transition duration-500 ease-in-out">
            <Image
              src={selectedData.image}
              alt={`Image for ${selectedData.title}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
