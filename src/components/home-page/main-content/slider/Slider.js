"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
                    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
                    return `<span class="${className} flex" style="background-color: ${colors[index % colors.length]}"></span>`;
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='w-1/2'
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className='hover:cursor-grab transition duration-300'>
                    <div className="flex justify-center w-full h-[450px]">
                       <div></div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default Slider;