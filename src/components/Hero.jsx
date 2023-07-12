import React from "react";
import Group from "../assets/images/Group 9.png";
import vector1 from "../assets/vector/Vector-1.png";
import vector2 from "../assets/vector/Vector-2.png";
import ShieldCheck from "../assets/vector/ShieldCheck.png";
import line from "../assets/vector/Line-1.png";

function Hero() {
  return (
    <>
      <section className="hero capitalize flex flex-col sm:flex-row flex-col-reverse justify-around  items-center p-8 z-10 sm:mt-0 mt-5">
        <div className="heading text-white sm:w-[48%] w-full">
          <div className="absolute top-28 left-64 w-11">
            <img src={vector1} alt="" />
          </div>
          <h1 className="banner-heading Heading font-bold uppercase">
            Confidential and Proprietary
          </h1>
          <p className="text-sm">
            <span className="logo-span">DotEYE</span> is born from a strong
            belief that a simplified tech suite is the way forward to help the
            complex retail market.
          </p>
          <button className="btn ml-2 mt-5 py-4">Contact Us</button>
        </div>
        <div className="sm:mt-20 mt-12  banner-img sm:w-[48%] w-full">
          <div className="absolute top-36  right-[500px] w-24">
            <img src={vector2} alt="" />
          </div>
          <img
            src={Group}
            alt=""
            className="sm:w-full sm:m-0 m-11 w-64 m-auto"
          />
        </div>
        <div className="absolute bottom-16 left-[380px] w-7">
          <img src={ShieldCheck} alt="" />
        </div>
      </section>
      <img src={line} alt="" />
    </>
  );
}

export default Hero;
