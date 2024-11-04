import React from 'react';
import Image from 'next/image';

const ImageBanner = ({ src, title, iconSrc}) => {
  return (
    <div className={`relative image-banner py-10 flex  w-full bg-gray-800 text-white `}>
      <Image 
        src={src} 
        alt="Banner Image" 
        fill 
        className=" image-banner-img object-cover" // object-cover ile resmi tam olarak kapla
      />
      <div className="container mx-auto pt-40  items-center z-50 gap-16">
               {title && <h1 className="text-4xl font-bold text-start ">{title}</h1>}
 {iconSrc && (
          <div className="absolute bottom-0 right-20 ">
            <Image src={iconSrc} alt="Icon Image " width={130} height={130} className='' /> {/* İkon boyutunu ayarlayabilirsiniz */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBanner;
