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
import Section7 from './gallery/Gallery'
const HomePage = () => {
  return (
    <div className="">
      <div className='main' 
   >
<MainContent/>
<Spacer height='h-24'/>
<Section1/>
<Spacer height='h-24'/>       
      </div>
<Section2/>
<Spacer height='h-10'/>
<Section3/>
<Spacer height='h-24'/>
<Section4/>
<Spacer height='h-24'/>
<Section5/>
<Spacer height='h-24'/>
      <Section6/>
   <Section7/>
   <Spacer height='h-24'/>

    </div>
  )
}

export default HomePage