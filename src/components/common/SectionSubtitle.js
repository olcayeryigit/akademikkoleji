import React from 'react'

const SectionSubtitle = ({title,position,textColor}) => {
  return (
    <h2 className={`text-xl md:text-3xl font-bold ${position} ${textColor} mb-3`}>
            {title}</h2>  )
}

export default SectionSubtitle