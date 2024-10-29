"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';
import Image from 'next/image';

const Slider = () => {
    const languages = [
        { name: 'TÜRKÇE', img: '/img/home-page/main-content/flags/1.png' },
        { name: 'İNGİLİZCE', img: '/img/home-page/main-content/flags/2.png' },
        { name: 'ALMANCA', img: '/img/home-page/main-content/flags/3.png' },
        { name: 'İSPANYOLCA', img: '/img/home-page/main-content/flags/4.png' },
        { name: 'FRANSIZCA', img: '/img/home-page/main-content/flags/5.png' },
    ];

    const informatics = [
        { name: 'BİLİŞİM', img: '/img/home-page/main-content/informatics/1.png' },
        { name: 'YAPAY ZEKA (AI)', img: '/img/home-page/main-content/informatics/2.png' },
        { name: 'ROBOTİK', img: '/img/home-page/main-content/informatics/3.png' },
        { name: 'KODLAMA', img: '/img/home-page/main-content/informatics/4.png' },
        { name: '3D ART', img: '/img/home-page/main-content/informatics/5.png' },
    ];



    const [visibleLanguages, setVisibleLanguages] = useState([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < languages.length) {
                setVisibleLanguages((prev) => [
                    ...prev,
                    { ...languages[index], opacity: 0 } // Set initial opacity to 0
                ]);

                // Trigger animation by updating opacity after a delay
                setTimeout(() => {
                    setVisibleLanguages((prev) => {
                        const newLangs = [...prev];
                        newLangs[newLangs.length - 1].opacity = 1; // Set opacity to 1 for fade-in effect
                        return newLangs;
                    });
                }, 10); // Small delay to allow opacity change to take effect
                
                index++;
            } else {
                clearInterval(interval); // Stop interval after all languages are added
            }
        }, 1000); // 1 second delay for each language

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    const colors = ['gray-100', 'gray-200'];
                    return `<span class="${className} flex" style="background-color: ${colors[index % colors.length]}"></span>`;
                },
            }}
            autoplay={{
                delay: 9000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='w-[370px] h-[500px] md:w-[55rem] md:h-[28rem]'
        >
            <SwiperSlide className='relative p-0 px-2 md:ps-16  md:pt-32'>
                <div className='flex flex-col gap-4 md:gap-4 pt-10 md:pt-0'>
                <h1 style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
   }} className='text-xl md:text-3xl font-extrabold text-white tracking-wide'>
 <span className="text-[#ED1F25]">5 DİLDE </span>Eğitim Veren <span className="text-[#FECC07]"> TEK ÖZEL OKULUZ!   </span>
</h1>
<h2 className='text-md md:text-xl text-gray-300  tracking-wide mb-6'>
    Kids ve Teens Yaş Gruplarına Özgü Nitelik Kazandıran Dil Eğitimi
</h2>


                    <div className='diller flex flex-col  md:flex-row gap-4 md:gap-8 '>
                        {visibleLanguages.map((lang, index) => (
                            <div
                                key={index}
                                className={`flex  flex-row md:flex-col gap-4 items-center transition-opacity duration-500 ease-in-out`} 
                                style={{ opacity: lang.opacity || 1 }} // Use opacity from state
                            >
                                <div className='relative w-10 h-10 md:w-16 md:h-16'>
                                     <Image fill className='object-contain  rounded-full ' src={lang.img} alt={`${lang.name} flag`} />
                                </div>

                               
                                <h1 className='text-sm md:text-xl font-bold text-white mt-0 md:mt-2'>{lang.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative p-0 px-2 md:ps-16 md:pt-48'>
    <div className='flex flex-col items-center relative'>
        <h1
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className='md:text-xl font-extrabold text-white tracking-wide z-10 text-center w-52'
        >
            <span className="text-[#D4A017]">BİLİŞİM</span> ve <span className="text-[#D4A017]">ROBOTİK</span> Programları
        </h1>

        <div className='absolute flex justify-center items-center w-full h-full'>
            {informatics.map((inf, index) => {
                const angle = (index / informatics.length) * (2 * Math.PI); // Açıyı hesapla
                const radius = 170; // Dairenin yarıçapı (px cinsinden)
                const x = Math.cos(angle) * radius; // Dönüşüm hesapla
                const y = Math.sin(angle) * radius; // Dönüşüm hesapla

                return (
                    <div
                        key={index}
                        className={`flex flex-col items-center gap-2 absolute`}
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      
                        <div className='relative w-16 h-16 md:w-24 md:h-24  flex items-center justify-center'>
                            <Image fill className='object-cover ' src={inf.img} alt={`${inf.name} icon`} />
                            <h1 className='absolute text-xs md:text-sm font-semibold text-[#D4A017] tracking-wider'>{inf.name}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
</SwiperSlide>




            <SwiperSlide className='relative'>
                <div className=''>
                    {/* Diğer slayt içeriği buraya eklenebilir */}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
