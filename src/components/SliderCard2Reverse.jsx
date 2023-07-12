import React from "react";
import slider4 from "../assets/images/slider4.png";
import overlayreverse from "../assets/images/overlayreverse.png";
import ShieldCheck from "../assets/vector/ShieldCheck.png";

function SliderCardReverse({ Heading }) {
  return (
    <div className="Slider2CardReverse  relative top-0 left-0 p-10">
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <img
            src={slider4}
            alt=""
            className="absolute sm:top-20 top-20 sm:left-44 left-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayreverse}
            alt=""
            className="absolute sm:top-16 top-16 sm:left-56 left-20 w-72"
          />
        </div>
        <div className=" sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-64  my-10">
          <div className="shoplifting px-1">
            <h1 className=" Heading font-bold py-3 text-3xl">{Heading}</h1>
            <div className="flex flex-col sm:flex-row">
              <div>
                <hr className="line-2" />
                <p className="text-sm px-2">
                  According to the US National Retail Security Survey (NRRS),
                  the major cause of shrinkage in retail business is
                  shoplifting. Our custom HARDWARE, SOFTWARE, and CUSTOM LABELS
                  combo, detects any malpractice like theft/shoplifting and
                  mismanagement at the counter/store in real-time.
                </p>
              </div>
              <div>
                <hr className="line-2" />
                <p className="text-sm px-2">
                  According to the US National Retail Security Survey (NRRS),
                  the major cause of shrinkage in retail business is
                  shoplifting. Our custom HARDWARE, SOFTWARE, and CUSTOM LABELS
                  combo, detects any malpractice like theft/shoplifting and
                  mismanagement at the counter/store in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-20 right-10 w-7">
            <img src={ShieldCheck} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCardReverse;
