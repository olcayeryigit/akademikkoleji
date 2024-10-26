"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBook, FaPen, FaSchool } from "react-icons/fa";

const Section2 = () => {
  const data = [
    {
      id: 1,
      title: "Akademik Koleji",
      description:
        "Eşitlik, hoşgörü, adalet ve toplum değerlerimiz, eğitim misyonumuza derinden etki eden faktörler olmuştur.",
      p1: "Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk oluşturmaya çalışmaktadır.",
      p2: "Akademik Koleji, öğrencileri, doğrularını söylemeye ve varsayımları sorgulamaya, empati ve şefkat göstermeye teşvik eder.",
      image: "/img/home-page/section-2/1-.jpg",
      icon: <FaSchool />,
    },
    {
      id: 2,
      title: "Yayınlarımız",
      description:
        "Okulumuz bünyesinde kurmuş olduğumuz ve nitelikli akademisyenlerden tarafından hazırlanan özgün yayınlarımız.",
      p1: "Bilim, sanat, teknoloji ve kültür alanında büyük bir hızla büyüyen ve gelişen dünyamızda, öğrencilerimizin eğitiminde kullandığımız yayınlarımızın da bu büyüme ve gelişime uygun olarak güncel tutulmasını önemsiyoruz.",
      p2: "Okulumuz Eğitim Komisyonumuzca, eğitim alanında meydana gelen gelişmeleri takip ederek öğrencilerimizin emsallerinin önüne geçmesini sağlıyoruz.",
      image: "/img/home-page/section-2/2-.jpg",
      icon: <FaPen />,
    },
    {
      id: 3,
      title: "Eğitim Sistemimiz",
      description:
        "Eğitimin amacı, insanların hayatta başarılı olmalarına ve kariyer yapmalarına yardımcı olmaktır.",
      p1: "Akademik başarının yanı sıra, ahlaki değerlere sahip, çevresine ve insanlığa faydalı bireyler yetiştirmektir.",
      p2: "Okulumuz eğitim alanında meydana gelen gelişmeleri takip ederek ulusal ve uluslararası yayınları sistemimize entegre ediyoruz.",
      image: "/img/home-page/section-2/3.jpeg",
      icon: <FaBook />,
    },
  ];

  const [selectedId, setSelectedId] = useState(1);
  const selectedData = data.find((item) => item.id === selectedId);

  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
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

