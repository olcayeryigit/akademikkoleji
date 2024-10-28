"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation stil dosyası
import Image from 'next/image';
import "./section7.scss";

const Section7 = () => {
    const images = [
        { src: '/img/2-.jpg', alt: 'Öğrenciler Ders Çalışıyor' },
        { src: '/img/2-.jpg', alt: 'Okul Bahçesi' },
        { src: '/img/2-.jpg', alt: 'Sınıf Aktiviteleri' },
        { src: '/img/2-.jpg', alt: 'Laboratuvar Çalışmaları' },
        { src: '/img/2-.jpg', alt: 'Öğretmen ve Öğrenciler' },
        { src: '/img/2-.jpg', alt: 'Sınıf Düzeni' },
        { src: '/img/2-.jpg', alt: 'Kütüphane' },
        { src: '/img/2-.jpg', alt: 'Spor Aktiviteleri' },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-4xl font-bold text-center mb-6">Okul Galerisi</h2>
            <Swiper
                spaceBetween={20} // Resimler arasında boşluk
                slidesPerView={4} // Aynı anda 4 resim göster
                navigation={true} // Navigation butonlarını etkinleştir
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className=''
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className=' opacity-80 hover:opacity-100 transition-opacity duration-300'>
                      <div className='relative w-76 h-52'>
                        <Image      src={image.src}
                            alt={image.alt}
                          fill
                          className='object-cover rounded'
                      />     
                      </div>
                       
                       
                          
                            
                       
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Section7;
