import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname kullanılıyor
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
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

const ActionBar = () => {
  const pathname = usePathname(); // usePathname ile geçerli yolu alıyoruz
  const isHomePage = pathname === '/'; // Ana sayfa olup olmadığını kontrol ediyoruz

  return (
    <div className={`hidden md:block bg-[#080D16] ${isHomePage ? 'bg-opacity-80' : 'bg-opacity-0'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 text-white">
        {/* Sol Taraf - Sosyal Medya İkonları */}
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
              <Icon size={20} className="text-white transition duration-300 transform hover:scale-125" />
            </a>
          ))}
        </div>

        {/* Sağ Taraf - Link Grubu */}
        <div className="flex gap-8 items-center font-semibold">
          <div className="relative group">
            <Link href="#" className="relative z-10">
              VELİ GİRİŞİ
            </Link>
            <span
              className="block h-0.5 bg-white absolute -left-1 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
              style={{ width: "5.8rem" }}
            ></span>
          </div>
          <div className="relative group">
            <Link href="#" className="relative z-10">
              ÖĞRENCİ GİRİŞİ
            </Link>
            <span
              className="block h-0.5 rounded-full bg-white absolute -left-0.5 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ width: "7.95rem" }}
            ></span>
          </div>

          <div className="flex items-center text-lg gap-2 font-bold ms-5 text-3xl transition-transform duration-1000 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <g fill="none" stroke="#4ADE80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path
                  fill="#4ADE80"
                  fillOpacity="0"
                  strokeDasharray="64"
                  strokeDashoffset="64"
                  d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                  <animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.3s" values="0;0.3" />
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0" />
                  <animateTransform
                    id="lineMdPhoneCallTwotoneLoop0"
                    fill="freeze"
                    attributeName="transform"
                    begin="1.2s;lineMdPhoneCallTwotoneLoop0.begin+5.4s"
                    dur="1s"
                    type="rotate"
                    values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                  />
                </path>
                <path
                  strokeDasharray="4"
                  strokeDashoffset="4"
                  d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"
                >
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0s" dur="5.4s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" />
                </path>
                <path
                  strokeDasharray="6"
                  strokeDashoffset="6"
                  d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"
                >
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0.4s" dur="5.4s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
                </path>
              </g>
            </svg>
            444 80 16
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
