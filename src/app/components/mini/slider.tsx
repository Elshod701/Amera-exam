"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./arrow";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:8000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

interface typeSettings {
    children: React.ReactNode
}

export const SliderLine: React.FC<typeSettings> = ({children}) => {
  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}
