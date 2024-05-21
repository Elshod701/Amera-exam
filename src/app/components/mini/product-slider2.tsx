"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftNavigationIcon } from "@/assets/icons/left-navigation-icon";
import { RightNavigationIcon } from "@/assets/icons/right-navigation-icon";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SimpleNextArrow />,
  prevArrow: <SimplePrevArrow />,
};

function SimpleNextArrow(props: any) {
  const {  style, onClick } = props;
  return (
    <div 
    style={{
      ...style,
      display: "block",
      position: "absolute",
      right: "0px",
      top: "-61.5px"
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
      left: "570px",
      top: "-61.5px",
    }}
    onClick={onClick} className="cursor-pointer" >
      <LeftNavigationIcon/>
    </div>
  );
}

interface typeSettings {
  children: React.ReactNode
}

export const ProductSlider2: React.FC<typeSettings> = ({children}) => {
  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};
