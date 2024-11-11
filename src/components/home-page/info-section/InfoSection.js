import React from 'react';
import School from './school/School';
import Students from './students/Students';


const InfoSection = () => {
  return (
    <div className='py-16 bg-[#FCF7F5]'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-10 lg:gap-6'>
        <div className='col-span-3 lg:col-span-2 lg:mt-3'>
          <School />
        </div>
        <div className='col-span-3 lg:col-span-1 px-2 md:px-0'>
          <Students />
        </div>
  
      </div>
    </div></div>
  );
};

export default InfoSection;
