"use client"

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="relative" style={{height:"4.3rem",width:"19rem"}}>
    <Image 
      src="/logos/main.svg" 
      alt="Phone Top Navigation" 
      fill 
      className="object-cover"  
    />
  </div>
  
  )
}

export default Logo