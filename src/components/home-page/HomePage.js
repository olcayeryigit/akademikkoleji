"use client"
import React from 'react'
import MainContent from './main-content/MainContent'
import Section1 from './section-1/Section1'
import Section2 from './section-2/Section2'
import Spacer from '../common/spacer/Spacer'
import Section3 from './section-3/Section3'
import Section4 from './section-4/Section4'
import Section5 from './section-5/Section5'
import "./home-page.scss"
import Section6 from './section-6/section6'
import Section7 from './section-7/Section7'
import Section8 from './section-8/Section8'
import Section9 from './section-9/Section9'
const HomePage = () => {
  return (
    <div className="">
      <div className="relative main bg-gradient-to-br from-[#143256] to-[#355462]"
   >
{/* Arka Plan Resmi */}
<div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: 'url("/img/2-.jpg")' }} // Resmin dosya yolu
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Opaklık ayarı, siyah overlay */}
<MainContent/>
  </div>
  <Spacer height='h-10'/>
<Section1/>
<Spacer height='h-14'/>
<Section2/>
<Spacer height='h-8'/>
<Section3/>
<Spacer height='h-20'/>
<Section4/>
<Spacer height='h-24'/>
<Section5/>
<Section6/>
<Spacer height='h-4'/>
<Section7 />
<Spacer height='h-16'/>
<Section8/>
<Spacer height='h-16'/>

<Section9/>
<Spacer height='h-16'/>

</div>
  )
}

export default HomePage