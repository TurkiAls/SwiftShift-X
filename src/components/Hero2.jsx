import React from "react";
import Nova from "./Nova2";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="container">
      <div>
        <Nova />
      </div>
      <div
        className="hero flex h-screen flex-col justify-center lg:mr-44"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="">
          <div className="hero-title font-['SpaceGrotesk'] text-5xl font-bold text-main-color md:text-7xl ">
            <h1>سويفت شيفت </h1>
            <h1>للذكاء الاصطناعي</h1>
          </div>
          <p className="mt-[24px] w-2/3 max-w-[380px] font-['Inter'] text-base md:text-lg font-semibold md:font-normal text-main-color">
          عزز أعمالك مع حلول الذكاء الاصطناعي المتطورة 
          </p>
          <div className="flex gap-x-3 pt-5  font-['Inter']">
            <a href="#contact">
              <input
                type="button"
                className="btn orange-btn"
                value="تواصل معنا"
              />
            </a>
            <a href="#services">
              <input
                type="button"
                className="btn border-btn normal-btn"
                value="خدماتنا"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
