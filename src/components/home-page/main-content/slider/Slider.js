"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';
import Image from 'next/image';
import { FaCircleDot, FaCircleH } from 'react-icons/fa6';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Slider = () => {
    const languages = [
        { name: 'TÜRKÇE', img: '/img/home-page/main-content/flags/1.png' },
        { name: 'İNGİLİZCE', img: '/img/home-page/main-content/flags/2.png' },
        { name: 'ALMANCA', img: '/img/home-page/main-content/flags/3.png' },
        { name: 'İSPANYOLCA', img: '/img/home-page/main-content/flags/4.png' },
        { name: 'FRANSIZCA', img: '/img/home-page/main-content/flags/5.png' },
    ];

    const informatics = [
        { name: 'BİLİŞİM', img: '/img/home-page/main-content/informatics/3.png' },
        { name: 'YAPAY ZEKA (AI)', img: '/img/home-page/main-content/informatics/2.png' },
        { name: 'ROBOTİK', img: '/img/home-page/main-content/informatics/1.png' },
        { name: 'KODLAMA', img: '/img/home-page/main-content/informatics/4.png'},
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
<h2 className='text-md md:text-xl text-white tracking-wide mb-6'>
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
            <SwiperSlide className='relative p-0 px-4 md:ps-24 md:pt-4'>
    {/* Arka Plan Görseli */}
    <div className='absolute inset-0 bg-[url("/path/to/background-image.jpg")] bg-cover bg-center opacity-90'></div>
    
    {/* İçerik Katmanı */}
    <div className='relative z-10 flex flex-col items-center'>
        {/* Başlıklar */}
        <h1
            style={{ textShadow: "3px 3px 12px rgba(0, 0, 0, 0.8)" }} // Daha belirgin gölge
            className='text-center text-lg md:text-3xl font-extrabold text-white tracking-wide mb-2'
        >
            <span className="text-[#4585a8]" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 1)" }}>BİLİŞİM</span> ve <span className="text-[#95b1b2]" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 1)" }}>ROBOTİK</span> Programları
        </h1>
        <h2 className='text-md md:text-xl text-white tracking-wide mb-6 text-center px-4'>
            Bilişim, Yapay Zeka (AI), Robotik, Kodlama ve 3D Art
        </h2>

        {/* 3-üst, 2-alt Resim Grid Yapısı */}
        <div className='grid grid-cols-3 gap-6'>
            {/* İlk Satırda 3 Resim */}
            {informatics.slice(0, 3).map((inf, index) => (
                <div key={index} className='relative flex justify-center items-center text-center'>
                    <div 
                        className='relative w-20 h-20 md:w-28 md:h-28 rounded-full border-8 border-[rgba(0,119,190,0.5)] shadow-2xl shadow-black ' // Kalın ve Saydam Turkuaz border
                    >
                        <Image 
                            fill 
                            className='object-cover rounded-full bg-blue-50' 
                            src={inf.img} 
                            alt={`${inf.name} image`} 
                        />
                    </div>
                    <h1 className='absolute -bottom-8 text-sm md:text-lg font-semibold text-white whitespace-nowrap'>
                        {inf.name}
                    </h1>
                </div>
            ))}
        </div>

        {/* İkinci Satırda 2 Resim */}
        <div className='grid grid-cols-2 gap-6 mt-10'>
            {informatics.slice(3, 5).map((inf, index) => (
                <div key={index} className='relative flex justify-center items-center text-center '>
                    <div 
                        className='relative w-20 h-20 md:w-28 md:h-28 rounded-full border-8 border-[rgba(113,206,204,0.4)] shadow-2xl shadow-black ' // Kalın ve Saydam Turkuaz border
                    >
                        <Image 
                            fill 
                            className='object-cover rounded-full bg-blue-50' 
                            src={inf.img} 
                            alt={`${inf.name} image`} 
                        />
                    </div>
                    <h1 className='absolute -bottom-8 text-sm md:text-lg font-semibold text-white whitespace-nowrap'>
                        {inf.name}
                    </h1>
                </div>
            ))}
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
