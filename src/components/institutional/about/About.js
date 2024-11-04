"use client"
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Hakkımızda</h2>
      <p className="text-lg text-justify mb-4">
        Türkiye’de ulusal ve uluslararası tüm standartları başarı ile eğitim modellerine uygulayan, yenilikçi bakış açısıyla eğitim sektöründe fark yaratan bir kurum olarak çocuklarımızı yarının dünyasına donanımlı bir şekilde yetiştiriyoruz. 15 yılı aşkın süredir eğitimin her bir disiplininde inovatif yaklaşımlarla ve bilimsel metotlar eşliğinde geleceğe yön verebilen karakter sahibi bir nesil inşa ediyoruz.
      </p>
      <p className="text-lg text-justify mb-4">
        2022 yılında kurulan Akademik Koleji, sıradanlığın ötesinde bilimin ışığında, Endüstri 4.0 Eğitim Modeliyle kendini ve yaşadığı dünyayı tanıyan bireyler yetiştirmek adına eğitim faaliyetlerini durmaksızın sürdürüyor.
      </p>
      <blockquote className="bg-gray-100 p-4 rounded-md text-center mb-4">
        <p className="mb-2 text-lg">
          "Amacımız globalleşen dünyada tasarlayan, geliştiren ve teknolojiyi yaşama entegre edebilen karakter sahibi yeni nesiller inşa etmek. Nitelikli kadromuzla Bursa’dan dünyaya açılan bir eğitim kurumu olarak hizmet veriyoruz. Öğrencilerimizi başarıya ulaştırmak ve Türk eğitim sistemini uluslararası alanda zirveye taşımak en büyük misyonumuzdur."
        </p>
        <footer className="text-sm font-semibold">Genel Müdür <cite title="Source Title">Mustafa Özdemir</cite></footer>
      </blockquote>
    </div>
  );
};

export default About;
