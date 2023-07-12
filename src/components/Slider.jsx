import React, { useState } from "react";
import Slider2Card from "./Slider2Card";
import SliderCard from "./SliderCard";
import SliderCardReverse from "./SliderCardReverse";
import SliderCard2Reverse from "./SliderCard2Reverse";
import vector1 from "../assets/vector/Vector-1.png";

import ChartLine from "../assets/vector/ChartLine.png";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleClick = (slideNum) => {
    setActiveSlide(slideNum);
  };

  return (
    <div className="Slider-Head" id="WhatWeDO">
      <div className=" px-3 py-3 w-16">
        <img src={vector1} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="Heading text-white text-center font-bold text-3xl py-4">
          WHAT <span className="Heading-overlay"> WE DO?</span>
        </h1>
        <div>
          <img src={ChartLine} alt="" className="pl-9 w-16 mt-6 " />
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-buttons">
          <button
            className={`slider-button ${activeSlide === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            POS Verfication
          </button>
          <button
            className={`slider-button ${activeSlide === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            Self-Checkout Verfication
          </button>
          <button
            className={`slider-button ${activeSlide === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            Customer Retention
          </button>
          <button
            className={`slider-button ${activeSlide === 4 ? "active" : ""}`}
            onClick={() => handleClick(4)}
          >
            Anti-Shoplifting Technology
          </button>
        </div>
        <div className="slider-content">
          {activeSlide === 1 && (
            <>
              <SliderCard Heading={"POS Verifcation"} />
            </>
          )}
          {activeSlide === 2 && (
            <>
              <SliderCardReverse Heading={"SELF-CHECKOUT VERIFICATION"} />
            </>
          )}
          {activeSlide === 3 && (
            <>
              <Slider2Card Heading={"CUSTOMER RETENTION"} />
            </>
          )}
          {activeSlide === 4 && (
            <>
              <SliderCard2Reverse Heading={"ANTI-SHOPLIFTING TECHNOLOGY"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
