"use client"
import React from 'react'
import Kids from './Kids';
import Nasa from './Nasa';
import Space from './Space';
import { usePathname } from 'next/navigation';

const Campuses = () => {
    const pathname = usePathname();
    const currentPathname = pathname.split("/").pop().toLowerCase();
  return (
    <div className=''>

{currentPathname === 'kids-anaokulu' && <Kids />}
      {currentPathname === 'nasa-ilk-ve-ortaokul' && <Nasa />}
      {currentPathname === 'space-lise' && <Space/>}

    </div>
  )
}

export default Campuses