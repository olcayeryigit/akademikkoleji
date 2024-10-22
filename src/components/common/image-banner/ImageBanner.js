import React from 'react';
import Image from 'next/image';

const ImageBanner = ({ src , h }) => {
  return (
    <div className={`relative image-banner h-${h} `}>
      <Image 
        src={src} 
        alt="Banner Image" 
      fill 
        className="image-banner-img object-contain"
      />
    </div>
  );
};

export default ImageBanner;