import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import Intro from './Intro';
import { HomeData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/effect-fade';

SwiperCore.use([Autoplay, EffectFade]);
const IntroContainer = () => {
  const swiperOption = {
    loop: true,
    speed: 650,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeParents: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="section slider-section" id="menu_home">
      <Swiper
        effect="fade"
        className="slider-active"
        fadeEffect={'fade'}
        {...swiperOption}
      >
        {HomeData[0].slider &&
          HomeData[0].slider.map((single, key) => {
            return (
              <SwiperSlide key={key}>
                <Intro key={key} data={single} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="icon-info stats">
        <div className="container">
          <h1
            className="stats-heading text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            ALLBAU{' '}
          </h1>
          <h3
            className="stats-heading text-center my-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            QUALITÄT
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;
