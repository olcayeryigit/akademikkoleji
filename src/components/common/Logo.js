"use client"

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="relative" style={{height:"4.5rem",width:"20rem"}}>
    <Image 
      src="/img/common/akademik-koleji-ozel-okulu.svg" 
      alt="Phone Top Navigation" 
      fill 
      className="object-cover"  
    />
  </div>
  
  )
}

export default Logo