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
        { name: 'TÜRKÇE', img: '/img/common/flags/1.png' },
        { name: 'İNGİLİZCE', img: '/img/common/flags/2.png' },
        { name: 'ALMANCA', img: '/img/common/flags/3.png' },
        { name: 'İSPANYOLCA', img: '/img/common/flags/4.png' },
        { name: 'FRANSIZCA', img: '/img/common/flags/5.png' },
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
            className='w-[55rem] h-[28rem]'
        >
            <SwiperSlide className='relative px-12'>
                <div className='flex flex-col gap-8 p-8'>
                    <h1 className='text-3xl font-extrabold text-white '>
                        5 DİLDE EĞİTİM VEREN TEK ÖZEL OKULUZ!
                    </h1>
                    <h2 className='text-xl text-gray-300 mb-6'>
                        Kids ve Teens Yaş Gruplarına Özgü Nitelik Kazandıran Dil Eğitimi
                    </h2>

                    <div className='diller flex gap-8'>
                        {visibleLanguages.map((lang, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center transition-opacity duration-500 ease-in-out`} 
                                style={{ opacity: lang.opacity || 1 }} // Use opacity from state
                            >
                                <Image width={60} height={60} className='object-contain' src={lang.img} alt={`${lang.name} flag`} />
                                <h1 className='text-xl font-bold text-white mt-2'>{lang.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='relative mx-8'>
                <div className=''>
                    {/* Diğer slayt içeriği buraya eklenebilir */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative mx-8'>
                <div className=''>
                    {/* Diğer slayt içeriği buraya eklenebilir */}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
