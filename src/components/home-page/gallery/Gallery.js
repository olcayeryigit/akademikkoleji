"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation stil dosyası
import Image from 'next/image';
import './gallery.scss';
import Link from 'next/link';
import LogoButton from '@/components/common/buttons/LogoButton';

const Gallery = () => {
    const images = [
        { 
            src: '/img/2-.jpg', 
            alt: 'Öğrenciler Ders Çalışıyor', 
            date: '2023-09-15',
            description: 'Derslere aktif katılım.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Okul Bahçesi', 
            date: '2023-09-20',
            description: 'Öğrencilerin oyun alanı.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Sınıf Aktiviteleri', 
            date: '2023-09-25',
            description: 'Eğlenceli sınıf etkinlikleri.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Laboratuvar Çalışmaları', 
            date: '2023-10-01',
            description: 'Pratik deneyler.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Öğretmen ve Öğrenciler', 
            date: '2023-10-05',
            description: 'Öğretmen rehberliği.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Sınıf Düzeni', 
            date: '2023-10-10',
            description: 'Modern eğitim alanları.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Kütüphane', 
            date: '2023-10-15',
            description: 'Bilgiye erişim noktası.'
        },
        { 
            src: '/img/2-.jpg', 
            alt: 'Spor Aktiviteleri', 
            date: '2023-10-20',
            description: 'Fiziksel gelişim fırsatları.'
        },
    ];

    return (
        <div className="relative  py-14 ">
  


       
        <div className="w-full container mx-auto  ">
            <h2 className="text-4xl font-bold text-center mb-8">Akademik Koleji Okul Galerisi</h2>

            <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10 text-center">
                
            Eğitim yolculuğumuzun önemli anlarını bir araya getiriyor; Akademik Koleji'nin dinamik ve canlı ortamını keşfetmeye davet ediyoruz.            </p>

            <Swiper
                spaceBetween={10} // Resimler arasında boşluk
                navigation={true} // Navigation butonlarını etkinleştir
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Küçük ekranlar için 1 resim göster
                    },
                    768: {
                        slidesPerView: 2, // Orta boy ekranlar için 2 resim göster
                    },
                    1024: {
                        slidesPerView: 3, // Büyük ekranlar için 3 resim göster
                    },
                    1280: {
                        slidesPerView: 4, // En büyük ekranlar için 4 resim göster
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative opacity-90 hover:opacity-100 transition-opacity duration-300 ">
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