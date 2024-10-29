"use client";
import Image from 'next/image';
import React from 'react';

const Section8 = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">HABERLER</h1>
        <h2 className="text-2xl text-gray-500">Tüm Haberler</h2>
      </div>

      {/* Galeri Yapısı */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sol tarafta büyük resim */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/2-.jpg"
            alt="Large Image"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Sağ tarafta 2x2 küçük resimler */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-1/2">
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src="/img/2-.jpg"
              alt={`Small Image ${index}`}
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
