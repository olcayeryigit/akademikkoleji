import React from 'react';

const VisionMission = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Vizyon ve Misyonumuz</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vizyon Bölümü */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Vizyonumuz</h3>
          <p className="text-lg text-justify">
            Globalleşen dünyada, bilim ve teknolojinin ışığında, yenilikçi ve sürdürülebilir eğitim modelleriyle geleceğin lider bireylerini yetiştirmeyi hedefliyoruz. Amacımız, öğrencilerimizin kendi potansiyellerini keşfetmelerine yardımcı olmak ve onları değişen dünyaya hazırlamaktır.
          </p>
        </div>

        {/* Misyon Bölümü */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Misyonumuz</h3>
          <p className="text-lg text-justify">
            Eğitimde mükemmeliyeti hedefleyerek, nitelikli ve deneyimli öğretim kadromuzla, öğrencilere bireysel ihtiyaçlarına uygun eğitim fırsatları sunuyoruz. Bilimsel metotlar ve inovatif yaklaşımlar ile, karakter sahibi, etik değerlere sahip bireyler yetiştirmek en önemli misyonumuzdur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
