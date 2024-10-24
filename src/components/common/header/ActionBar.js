"use client";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// Sosyal medya ikonlarını ve linklerini tanımlayan bir dizi
const socialLinks = [
  { href: "https://twitter.com", icon: FaSquareXTwitter },
  { href: "https://facebook.com", icon: FaFacebook },
  { href: "https://instagram.com", icon: FaInstagram },
  { href: "https://youtube.com", icon: FaYoutube },
  { href: "https://linkedin.com", icon: FaLinkedin },
];

// Buton verilerini tanımlayan bir dizi
const buttons = [
  {
    label: "Veli Girişi",
    className:
      "bg-[#143256] text-white font-semibold py-2 px-4 shadow-md rounded-md transition duration-300 hover:bg-[#1e4a6b] focus:outline-none focus:ring-2 focus:ring-[#1e4a6b] focus:ring-opacity-50",
  },
  {
    label: "Öğrenci Girişi",
    className:
      "bg-[#143256] text-white font-semibold py-2 px-4 shadow-md rounded-md transition duration-300 hover:bg-[#1e4a6b] focus:outline-none focus:ring-2 focus:ring-[#1e4a6b] focus:ring-opacity-50",
  },
];

const ActionBar = () => {
  return (
    <div className="bg-[#F4F1ED]">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        {/* Sol Taraf - Sosyal Medya İkonları */}
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
              <Icon
                size={24}
                className="text-[#143256] transition duration-300"
              />
            </a>
          ))}
        </div>

        {/* Sağ Taraf - Buton Grubu */}
        <div className="flex gap-3 items-center">
          {buttons.map(({ label, className }) => (
            <button key={label} className={`${className}`}>
              {label}
            </button>
          ))}

          <div className="flex items-center text-lg gap-2 text-[#143256] font-bold ms-5">
            <FaHeadphonesAlt size={20} />
            444 80 16
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;