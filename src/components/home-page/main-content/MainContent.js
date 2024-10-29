"use client"
import Slider from '@/components/home-page/main-content/slider/Slider';
import React from 'react';
import PreRegistrationForm from './pre-registration-form/PreRegistrationForm;';

const MainContent = () => {
  return (
    <div className='mt-18 pt-40 pb-8 '>
      <div className='container mx-auto grid  lg:grid-cols-4'> {/* Create a grid with 1 column on small screens and 2 on medium and larger */}
        <div className='lg:col-span-3 flex justify-center'> {/* Center the Slider component */}
          <Slider />
        </div>
        <div className='lg:col-span-1 z-50 flex justify-center md:block mt-28 md:mt-0' > {/* Center the PreRegistrationForm component */}
          <PreRegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default MainContent; 