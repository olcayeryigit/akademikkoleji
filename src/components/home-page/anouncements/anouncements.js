import React from "react";

const announcements = [
  {
    title: "Yeni Eğitim Programı Başlıyor",
    date: "Ekim 22, 2024",
    description: "Yeni eğitim programımız Kasım ayında başlıyor. Detaylar için web sitemizi ziyaret edin.",
  },
  {
    title: "Okul Spor Etkinliği",
    date: "Kasım 1, 2024",
    description: "Bu hafta sonu düzenlenecek olan okul spor etkinliğimize herkesi bekliyoruz.",
  },
  {
    title: "Mezuniyet Töreni",
    date: "Aralık 15, 2024",
    description: "Mezuniyet töreni hazırlıkları başladı. Ayrıntılı bilgi yakında duyurulacaktır.",
  },
  {
    title: "Kariyer Günü Etkinliği",
    date: "Kasım 10, 2024",
    description: "Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak. Katılım herkese açıktır.",
  },
  {
    title: "Yazılım Atölyesi",
    date: "Aralık 5, 2024",
    description: "Yazılım alanında uzmanların yer alacağı atölye çalışmalarımıza kayıtlar başladı.",
  },
  {
    title: "STEM Proje Yarışması",
    date: "Ocak 20, 2025",
    description: "Öğrencilerimizin STEM projelerini sergileyeceği yarışmamıza herkesi bekliyoruz.",
  },
  {
    title: "Aile Bilgilendirme Semineri",
    date: "Kasım 18, 2024",
    description: "Öğrenci velilerimiz için düzenlenecek seminerde eğitim programlarımız tanıtılacaktır.",
  },
  {
    title: "Sağlıklı Beslenme Semineri",
    date: "Aralık 2, 2024",
    description: "Sağlıklı beslenmenin önemi hakkında uzman diyetisyenlerimizden bilgi alabilirsiniz.",
  },
  {
    title: "Robotik Kodlama Yarışması",
    date: "Ocak 15, 2025",
    description: "Öğrencilerimiz arasındaki robotik kodlama yarışmamızda ödüller dağıtılacak.",
  },
];

const Announcements = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Duyurular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Duyurular Bölümü */}
          <div className="md:col-span-2 max-h-[400px] overflow-y-auto touch-auto scrollbar-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 border-l-4 border-blue-600"
                >
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{announcement.date}</p>
                  <p className="text-gray-700">{announcement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf: Önemli Günler */}
          <div className="bg-white shadow-lg rounded-lg p-6 hidden md:block">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Önemli Günler
            </h3>
            <p className="text-gray-500">Önemli günler burada listelenecek.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;