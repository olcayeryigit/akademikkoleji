"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.scss"
import Image from 'next/image';

const Slider = () => {
    const images = [
        {
            src: '/img/home-page/main-content/1.jpg',
            alt: 'Image 1',
        },
        {
            src: '/img/home-page/main-content/2.jpg',
            alt: 'Image 2',
        },
        {
            src: '/img/home-page/main-content/3.jpg',
            alt: 'Image 3',
        },
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    // Renkli noktalar için renk dizisi
                    const colors = ['#143256', '#DC001E'];
                    return `<span class="${className} flex" style="background-color: ${colors[index % colors.length]}"></span>`;
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='w-[55rem] h-[22rem] '
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className='relative' >
              </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default Slider;