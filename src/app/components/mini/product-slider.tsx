"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftNavigationIcon } from "@/assets/icons/left-navigation-icon";
import { RightNavigationIcon } from "@/assets/icons/right-navigation-icon";

const settings = {
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 5000,
  nextArrow: <SimpleNextArrow />,
  prevArrow: <SimplePrevArrow />,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        nextArrow: null,
        prevArrow: null,
      }
    }
  ]
};

function SimpleNextArrow(props: any) {
  const {  style, onClick } = props;
  return (
    <div 
    style={{
      ...style,
      display: "block",
      position: "absolute",
      right: "-7px",
      top: "-63.5px"
    }}
    className="cursor-pointer"
    onClick={onClick} >
      <RightNavigationIcon  />
    </div>
  );
}

function SimplePrevArrow(props: any) {
  const {  style, onClick } = props;
  return (
    <div  style={{
      ...style,
      display: "block",
      position: "absolute",
      zIndex: "9",
      left: "650px",
      top: "-63.5px",
    }}
    onClick={onClick} className="cursor-pointer" >
      <LeftNavigationIcon/>
    </div>
  );
}

interface typeSettings {
  children: React.ReactNode
}

export const ProductSlider: React.FC<typeSettings> = ({children}) => {
  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};
