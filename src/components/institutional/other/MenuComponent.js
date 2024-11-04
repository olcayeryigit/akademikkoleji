import React, { useState } from 'react';

const MenuComponent = () => {
  const [activeMeal, setActiveMeal] = useState('kahvaltı'); // Varsayılan olarak Kahvaltı

  const menus = {
    kahvaltı: [
      {
        week: "1. Hafta",
        menu: [
          { date: "1 Ekim 2024", dishes: ["Haşlanmış Yumurta", "Karışık Zeytin", "Salatalık", "Tahin Helva", "Meyve Çayı/Bitki Çayı"] },
          { date: "2 Ekim 2024", dishes: ["Kaşarlı Ekmek", "Peynir", "Domates", "Reçel", "Meyve Çayı/Bitki Çayı"] },
          { date: "3 Ekim 2024", dishes: ["Sıcak Çikolata", "Poğaça", "Meyve"] },
        ],
      },
      {
        week: "2. Hafta",
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
    <div className="p-5">
      {/* Butonlar en üstte yer alacak */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Object.keys(menus).map((meal, index) => (
          <button
            key={index}
            onClick={() => handleMealChange(meal)}
            className={`w-full px-4 py-2 text-white rounded ${activeMeal === meal ? 'bg-blue-600 font-bold' : 'bg-blue-500 hover:bg-blue-400'}`}
          >
            {meal.charAt(0).toUpperCase() + meal.slice(1)} {/* İlk harfi büyük yap */}
          </button>
        ))}
      </div>

      <h1 className="text-xl font-bold mb-4">{activeMeal.charAt(0).toUpperCase() + activeMeal.slice(1)} Menüsü</h1>
      
      {/* Tablo yapısı */}
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left bg-gray-100">Hafta</th>
            <th className="border border-gray-300 p-2 text-left bg-gray-100">Tarih</th>
            <th className="border border-gray-300 p-2 text-left bg-gray-100">Menü</th>
          </tr>
        </thead>
        <tbody>
          {menus[activeMeal].map((week, index) => (
            week.menu.map((day, idx) => (
              <tr key={`${index}-${idx}`} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                {idx === 0 && <td rowSpan={week.menu.length} className="border border-gray-300 p-2">{week.week}</td>}
                <td className="border border-gray-300 p-2">{day.date}</td>
                <td className="border border-gray-300 p-2">
                  <ul className="list-disc list-inside">
                    {day.dishes.map((dish, dIndex) => (
                      <li key={dIndex}>{dish}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuComponent;
