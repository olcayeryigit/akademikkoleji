import React from 'react';

const VisionMission = () => {
  return (
    <div className="relative">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/vision.png"
          className="w-full h-full object-cover object-top opacity-20 z-10"
          alt="Vision and Mission Image"
        />
        {/* Three-stop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D16] via-[#080D16]/50 to-[#080D16] z-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto pt-40 pb-20 px-4 relative z-30">
        <h2 className="text-3xl font-bold text-center pt-24 mb-6 text-white">
          Vizyonumuz ve Misyonumuz
        </h2>
        <p className="text-lg text-justify mb-4 text-gray-100">
          Amacımız, her geçen gün globalleşen ve küreselleşen dünyada, tasarlayan, geliştiren, üreten ve teknolojiyi yaşama entegre edebilen karakter sahibi yeni nesiller inşa etmek için çalışıyoruz. Nitelikli kadromuz, maddi ve manevi olarak eğitimde tüm imkanlarını seferber ederek, öğrencilerimizi geleceğe hazırlamaktadır.
        </p>
        <p className="text-lg text-justify mb-4 text-gray-100">
          Bursa’dan dünyaya açılan bir eğitim kurumu olarak, yaktığımız bu eğitim meşalesi ile Türk eğitim sistemini uluslararası alanda zirveye taşımak en büyük vizyon ve misyonumuzdur. Öğrencilerimizi başarıya ulaştırmak ve onlara dünya çapında rekabet edebilecek beceriler kazandırmak, en öncelikli hedefimizdir.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
