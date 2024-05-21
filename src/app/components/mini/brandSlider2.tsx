"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  infinite: true,
  speed: 3500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

interface typeSettings {
  children: React.ReactNode;
}

const BrandSlider2: React.FC<typeSettings> = ({ children }) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default BrandSlider2;
