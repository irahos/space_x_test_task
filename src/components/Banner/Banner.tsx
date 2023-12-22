import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import image1 from './assets/banner_image_1.png';
import image2 from './assets/banner_image_2.png';
import image3 from './assets/banner_image_3.png';
import arrow_down from './assets/arrow_down.svg';

import './Banner.scss';
import 'swiper/scss';
import 'swiper/scss/effect-fade'
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

type TBannerProps = {
  onArrowClick: () => void;
};

export const Banner:FC<TBannerProps> = ({ onArrowClick }) => {
  return (
    <div className='banner'>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        effect='fade'
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={image1} alt="banner image 1" style={{ width: "100%", height: "100vh" }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="banner image 2" style={{ width: "100%", height: "100vh" }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="banner image 3" style={{ width: "100%", height: "100vh" }}/>
        </SwiperSlide>
      </Swiper>
      <div className='banner__text'>
        <h2 className='banner__title-2'>the space is waiting for</h2>
        <h1 className='banner__title-1'>you</h1>
      </div>
      <div className='banner__explore'>
        <p className='banner__explore-text'>Explore tours</p>
        <div>
          <img src={arrow_down} alt="arrow down" onClick={onArrowClick} className='banner__explore-image'/>
        </div>
      </div>
    </div>
  );
};
