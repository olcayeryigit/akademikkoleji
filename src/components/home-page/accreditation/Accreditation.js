import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';

const Accreditation = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="py-16 bg-[#FCF7F5] p-4 md:px-0">
      <div className="container mx-auto  static xl:relative">
        
        <div className="static xl:relative  rounded-3xl shadow-2xl bg-gradient-to-l from-gray-300  to-[#87ACBD] w-full xl:w-2/3">
        
        <div className='p-8  xl:w-[42rem] '>
          
            <h2 className='text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-3 '> 
              İş Dünyasında Değer Gören Sertifikalar
            </h2>

            <h3 className='text-xl md-text-4xl font-bold text-gray-700'>Akreditasyonlar</h3>
       
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-3'>
            <div className='relative w-32 h-32 md:w-96 md:h-44'>
              <Image src="/images/iso1.png" fill className='object-contain' />
            </div>
            <div>
              <h3 className='text-lg  md-text-4xl font-bold text-gray-700 '>İSO 9001</h3>
              <p className='text-md md:text-base text-gray-700'>
                ISO 9001, dünya çapında tanınan bir kalite yönetim standardıdır. Bu sertifika, eğitim modelimizin uluslararası kalite gereksinimlerine uygun olduğunu ve öğrencilerimize yüksek standartlarda eğitim sunduğumuzu gösterir. Bu sayede, öğrencilerimizin başarıları ve gelişimleri güvence altına alınmaktadır.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-3'>
          <div className='relative w-32 h-32 md:w-96 md:h-44'>
          <Image src="/images/iso1.png" fill className='object-contain' />
            </div>
            <div>
              <h3 className='text-2xl md-text-4xl font-bold text-gray-700'>İSO 9002</h3>
              <p className='text-base text-gray-700'>
                ISO 9002, eğitimde kalite yönetim sisteminin gerekliliklerini yerine getirdiğimizi belgeleyen bir uluslararası sertifikadır. Ulusal ve uluslararası standartlar doğrultusunda, bilimsel ve teknolojik temellere dayalı bir eğitim ortamı sunarak öğrencilerimizin kaliteli bir eğitim almasını sağlıyoruz.
              </p>
            </div>
          </div>

        </div>
        </div>

      

        {/* Video ve Kontroller */}
        <div className="relative mt-6 xl:mt-8 mx-auto xl:mx-0 xl:absolute xl:top-10 xl:left-[40rem] shadow-2xl xl:w-[35rem] xl:w-[40rem] h-auto rounded-3xl z-50 ">
          <video 
            ref={videoRef} 
            className="rounded-2xl w-full h-full rounded-3xl shadow-2xl"
            onClick={handlePlayPause} 
          >
            <source src="/videos/akademik-koleji-tanitim.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
          <div className="absolute inset-0 bg-black rounded-2xl opacity-70"></div>
          {/* Oynatma/Durdurma Iconu - Tam Ortada */}
          <div 
            onClick={handlePlayPause} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-60 rounded-full">
            {isPlaying ? <Image src="/images/stop-icon.png" width={100} height={100}/> : <Image src="/images/play-icon.png" width={100} height={100}/> }
          </div>

          {/* Tam Ekran Iconu - Sağ Alt Köşe */}
          <div 
            onClick={handleFullscreen} 
            className="absolute bottom-4 right-4 cursor-pointer text-white text-2xl z-60">
            <FaExpand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;


