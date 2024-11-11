import React from 'react';

const data = [
  {
    value: "15 Yıl+",
    label: "Eğitim Tecrübesi",
    color: '#FF5733', // Kırmızı
  },
  {
    value: "8.734+",
    label: "Toplam Kayıtlı Öğrenci",
    color: '#28A745', // Yeşil
  },
  {
    value: "732",
    label: "LGS'den 450+ Puan",
    color: '#3357FF', // Mavi
  },
  {
    value: "318",
    label: "YKS'den 450+ Puan",
    color: '#EAB308', // Sarı
  },
  {
    value: "1.802",
    label: "Hedef Üniversiteye Yerleşen",
    color: '#8E44AD', // Mor
  },
];

const School= () => {
  return (
    <div className="relative mx-2 md:m-0"> {/* Genel yapı tam genişlik ve belirli yükseklik */}
      <img
        src="/1.jpg" // Buraya kendi resim URL'nizi ekleyin
        alt="Eğitim"
        className="object-cover w-full  max-h-[450px]  md:rounded-xl" // Resmin genişliği ve yüksekliği %100
      />
      <div className="absolute inset-0 left-0 w-full md:w-1/2 bg-[#EEE9E8] bg-opacity-90 p-10 md:p-6 flex flex-col justify-center text-white">
        <div className="flex flex-col gap-2 md:gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg md:text-2xl font-bold text-shadow" style={{ color: item.color }}>
                {item.value}
              </h3>
              <p style={{ color: item.color }} className="text-sm md:text-md font-medium clear-text-shadow">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;


