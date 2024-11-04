"use client";
import React from "react";

const BrandPartners= () => {
  // Örnek logo yolları (bu yolları kendi logo dosyalarınızla değiştirin)
  const logos = [
    "/img/logo/1.png",
    "/img/logo/2.png",
    "/img/logo/ak-1.png",
    "/img/logo/ak-2.png",
    "/img/logo/2.png",
    "/img/logo/2.png",
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Marka Ortaklrımız
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Marka ${index + 1}`}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPartners;
