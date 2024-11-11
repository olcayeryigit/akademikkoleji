import ImageBanner from '@/components/common/image-banner/ImageBanner';
import React, { useState } from 'react';

const MenuComponent = () => {
  const [activeMeal, setActiveMeal] = useState('kahvaltı'); // Varsayılan olarak Kahvaltı

  const menus = {
    kahvaltı: [
      {
        week: "1. Hafta (1-7 Ekim)",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Haşlanmış Yumurta", "Karışık Zeytin", "Salatalık", "Tahin Helva", "Meyve Çayı/Bitki Çayı"] },
          { date: "2 Ekim 2024", dishes: ["Kaşarlı Ekmek", "Peynir", "Domates", "Reçel", "Meyve Çayı/Bitki Çayı"] },
          { date: "3 Ekim 2024", dishes: ["Sıcak Çikolata", "Poğaça", "Meyve"] },
        ],
      },
      {
        week: "2. Hafta (8-14 Ekim)",
        menu: [
          { date: "8 Ekim 2024", dishes: ["Zeytin, Beyaz Peynir, Domates, Salatalık", "Sıcak Çikolata", "Kuruyemiş"] },
          { date: "9 Ekim 2024", dishes: ["Menemen", "Taze Ekmek", "Taze Meyve"] },
        ],
      },
    ],
    ogle: [
      {
        week: "1. Hafta",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Ezogelin Çorba", "Tavuklu Sheperd's Pie", "Makarna", "İçecek"] },
          { date: "2 Ekim 2024", dishes: ["Tavuk Suyu Çorba", "Kuru Fasülye", "Bulgur Pilavı", "Cacık"] },
        ],
      },
      {
        week: "2. Hafta",
        menu: [
          { date: "8 Ekim 2024", dishes: ["Köfte, Pilav, Salata"] },
          { date: "9 Ekim 2024", dishes: ["Sushi, Çorba"] },
        ],
      },
    ],
    aksam: [
      {
        week: "1. Hafta",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Pizza", "Salata", "Tatlı"] },
          { date: "2 Ekim 2024", dishes: ["Tavuk, Sebze Sote"] },
        ],
      },
      {
        week: "2. Hafta",
        menu: [
          { date: "8 Ekim 2024", dishes: ["Pasta", "Kola"] },
          { date: "9 Ekim 2024", dishes: ["Steak, Patates Kızartması"] },
        ],
      },
    ],
  };

  const handleMealChange = (meal) => {
    setActiveMeal(meal);
  };

  return (
    <div className="">
           <ImageBanner 
  src="/50.png"
  title="Kurumsal"
  subTitle="Yemek Menüsü" 
  object="object-center"
/>
      {/* Tab Menüsü */}
      <div className="border-b">
        <nav className="flex justify-center">
          {Object.keys(menus).map((meal, index) => (
            <div
              key={index}
              onClick={() => handleMealChange(meal)}
              className={`px-6 py-2 cursor-pointer text-lg font-medium ${activeMeal === meal ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              {meal.charAt(0).toUpperCase() + meal.slice(1)} {/* İlk harfi büyük yap */}
            </div>
          ))}
        </nav>
      </div>

      {/* Haftalık Menü Başlıkları */}
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">{activeMeal.charAt(0).toUpperCase() + activeMeal.slice(1)} Menüsü</h1>

        {menus[activeMeal].map((week, weekIndex) => (
          <div key={weekIndex} className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{week.week}</h2>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Tarih</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Menü</th>
                </tr>
              </thead>
              <tbody>
                {week.menu.map((day, dayIndex) => (
                  <tr key={dayIndex} className={dayIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 p-2">{day.date}</td>
                    <td className="border border-gray-300 p-2">
                      <ul className="list-disc list-inside">
                        {day.dishes.map((dish, dishIndex) => (
                          <li key={dishIndex}>{dish}</li>
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
  );
};

export default MenuComponent;
