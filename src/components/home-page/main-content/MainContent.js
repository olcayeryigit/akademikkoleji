"use client"
import Slider from '@/components/home-page/main-content/slider/Slider';
import React from 'react';
import PreRegistrationForm from './pre-registration-form/PreRegistrationForm;';


const MainContent = () => {
 
  return (
    <div className='pt-32 pb-8 '>
      <div className='container mx-auto grid  xl:grid-cols-6 '> {/* Create a grid with 1 column on small screens and 2 on medium and larger */}
        <div className='xl:col-span-4 flex justify-center'> {/* Center the Slider component */}
          <Slider />
        </div>
        <div className='mt-14 xl:col-span-2 z-50 flex justify-center xl:block md:mt-28 xl:mt-0 ' > {/* Center the PreRegistrationForm component */}
          <PreRegistrationForm />

        </div>
      </div>
     
    </div>
  );
}

export default MainContent; 