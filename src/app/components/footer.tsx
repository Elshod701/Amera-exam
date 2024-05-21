"use client"
import PayCards from "@/assets/icons/pay-cards";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <button onClick={scrollToTop} className="bg-topButtonBg py-[15px] text-textColor font-medium text-[15px] w-[100%]">
        Back to Top
      </button>
      <div className="bg-footerBg py-[70px]">
       <div className="pb-[65px] border-b-[1px] border-borderColor" >
       <div className="container">
          <div className="flex items-start gap-[180px] flex-wrap">
            <div>
              <p className="text-4 text-textColor font-medium mb-[30px]">Company Info</p>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">About us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Contact us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Careers</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Business With Us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Find a Store</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Press & Talent</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-4 text-textColor font-medium mb-[30px]">Let Us Help You</p>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Orders</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Downloads</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Addresses</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Account details</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Lost password</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-4 text-textColor font-medium mb-[30px]">Quick Links</p>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Special Offers</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Gift Cards</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">F21 Red</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Terms of Use</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline" href="#">Portfolio</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-4 text-textColor font-medium mb-[30px]  " >Company Info</p>
              <ul className="flex flex-col gap-[10px] " >
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">About us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Contact us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Careers</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Business With Us</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Find a Store</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Press & Talent</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div className="py-[30px] bg-footerB"  >
        <div className="container">
          <div className="flex items-center justify-between flex-wrap " >
            <div className="flex items-center gap-[15px] flex-wrap " >
              <p className="font-medium text-[15px] text-footerTEXT pr-[15px] border-r-[1px] inline-block" >Copyright © 2019 amera Theme by Lionthemes88</p>
              <ul className="flex items-center gap-[23px] " >
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Site Map</a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Search Terms </a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Advanced Search </a>
                </li>
                <li>
                  <a className="text-textColor2 text-[14px] font-normal hover:text-mainColor hover:underline " href="#">Contact Us.</a>
                </li>
              </ul>
            </div>
            <div>
              <PayCards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
