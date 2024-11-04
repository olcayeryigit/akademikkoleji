import React from 'react';
import { FaBook } from 'react-icons/fa';

const footerLinks = [
  {
    name: "Eğitimlerimiz",
    content: [
      {
        name: "Anaokulu Eğitimi",
        links: [
          { name: "Fiziksel Gelişim Eğitimi", href: "#" },
          { name: "Duygusal Gelişim Eğitimi", href: "#" },
          { name: "Zeka Gelişimi Eğitimi", href: "#" },
          { name: "Yabancı Diller Eğitimi", href: "#" },
        ],
      },
      {
        name: "İlkokul Eğitimi",
        links: [
          { name: "Etkileşimli Öğrenme Eğitimi", href: "#" },
        ],
      },
      {
        name: "Ortaokul Eğitimi",
        links: [
          { name: "Öğrenci Merkezli Eğitim", href: "#" },
          { name: "Psikolojik Danışma Eğitimi", href: "#" },
          { name: "STEM Eğitimi", href: "#" },
          { name: "Dijital Vatandaşlık Eğitimi", href: "#" },
          { name: "Okuma Becerileri Eğitimi", href: "#" },
        ],
      },
      {
        name: "Lise Eğitimi",
        links: [
          { name: "Kişilik Gelişimi Eğitimi", href: "#" },
          { name: "Bilişimsel Düşünme Eğitimi", href: "#" },
          { name: "Multilingual Eğitim", href: "#" },
          { name: "Akademik Eğitim", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Öğrenci Kulüpleri",
    icon: <FaBook />,
    content: [
      {
        name: "Anaokulu Kulüpleri",
        links: [
          { name: "Drama Kulübü", href: "#" },
          { name: "Robotik Kodlama Kulübü", href: "#" },
        ],
      },
      {
        name: "Ortaokul Kulüpleri",
        links: [
          { name: "Kültür ve Edebiyat Kulübü", href: "#" },
          { name: "Sivil Savunma Kulübü", href: "#" },
          { name: "Gezi Tanıtım ve Turizm Kulübü", href: "#" },
          { name: "Satranç Kulübü", href: "#" },
          { name: "Bilim Fen ve Teknoloji Kulübü", href: "#" },
          { name: "Görsel Sanatlar Kulübü", href: "#" },
          { name: "Müzik Kulübü", href: "#" },
        ],
      },
      {
        name: "Lise Kulüpleri",
        links: [
          { name: "Kütüphanecilik Kulübü", href: "#" },
          { name: "Çevre Koruma Kulübü", href: "#" },
          { name: "Kültür ve Edebiyat Kulübü", href: "#" },
          { name: "Sivil Savunma Kulübü", href: "#" },
          { name: "Gezi Tanıtım ve Turizm Kulübü", href: "#" },
          { name: "Satranç Kulübü", href: "#" },
          { name: "Bilim Fen ve Teknoloji Kulübü", href: "#" },
          { name: "Görsel Sanatlar Kulübü", href: "#" },
        ],
      },
      {
        name: "Dil Okulu Kulüpleri",
        links: [
          { name: "İngilizce Drama Kulübü", href: "#" },
          { name: "İngilizce Karaoke Kulübü", href: "#" },
          { name: "İngilizce Scrabble Kulübü", href: "#" },
          { name: "Almanca Kulübü", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Kurumsal",
    content: [
      {
        links: [
          { name: "Hakkımızda", href: "#" },
          { name: "Vizyon & Misyon", href: "#" },
          { name: "Neden Biz?", href: "#" },
          { name: "Kurumsal Anlaşmalar", href: "#" },
          { name: "Marka Ortaklarımız", href: "#" },
          { name: "Haberler", href: "#" },
          { name: "Duyurular", href: "#" },
          { name: "İnsan Kaynakları", href: "#" },
          { name: "Yönetim Kadromuz", href: "#" },
          { name: "Eğitim Kadromuz", href: "#" },
          { name: "Yemek Menüsü", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Kampüs",
    content: [
      {
        links: [
          { name: "Anaokulu Kids Kampüsü", href: "#" },
          { name: "İlk ve Ortaokul - Nasa Kampüsü", href: "#" },
          { name: "Anadolu Lisesi - Space Kampüsü", href: "#" },
        ],
      },
    ],
  },
];

const FooterMenu = () => {
  return (
    <div className="p-8 text-gray-200">
      <div className="footer-links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {footerLinks.map((link, index) => (
          <div key={index} className="footer-group">
            <span className="footer-group-title text-xl font-semibold mb-4">{link.name}</span>
            {link.content && (
              <div className="footer-group-links">
                {link.content.map((item, idx) => (
                  <div key={idx} className="footer-subgroup mb-2">
                    <span className="footer-subgroup-title text-sm font-medium underline mb-2">{item.name}</span>
                    <ul className="footer-subgroup-list text-sm">
                      {item.links && item.links.map((subItem, subIdx) => (
                        <li key={subIdx} className="footer-subgroup-item mb-1 hover:text-green-300">
                          <a href={subItem.href}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
