"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: { containerStyles: string; btnStyles: string; iconStyles: string }) => {
  const swiper = useSwiper();
  setInterval(() => {
    if(swiper.isEnd){
      swiper.slideTo(0);
    }else{
    swiper.slideNext();
    } 
  }, 3000)
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns;
