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
import ExamCountdown from './counter/ExamCountdown'
import InfoSection from './info-section/InfoSection'
import Section11 from './section-11/Section11'
import Section12 from './section-12/Section12'
import Image from 'next/image'

const HomePage = () => {



  return (
    <div className="">
      <div className="relative main "
   >
{/* Arka Plan Resmi */}
<div 
        className="absolute inset-0 bg-[url('/images/main.jpg')] bg-cover bg-top bg-no-repeat  "
        // Resmin dosya yolu
      />
           <div className="absolute bottom-0 w-full ">
           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-0  h-0 border-l-[60px] border-r-[60px] border-b-[60px] border-l-transparent border-r-transparent z-50 " style={{borderBottomColor:"rgba(255,255,255,0.3)"}}>
           <div className='absolute left-1/2 transform -translate-x-1/2 mt-6 '>
           <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 8 8"><path fill="black" d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5z"/></svg>
           </div>
          
                   </div>

            </div> {/* Opaklık ayarı, siyah overlay 
  </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" /> {/* Opaklık ayarı, siyah overlay */}
<MainContent/>
  </div>

<Section1/>
<Spacer height='h-10'/>
<Section2/>
<Spacer height='h-12'/>
<Section3/>
<Spacer height='h-12'/>
<Section4/>
<Spacer height='h-20'/>
<Section5/>
<Section6/>
<Spacer height='h-12'/>
<Section7 />
<Spacer height='h-24'/>
<Section8/>
<Spacer height='h-16'/>
<InfoSection/>
<Section11/>
<ExamCountdown/>
<Spacer height='h-10'/>
<Section12/>
<Spacer height='h-10'/>

</div>
  )
}

export default HomePage

