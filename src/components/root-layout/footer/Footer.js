"use client"
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FooterMenu from './FooterMenu';
import Image from 'next/image';
import Partners from './Partners';
import SubscriptionSection from './SubscriptionSection';
import SocialMediaSection from './SocialMediaSection';
import ContactInfoSection from './ContactInfoSection';
import PolicyLinks from './PolicyLinks';

const socialMediaLinks = [
  {
    platform: "Facebook",
    icon: <FaFacebookF size={38} />,
    url: "https://www.facebook.com",
    label: "Bizi Facebook'ta takip edin"
  },
  {
    platform: "Instagram",
    icon: <FaInstagram size={38} />,
    url: "https://www.instagram.com",
    label: "Bizi Instagram'da takip edin"
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedinIn size={38} />,
    url: "https://www.linkedin.com",
    label: "Bizi LinkedIn'de takip edin"
  },
  {
    platform: "Twitter",
    icon: <FaTwitter size={38} />,
    url: "https://www.twitter.com",
    label: "Bizi Twitter'da takip edin"
  }
];

const subscriptionInfo = {
  header: "Bizden Haberiniz Olsun",
  description: "E-Posta Listemize Katılarak Akademik Koleji'nden Gelecek Güncel Haberleri Kaçırma",
  placeholder: "E-Posta adresiniz",
  submitButtonText: "Gönder",
  privacyAgreement: "Özel bildirim, güncelleme ve haberler hakkında tarafımla e-posta ve SMS ile iletişime geçilmesini istiyorum.",
  privacyPolicyLink: "Web Gizlilik ve Kişisel Verileri Koruma Kanunu İlkeleri"
};

const contactInfo = {
  header: "İletişim Numaramız",
  phone: "444 80 16",
  callToAction: "Hemen Ara!"
};

const policies = [
  { name: "Gizlilik ve Güvenlik Politikası", url: "/privacy-policy" },
  { name: "Mesafeli Satış Sözleşmesi", url: "/distance-sales-agreement" },
  { name: "Kişisel Veriler Politikası", url: "/personal-data-policy" },
  { name: "Şartlar ve Koşullar", url: "/terms-and-conditions" }
];

const Footer = () => {
  return (
    <div className="footer relative  text-white relative bg-[url('/images/main.jpg')] bg-cover bg-top bg-no-repeat ">
        <div className="absolute top-0 right-0 w-1/2 h-20 bg-white rounded-br-[130%] transform scale-x-[-1] z-40"></div>

    <div className="absolute top-0 left-0 w-1/2 h-20 bg-white rounded-br-[130%] z-40 "></div>



        <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-1/2 w-24 h-36 z-50'>
<Image src="/logos/main-1.svg" fill className='object-cover'/>
</div>


      {/* Background Image */}

      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080D16]/60 to-[#080D16]/100 z-30"></div>


  

      <div className="container mx-auto relative pt-28 z-50 px-4">
        {/* Footer Menü */}
        <FooterMenu />

        <div className="footer-content flex flex-col lg:flex-row justify-between gap-8 mt-10">

          <SubscriptionSection info={subscriptionInfo} />
          <SocialMediaSection links={socialMediaLinks} />
          <ContactInfoSection info={contactInfo} />
        </div>

        <PolicyLinks policies={policies} />

        <div className="text-center mt-2">
          <p className="text-sm">&copy; 2022 - {new Date().getFullYear()} Akademik Koleji Danışmanlık ve Eğitim Öğretim Hizmetleri</p>
        </div>

        <Partners />
      </div>

      <div className='relative flex justify-center pb-20'>
        <div className="absolute inset-0 bg-[#080D16] opacity-80 z-0 " />
        <div className='relative w-44 h-24 z-50'>
          <Image src="/logos/partners/1.gif" fill className="object-contain" />
        </div>
        <div className='absolute bottom-[60px] text-sm  text-white  text-center z-50'>Design & Development By <strong>The Fabrica</strong></div>
      </div>
    </div>
  );
};

export default Footer;
/**
 *     <div className="absolute top-0 left-0 w-1/2 h-20 bg-white rounded-bl-[100%] z-40 "></div>
    <div className="absolute top-0 right-0 w-1/2 h-20 bg-white rounded-bl-[100%] transform scale-x-[-1] z-40"></div>
 */