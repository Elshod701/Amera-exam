"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./arrow";

const settings = {
  infinite: true,
  autoplay: true,
  autoplayspeed: 2000,
  slidesToShow: 3,
  speed: 1000,
  rows: 2,
  pauseOnHover:true,
  responsive: [
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }
  ]
};

interface typeSettings {
  children: React.ReactNode;
}

const ProductsSliderRow: React.FC<typeSettings> = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default ProductsSliderRow;
