"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  infinite: true,
  speed: 3500,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6
      }
      
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
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

const BrandSlider1: React.FC<typeSettings> = ({ children }) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default BrandSlider1;
