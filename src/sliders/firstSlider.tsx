import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './firstSlider.scss';
import { Pagination } from 'swiper/modules';

export interface FirstSlideProps {
  slides: string[]
}

const FirstSlider = ({slides}: FirstSlideProps) => {
  return (
    <div className="firstSliderContainer">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        {slides.map((slide: string, index: number) => (
          <SwiperSlide>
            <img key={slide[index]} src={`${slide}`} loading="lazy" alt="slider img"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}

export default FirstSlider
