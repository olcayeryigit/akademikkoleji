"use client";
import React from 'react';
import VisionMission from './vision-mission/VisionMission';
import About from './about/About';
import { usePathname } from 'next/navigation';
import WhyUs from './why-us/WhyUs';
import BrandPartners from './brand-partners/BrandPartners';
import CorpotateAgreements from './corporate-agreements/CorporateAgreements';
import News from './news-announcement/News';
import Announcements from './news-announcement/Announcements';
import HumanResources from './human-resources/HumanResources';
import ManagementStaff from './human-resources/ManagementStaff';
import TeachingStaff from './human-resources/TeachingStaff';
import MenuComponent from './other/MenuComponent';

const Institutional = () => {
    const pathname = usePathname();
    const currentPathname = pathname.split("/").pop().toLowerCase();
  return (
    <div>
      {currentPathname === 'hakkimizda' && <About />}
      {currentPathname === 'vizyon-ve-misyon' && <VisionMission />}
      {currentPathname === 'neden-akademik-koleji' && <WhyUs />}
      {currentPathname === 'marka-ortaklari' && <BrandPartners />}
      {currentPathname === 'kurumsal-anlasmalar' && <CorpotateAgreements />}
      {currentPathname === 'haberler' && <News />}
      {currentPathname === 'duyurular' && <Announcements />}
      {currentPathname === 'insan-kaynaklari' && <HumanResources />}
      {currentPathname === 'yonetim-kadrosu' && <ManagementStaff />}
      {currentPathname === 'egitim-kadrosu' && <TeachingStaff />}
      {currentPathname === 'yemek-menusu' && <MenuComponent />}

      {/* Diğer path'lere göre de componentleri ekleyebilirsin */}
    </div>
  );
};

export default Institutional;
