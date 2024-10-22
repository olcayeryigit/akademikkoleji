"use client";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaHeadphonesAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa"; // Telefon ikonu

const ActionBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full bg-blue-900 py-1" style={{ backgroundColor: "#084576" }}>
        <div className="container mx-auto flex justify-between items-center px-5 py-2">
          {/* Sol Taraf - Sosyal Medya İkonları */}
          <div className="flex gap-4 items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                size={24}
                className="text-white"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={24}
                className="text-white"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="text-white"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={24}
                className="text-white"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="text-white"
              />
            </a>

            {/* Müşteri Hizmetleri Telefon Numarası */}
            
          </div>

          {/* Sağ Taraf - Buton Grubu */}
          <div className="flex gap-3">
            <button className="bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-400 transition duration-300">
              Veli Girişi
            </button>
            <button className="bg-green-600 text-sm text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-green-400 transition duration-300">
              Öğrenci Girişi
            </button>
            <button className="bg-orange-600 text-sm text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-orange-400 transition duration-300">
              Ön Bilgi Formu
            </button>

              <div className="text-white ms-3 items-center flex font-semibold text-xl gap-2"><FaHeadphonesAlt size={20} className="text-xl" /> 444 80 16 </div>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;