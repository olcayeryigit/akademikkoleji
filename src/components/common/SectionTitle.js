import React from 'react'

const SectionTitle = ({title,position,textColor}) => {
  return (
    <h1 className={`text-2xl md:text-5xl font-extrabold leading-tight ${position} ${textColor} mb-3`}>
            {title}</h1>  )
}

export default SectionTitle