"use client";
import React from "react";

const News = () => {

    const haberler = [
        {            

            "baslik": "Basketbol Efsanesi Barış Güney'den Akademik International Kampüsüne Anlamlı Ziyaret",
            "tarih": "23/09/2024",
            "aciklama": "Eski profesyonel basketbolcu ve Bursa Uludağ Basketbol Baş Antrenörü Barış Güney, Akademik Koleji International School Space Kampüsü'nü ziyaret ederek, okulun spor çalışmaları hakkında bilgi aldı.",
            "resim": "/images/main.jpg"
        },
        {
            "baslik": "Bursa Özel Okul Bursluluk Sınavları",
            "tarih": "10/09/2024",
            "aciklama": "Bursa Bursluluk Sınavı 2025, 1-11. sınıflar için 4-5 Ocak 2025 tarihlerinde Bursa Nilüfer Akademik Koleji'nde yapılacaktır.",
            "resim": "/images/main.jpg"
        },
        {
            "baslik": "Akademik Koleji International School Nasa Campus Yeni Eğitim Yılına Başlıyor",
            "tarih": "10/09/2024",
            "aciklama": "Akademik Koleji International School Nasa Campus, yeni eğitim öğretim dönemine coşkuyla kapılarını açtı.",
            "resim": "/images/main.jpg"
        },
        {
            "baslik": "Akademik Koleji International School Space Campus 2024-2025 Eğitim Öğretim Yılına Başladı",
            "tarih": "10/09/2024",
            "aciklama": "Akademik Koleji International School Space Campus, 2024-2025 eğitim öğretim yılına heyecanla kapılarını açtı!",
            "resim": "/images/main.jpg"
        },
        {
            "baslik": "Psiko-Sosyal Danışmanlık Programı!",
            "tarih": "27/08/2024",
            "aciklama": "Akademik Koleji her öğrencinin akademik ve psiko/sosyal ihtiyaçlarını karşılamak üzere kapsamlı bir psikolojik danışmanlık programı sunar.",
            "resim": "/images/main.jpg"
        },
        {
            "baslik": "Akademik Koleji International School Anaokulu Oryantasyon Programı",
            "tarih": "22/08/2024",
            "aciklama": "Akademik Koleji International School Anaokulu Oryantasyon Programı ile öğrenciler yeni döneme hazır!",
            "resim": "/images/main.jpg"
        }
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Haberler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {haberler.map((haber, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={haber.resim}
                            alt={`${haber.baslik} resmi`}
                            className="h-40 w-full object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                            {haber.baslik}
                        </h3>
                        <p className="text-sm text-gray-600">{haber.tarih}</p>
                        <p className="text-gray-700 mt-4">{haber.aciklama}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
