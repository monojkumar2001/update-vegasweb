import React from 'react';
import { useSwiper } from 'swiper/react';
import {ImArrowLeft,ImArrowRight} from 'react-icons/im'
import {HiChevronRight,HiChevronLeft} from "react-icons/hi"

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <div onClick={() => swiper.slidePrev()}><HiChevronLeft /></div>
      <div onClick={() => swiper.slideNext()}><HiChevronRight/></div>
    </div>
  );
};