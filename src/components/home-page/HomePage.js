"use client"
import React from 'react'
import MainContent from './main-content/MainContent'
import Section1 from './section-1/Section1'
import Section2 from './section-2/Section2'
import Spacer from '../common/spacer/Spacer'
import Section3 from './section-3/Section3'
import "./home-page.scss"
import ExamCountdown from './counter/ExamCountdown'
import InfoSection from './info-section/InfoSection'
import Clubs from './clubs/Clubs'
import ForeignLanguage from './foreign-language/ForeignLanguage'
import Announcements from './announcements/Announcements'
import Gallery from './gallery/Gallery'
import News from './news/News'
import Reviews from './reviews/Reviews'
import Accreditation from './accreditation/Accreditation'
import Image from 'next/image'
import { Link } from 'react-scroll'

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
           <Link className='absolute left-1/2 transform -translate-x-1/2 mt-6 cursor-pointer'
            to="section-1"           
            smooth={true}              
            duration={500}              
            offset={-70}    
           >
           <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 8 8"><path fill="black" d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5z"/></svg>
           </Link>
          
                   </div>

            </div> 
        
      {/* Overlay */}
   <div className="absolute inset-0 bg-black opacity-50" /> 

   { /*  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800  opacity-80"></div>
*/}
<MainContent/>
  </div>
  
  <div id="section-1">
<Section1/>
  </div>

<Spacer height='h-10'/>
<Section2/>
<Spacer height='h-12'/>
<Section3/>
<Clubs/>
<Spacer height='h-20'/>
<ForeignLanguage/>
<Announcements/>
<div className="relative">
<img src="/other/3.png" className="absolute w-full h-full object-no-repeat object-cover object-center opacity-50" alt="Your Image"/>
<Gallery/>
<News/>
</div>
<InfoSection/>
<Accreditation/>
<ExamCountdown/>
<Spacer height='h-10'/>
<Reviews/>
<Spacer height='h-10'/>

</div>
  )
}

export default HomePage



/**
 * <div className='relative h-64 w-64'>
  <Image src="/kolej-gif.gif" fill className='object-cover'/>
</div>
 */