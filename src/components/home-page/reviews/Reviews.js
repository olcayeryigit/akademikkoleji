"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    comment: "Okulumuzda aldığım eğitim harika! Öğretmenler çok ilgili ve her konuda bize yardımcı oluyor. Her gün yeni şeyler öğrenmek bana mutluluk veriyor.",
    name: "John Doe",
    title: "Öğrenci"
  },
  {
    id: 2,
    comment: "Çocuğum için çok güvenli ve gelişim odaklı bir okul. Sosyal etkinlikler ve eğitim kalitesi mükemmel. Çocuğum okula severek gidiyor, bu da bizi çok mutlu ediyor.",
    name: "Jane Smith",
    title: "Öğrenci Velisi"
  },
  {
    id: 3,
    comment: "Çocuklarımıza en iyi eğitimi sunan, sevgi dolu bir ortam var. Öğretmenler ve yöneticiler öğrencilerin başarısı için gerçekten özverili çalışıyorlar.",
    name: "Michael Brown",
    title: "Öğrenci Velisi"
  },
 
  {
    id: 4,
    comment: "Okulun sağladığı eğitim materyalleri ve sınıf içi destek mükemmel. Çocuğum okulda kendini çok rahat ve mutlu hissediyor.",
    name: "David Lee",
    title: "Öğrenci Velisi"
  },
  {
    id: 5,
    comment: "Sınıflar ve etkinlikler çocukların ilgisini çekiyor ve merak duygularını geliştiriyor. Okulun öğrenciye yaklaşımı çok değerli.",
    name: "Emily White",
    title: "Öğrenci"
  }
];


const Reviews= () => {
  return (
    <div className="container mx-auto p-12">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="swiper-container w-full "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className='p-3'>
            <ReviewCard 
             
              comment={review.comment} 
              name={review.name} 
              title={review.title} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
