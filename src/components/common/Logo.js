"use client"

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="relative" style={{height:"4.4rem",width:"14rem"}}>
    <Image 
      src="/logos/header-logo.svg" 
      alt="Phone Top Navigation" 
      fill 
      className="object-contain"  
    />
  </div>
  
  )
}

export default Logo