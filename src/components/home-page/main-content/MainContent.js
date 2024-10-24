import Slider from '@/components/home-page/main-content/slider/Slider'
import React from 'react'
import PreRegistrationForm from './pre-registration-form/PreRegistrationForm;'

const MainContent = () => {
  return (
    <div className='w-full flex container mx-auto'>
<Slider/>
<PreRegistrationForm/>

    </div>
  )
}

export default MainContent