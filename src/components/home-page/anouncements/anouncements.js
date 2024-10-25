import React from "react";

const announcements = [
  {
    title: "Yeni Eğitim Programı Başlıyor",
    date: "Ekim 22, 2024",
    description: "Yeni eğitim programımız Kasım ayında başlıyor. Detaylar için web sitemizi ziyaret edin.",
    bgColor: "bg-blue-50", // Farklı arka plan rengi
    borderColor: "border-blue-600", // Farklı kenar rengi
  },
  {
    title: "Okul Spor Etkinliği",
    date: "Kasım 1, 2024",
    description: "Bu hafta sonu düzenlenecek olan okul spor etkinliğimize herkesi bekliyoruz.",
    bgColor: "bg-green-50",
    borderColor: "border-green-600",
  },
  {
    title: "Mezuniyet Töreni",
    date: "Aralık 15, 2024",
    description: "Mezuniyet töreni hazırlıkları başladı. Ayrıntılı bilgi yakında duyurulacaktır.",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-600",
  },
  {
    title: "Kariyer Günü Etkinliği",
    date: "Kasım 10, 2024",
    description: "Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak. Katılım herkese açıktır.",
    bgColor: "bg-red-50",
    borderColor: "border-red-600",
  },
  {
    title: "Yazılım Atölyesi",
    date: "Aralık 5, 2024",
    description: "Yazılım alanında uzmanların yer alacağı atölye çalışmalarımıza kayıtlar başladı.",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-600",
  },
  {
    title: "STEM Proje Yarışması",
    date: "Ocak 20, 2025",
    description: "Öğrencilerimizin STEM projelerini sergileyeceği yarışmamıza herkesi bekliyoruz.",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-600",
  },
  {
    title: "Aile Bilgilendirme Semineri",
    date: "Kasım 18, 2024",
    description: "Öğrenci velilerimiz için düzenlenecek seminerde eğitim programlarımız tanıtılacaktır.",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-600",
  },
  {
    title: "Sağlıklı Beslenme Semineri",
    date: "Aralık 2, 2024",
    description: "Sağlıklı beslenmenin önemi hakkında uzman diyetisyenlerimizden bilgi alabilirsiniz.",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-600",
  },
  {
    title: "Robotik Kodlama Yarışması",
    date: "Ocak 15, 2025",
    description: "Öğrencilerimiz arasındaki robotik kodlama yarışmamızda ödüller dağıtılacak.",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-600",
  },
];

const Announcements = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Duyurular
        </h2>
        <div className="">
          {/* Duyurular Bölümü */}
          <div className="max-h-[400px] overflow-y-auto touch-auto scrollbar-hidden">
            <div className="gap-6">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className={`${announcement.bgColor} shadow-lg p-6 border-l-4 ${announcement.borderColor}`}
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
        </div>
      </div>
    </div>
  );
};

export default Announcements;
