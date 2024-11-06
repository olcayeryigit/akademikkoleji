import React from 'react';
import Section9 from './section-9/Section9';
import Section10 from './section-10/Section10';

const InfoSection = () => {
  return (
    <div className='py-16 bg-[#FCF7F5]'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-10 lg:gap-6'>
        <div className='col-span-3 lg:col-span-2 lg:mt-3'>
          <Section10 />
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <Section9 />
        </div>
  
      </div>
    </div></div>
  );
};

export default InfoSection;
