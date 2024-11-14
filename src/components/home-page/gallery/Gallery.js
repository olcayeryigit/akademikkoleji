import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import './gallery.scss';
import LogoButton from '@/components/common/buttons/LogoButton';

const Gallery = () => {
    const images = [
        { 
            src: '/images/main.jpg', 
            alt: 'Öğrenciler Ders Çalışıyor', 
            date: '2023-09-15',
            description: 'Derslere aktif katılım.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Okul Bahçesi', 
            date: '2023-09-20',
            description: 'Öğrencilerin oyun alanı.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Sınıf Aktiviteleri', 
            date: '2023-09-25',
            description: 'Eğlenceli sınıf etkinlikleri.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Laboratuvar Çalışmaları', 
            date: '2023-10-01',
            description: 'Pratik deneyler.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Öğretmen ve Öğrenciler', 
            date: '2023-10-05',
            description: 'Öğretmen rehberliği.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Sınıf Düzeni', 
            date: '2023-10-10',
            description: 'Modern eğitim alanları.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Kütüphane', 
            date: '2023-10-15',
            description: 'Bilgiye erişim noktası.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Spor Aktiviteleri', 
            date: '2023-10-20',
            description: 'Fiziksel gelişim fırsatları.'
        },
    ];

    return (
        <div className="relative py-14 px-4 md:px-0">
            <div className="w-full container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Akademik Koleji Okul Galerisi</h2>
                <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10 text-center">
                    Eğitim yolculuğumuzun önemli anlarını bir araya getiriyor; Akademik Koleji&apos;nin dinamik ve canlı ortamını keşfetmeye davet ediyoruz.
                </p>

                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="relative opacity-90 hover:opacity-100 transition-opacity duration-300">
                            <div className='relative w-full h-56'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className='object-cover rounded'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <LogoButton
                    text="Tüm Galeriyi Görüntüle"
                    bgColor="bg-white"
                    textColor="text-black"
                    hoverBgColor="hover:bg-black"
                    hoverTextColor="hover:text-white"
                    border="border-2"
                    borderColor="border-black"
                    hoverBorderColor="hover:border-black"
                    rounded="rounded-lg"
                    theme="clear"
                    size="medium"
                    flexType="inline"
                />
            </div>
        </div>
    );
};

export default Gallery;
