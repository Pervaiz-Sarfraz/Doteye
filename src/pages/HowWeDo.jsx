import React from "react";
import lshape from "../assets/vector/L-shape.png";

function HowWeDo() {
  return (
    <>
      <div className="relative top-0 left-0">
        <img src={lshape} alt="" className="absolute bottom-2 right-0" />
      </div>
      <div className="howwedoit flex flex-col sm:flex-row justify-center items-center">
        <div className="HowWeDo text-white sm:w-[60%] w-[90%]">
          <h1 className=" Heading text-4xl font-bold">How We DO IT</h1>

          <p className="font-thin text-lg py-3 leading-6">
            According to the US National Retail Security Survey (NRRS), the
            major cause of shrinkage in retail business is shoplifting. Our
            custom HARDWARE, SOFTWARE, and CUSTOM LABELS combo, detects any
            malpractice like theft/shoplifting and mismanagement at the
            counter/store in real-time.
          </p>
        </div>
      </div>
    </>
  );
}

export default HowWeDo;
