"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';
import Image from 'next/image';
import 'swiper/css/effect-fade';


const Slider = () => {
    const languages = [
        { name: 'TÜRKÇE', img: '/images/home-page/main-slider/flags/1.png' },
        { name: 'İNGİLİZCE', img: '/images/home-page/main-slider/flags/2.png' },
        { name: 'ALMANCA', img: '/images/home-page/main-slider/flags/3.png' },
        { name: 'İSPANYOLCA', img: '/images/home-page/main-slider/flags/4.png' },
        { name: 'FRANSIZCA', img: '/images/home-page/main-slider/flags/5.png' },
    ];

    const informatics = [
        { name: 'BİLİŞİM', img: '/images/home-page/main-slider/informatics/3.png' },
        { name: 'YAPAY ZEKA (AI)', img: '/images/home-page/main-slider/informatics/2.png' },
        { name: 'ROBOTİK', img: '/images/home-page/main-slider/informatics/1.png' },
        { name: 'KODLAMA', img: '/images/home-page/main-slider/informatics/4.png'},
        { name: '3D ART', img: '/images/home-page/main-slider/informatics/5.png' },
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
        effect="fade"
        fadeEffect={{ crossFade: true }}
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
            modules={[Pagination, Autoplay,EffectFade]}
            className='container  w-screen h-[500px] md:h-full'
        >
            <SwiperSlide className='relative p-0 px-2 ps-6 md:ps-16  md:pt-32  '>
                <div className='flex flex-col gap-4 md:gap-4  md:pt-0'>
                <h1 style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
   }} className='text-xl md:text-3xl font-extrabold text-white tracking-wide'>
 <span className="text-[#ED1F25]">5 DİLDE </span>Eğitim Veren <span className="text-[#FECC07]"> TEK ÖZEL OKULUZ!   </span>
</h1>
<h2 className='text-md md:text-xl text-gray-200 tracking-wide mb-2 md:mb-6'>
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
            <SwiperSlide className='relative p-0 md:ps-16  md:pt-28'>
    {/* Arka Plan Görseli */}


    {/* İçerik Katmanı */}
    <div className='relative z-10 flex flex-col '>
        {/* Başlıklar */}
        <h1
            style={{ textShadow: "3px 3px 12px rgba(0, 0, 0, 0.8)" }} // Daha belirgin gölge
            className='text-lg md:text-3xl font-extrabold text-white  mb-4 text-center'
        >
            <span className="text-[#4585a8] " style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 1)" }}>BİLİŞİM</span> ve <span className="text-[#88d8c6]" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 1)" }}>ROBOTİK</span> Programları
        </h1>
        <h2 className='text-md md:text-lg text-gray-200  mb-6 text-center'>
            Öğrencilerimizi Yapay Zeka (AI), Robotik ve Kodlama Eğitimleri ile Geleceğe Hazırlıyoruz!
        </h2>

        {/* Resimler için satır */}
        <div className='flex flex-row flex-wrap justify-center gap-3'>
            {informatics.map((inf, index) => (
                <div key={index} className='relative flex flex-col justify-center items-center lg:w-36 '>
                    <div 
                        className={`relative  w-28 h-28 rounded-full border-8 shadow-2xl shadow-black ${
                            index % 2 === 0 ? 'border-[rgba(113,206,204,0.4)]' : 'border-[rgba(0,119,190,0.5)]'
                        }`} // İndekse göre farklı border renkleri
                    >
                        <Image 
                            fill 
                            className='object-cover rounded-full bg-blue-50' 
                            src={inf.img} 
                            alt={`${inf.name} image`} 
                        />
                    </div>
                    <h1 className=' text-sm md:text-lg font-semibold text-white '>
                        {inf.name}
                    </h1>
                </div>
            ))}
        </div>
    </div>
</SwiperSlide>




            <SwiperSlide className='relative'>
                <div className=''>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
