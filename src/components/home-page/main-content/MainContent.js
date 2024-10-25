import Slider from '@/components/home-page/main-content/slider/Slider'
import React from 'react'
import PreRegistrationForm from './pre-registration-form/PreRegistrationForm;'

const MainContent = () => {
  return (
    <div className=' mt-18 pt-56 pb-8' style={{





    }}>
      <div className='container mx-auto flex justify-between'>

     
      <div>
<Slider/>        
      </div>
<div>
<PreRegistrationForm/>  
</div>

 </div>
    </div>
  )
}

export default MainContent