import ImageBanner from '@/components/common/image-banner/ImageBanner';
import React, { useState } from 'react';

const MenuComponent = () => {
  const [activeMeal, setActiveMeal] = useState('kahvaltı'); // Default to 'Kahvaltı'

  // Menü verisi
  const menus = {
    kahvaltı: [
      {
        title: "Kahvaltı Menüsü (Kids)",
        subTitle: "Kids",
        week: "1. Hafta (1-7 Ekim)",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Haşlanmış Yumurta", "Karışık Zeytin", "Salatalık", "Tahin Helva", "Meyve Çayı/Bitki Çayı"] },
          { date: "2 Ekim 2024", dishes: ["Kaşarlı Ekmek", "Peynir", "Domates", "Reçel", "Meyve Çayı/Bitki Çayı"] },
          { date: "3 Ekim 2024", dishes: ["Sıcak Çikolata", "Poğaça", "Meyve"] },
        ],
      },
    ],
    ogle: [
      {
        title: "Öğle Menüsü (Nasa - Space)",
        subTitle: "Nasa - Space",
        week: "1. Hafta (1-7 Ekim)",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Mercimek Çorbası", "Izgara Tavuk", "Pilav", "Mevsim Salata"] },
          { date: "2 Ekim 2024", dishes: ["Köfte", "Bulgur Pilavı", "Cacık", "Yeşillikler"] },
          { date: "3 Ekim 2024", dishes: ["Tavuklu Karnıbahar", "Patates Püresi", "Közlenmiş Domates"] },
        ],
      },
    ],
    aksam: [
      {
        title: "Akşam Menüsü (Nasa - Space)",
        subTitle: "Nasa - Space",
        week: "1. Hafta (1-7 Ekim)",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Fırın Somon", "Köfte", "Kuşkonmaz", "Kıvırcık Salata"] },
          { date: "2 Ekim 2024", dishes: ["Kumpir", "Sosis", "Biber Dolması", "Yogurtlu Sos"] },
          { date: "3 Ekim 2024", dishes: ["Pizza", "Çeşitli Aperatifler", "Beyaz Peynir", "Tatlı"] },
        ],
      },
    ],
  };

  // Aktif öğeyi değiştirme fonksiyonu
  const handleMealChange = (meal) => {
    setActiveMeal(meal);
  };

  return (
    <div className="bg-gradient-to-l from-blue-50 to-gray-100 min-h-screen">
      <ImageBanner 
        src="/50.png"
        title="Kurumsal"
        subTitle="Yemek Menüsü" 
        objectClass="object-top"
      />
      <div className="container mx-auto py-16 px-8 space-y-10">
        {/* Tab Menu */}
        <div className="border-b mb-10 pb-6">
          <nav className="flex justify-center space-x-6 text-gray-800 font-light">
            {Object.keys(menus).map((meal, index) => (
              <div
                key={index}
                onClick={() => handleMealChange(meal)}
                className={`px-6 py-4 cursor-pointer text-lg font-semibold  ${
                  activeMeal === meal 
                    ? ' border-b-4 border-gray-800'
                    : 'hover:text-gray-600 hover:border-b-4 border-gray-300'
                }`}
              >
                {menus[meal][0].title} {/* Menü başlığını kullanıyoruz */}
              </div>
            ))}
          </nav>
        </div>

        {/* Weekly Menu */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">{menus[activeMeal][0].subTitle} Menüsü</h1>

          {menus[activeMeal].map((week, weekIndex) => (
            <div key={weekIndex} className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-700 mb-6">{week.week}</h2>
              <table className="w-full table-auto border-separate space-y-4 rounded-lg shadow-lg bg-white">
                <thead>
                  <tr>
                    <th className="p-6 text-left text-gray-600 font-medium bg-gray-200 rounded-t-lg">Tarih</th>
                    <th className="p-6 text-left text-gray-600 font-medium bg-gray-200 rounded-t-lg">Menü</th>
                  </tr>
                </thead>
                <tbody>
                  {week.menu.map((day, dayIndex) => (
                    <tr key={dayIndex} className="border-t border-gray-200 bg-gray-100 ">
                      <td className="p-6 text-gray-600">{day.date}</td>
                      <td className="p-6 text-gray-600">
                        <ul className="list-disc list-inside text-sm">
                          {day.dishes.map((dish, dishIndex) => (
                            <li key={dishIndex} className="text-gray-700">{dish}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
