"use client";
import Image from 'next/image';
import React from 'react';

const Section8 = () => {
  return (
    <div className='container mx-auto'>
        <div className=''>
        <div className="w-full relative  h-32">
        <Image src="/img/2-.jpg"  alt="Placeholder" fill className="object-cover" />
        </div>
       
       
        <div className="grid grid-cols-2">
        <div className="col-span-1 relative  h-32">
        <Image src="/img/2-.jpg"  alt="Placeholder" fill className="object-cover" />
        </div>
        <div className="col-span-1 relative  h-32">
        <Image  src="/img/2-.jpg"  alt="Placeholder" fill className="object-cover" />
        </div>
        </div>
 

        </div>
    </div>
  );
}

export default Section8;
