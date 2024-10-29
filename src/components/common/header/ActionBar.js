import Link from "next/link";
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


const ActionBar = () => {
  return (
    <div className="hidden md:block bg-gray-800">
      <div className="container   mx-auto flex  justify-between items-center py-4 text-white ">
        {/* Sol Taraf - Sosyal Medya İkonları */}
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
              <Icon
                size={20}
                className=" text-white transition duration-300 transform  hover:scale-125 "
              />
            </a>
          ))}
        </div>

        {/* Sağ Taraf - Link Grubu */}
        <div className="flex gap-8 items-center font-semibold">
      
            <div className="relative group ">
               <Link href="#" className="relative z-10 ">
               VELİ GİRİŞİ
              </Link>
              <span className="block  h-0.5 bg-white absolute -left-1 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left " style={{width:"5.8rem"}}></span>
            </div>
            <div className="relative group ">
               <Link href="#" className="relative z-10">
              ÖĞRENCİ GİRİŞİ
              </Link>
              <span className="block  h-0.5  bg-white absolute -left-0.5 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left " style={{width:"7.95rem"}}></span>
            </div>
         

          <div className="flex items-center text-lg gap-2 font-bold ms-5 text-3xl transition-transform duration-1000 transform hover:scale-110">
            <FaHeadphonesAlt size={20} />
            444 80 16
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
