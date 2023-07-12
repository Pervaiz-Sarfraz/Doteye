import React from "react";
import ChartLine from "../assets/vector/ChartLine.png";
import ShieldCheck from "../assets/vector/ShieldCheck.png";

function DotFeature() {
  return (
    <>
      <div className=" featureCard text-center p-4 text-white m-auto">
        <div>
          <img src={ChartLine} alt="" className="relative top-20 left-5 w-10" />
        </div>
        <div className=" sm:w-[60%] w-full m-auto py-5">
          <h1 className="Heading text-4xl p-4 text-white font-bold">
            <span className=" logo-span ">DotEYE</span> FOR SAFETY &
            <span className="Heading-overlay">MORE SALES</span>
          </h1>
          <p className="p-4 text-lg">
            Knowing your business is running smoothly and safely is what every
            business owner wants.
            <span className="text-white px-1">dotEyE</span>
            adds an extra layer of safety for your business and ensures your
            peace of mind. With <span className="text-white px-1"> dotEyE</span>
            , you have more control and can prevent theft, malpractices, and
            losses!
          </p>
        </div>
        <div className="relative bottom-0 right-0">
          <img
            src={ShieldCheck}
            alt=""
            className="absolute bottom-1 left-72 w-7"
          />
        </div>
      </div>
    </>
  );
}

export default DotFeature;
