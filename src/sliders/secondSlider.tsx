import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './secondSlider.scss';

import { Navigation } from 'swiper/modules';

export type SecondSliderModel = {
  img: string,
  title: string
}

export interface SecondSlideProps {
  slides: SecondSliderModel
}

const SecondSlider = ({slides}: SecondSlideProps) => {
  return (
    <div className="secondSliderContainer">
      <Swiper
        slidesPerView={5}
        navigation={true}
        spaceBetween={5}
        modules={[Navigation]}
        centeredSlides={true}
        slidesPerGroupSkip={2}
      >
        {slides.map((slide: SecondSliderModel, index: number) => (
          <SwiperSlide key={slide.title[index]}>
            <img src={`${slide.img}`} loading="lazy" alt="slider img"/>
            <div className="sliderTextTab">{slide.title}</div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SecondSlider;
