// components/LoadingSpinner.js
"use client";
import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="relative w-32 h-40 overflow-hidden flex items-center justify-center">
      <Image fill className="object-cover" src="/logos/loading-1.gif" alt="Logo" />
    
    </div>
  );
}


/*
// components/LoadingSpinner.js
"use client";
import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="relative w-44 h-44 overflow-hidden flex items-center justify-center">
      <Image fill className="object-contain" src="/logos/main-2.png" alt="Logo" />
      
    
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className="absolute h-full w-full bg-gradient-to-r from-transparent to-white opacity-30 animate-shine"
          style={{
            width: '300%',
            height: '300%',
            left: '-100%',
            top: '-100%',
          }}
        />
      </div>
    </div>
  );
}
 
 */