"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="relative bg-[#080D16]">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/9.png" 
          className="w-full h-full object-cover object-top opacity-30 z-10" 
          alt="Background Image" 
          layout="fill"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-[#080D16] z-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto pt-40 pb-16 px-4 relative z-30">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-6 text-shadow-xl">
          Hakkımızda
        </h2>

        {/* Paragraphs */}
        <p className="text-lg text-justify mb-6 text-gray-100 text-shadow-md">
          Türkiye&rsquo;de ulusal ve uluslararası tüm standartları başarı ile eğitim modellerine uygulayan, yenilikçi bakış açısıyla eğitim sektöründe fark yaratan bir kurum olarak çocuklarımızı yarının dünyasına donanımlı bir şekilde yetiştiriyoruz. 15 yılı aşkın süredir eğitimin her bir disiplininde inovatif yaklaşımlarla ve bilimsel metotlar eşliğinde geleceğe yön verebilen karakter sahibi bir nesil inşa ediyoruz.
        </p>
        <p className="text-lg text-justify mb-6 text-gray-100 text-shadow-md transition-all duration-300 hover:text-gray-300">
          2022 yılında kurulan Akademik Koleji, sıradanlığın ötesinde bilimin ışığında, Endüstri 4.0 Eğitim Modeliyle kendini ve yaşadığı dünyayı tanıyan bireyler yetiştirmek adına eğitim faaliyetlerini durmaksızın sürdürüyor.
        </p>

        {/* Quote */}
        <blockquote className="bg-[#171C24] p-6 rounded-lg text-center mb-8 text-white shadow-xl">
          <p className="mb-4 text-lg italic">
            &quot;Amacımız globalleşen dünyada tasarlayan, geliştiren ve teknolojiyi yaşama entegre edebilen karakter sahibi yeni nesiller inşa etmek. Nitelikli kadromuzla Bursa&rsquo;dan dünyaya açılan bir eğitim kurumu olarak hizmet veriyoruz. Öğrencilerimizi başarıya ulaştırmak ve Türk eğitim sistemini uluslararası alanda zirveye taşımak en büyük misyonumuzdur.&quot;
          </p>
          <footer className="text-sm font-semibold text-gray-300">
            Genel Müdür <cite title="Source Title">Mustafa Özdemir</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
