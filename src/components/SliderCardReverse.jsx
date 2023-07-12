import React from "react";
import sliderimg from "../assets/images/slider2.png";
import overlayreverse from "../assets/images/overlayreverse.png";
import vector1 from "../assets/vector/Vector-1.png";

function SliderCardReverse({ Heading }) {
  return (
    <div className="sliderCardReverse  sm:h-auto h-[850px]   relative top-0 left-0 p-10">
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <div className="absolute top-8 left-0">
            <img src={vector1} alt="" className="w-14 px-2" />
          </div>
          <img
            src={sliderimg}
            alt=""
            className="absolute sm:top-20 top-20 sm:left-44 left-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayreverse}
            alt=""
            className="absolute sm:top-16 top-16 sm:left-56 left-20 w-72"
          />
          <div className="absolute bottom-4 right-[700px]">
            <img src={vector1} alt="" className="w-14 px-2" />
          </div>
        </div>
        <div className=" sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-64  my-10">
          <div className=" px-1">
            <h1 className="Heading py-3 text-3xl font-bold ">{Heading}</h1>
            <ul className="list-disc flex-row sm:flex-col">
              <li className="py-3 sm:px-3 px-1 text-sm  my-1">
                We help transform all retail
                <span className="text-lg px-1">OFFLINE</span>
                businesses in <span className="text-lg pr-1">INDIA</span>
                into self-checkout stores without any additional hardware
                installations.
              </li>

              <li className="py-3 px-3 text-sm my-1">
                To mitigate the risk of theft/mismanagement, we also provide an
                extra layer of security to the existing
                <span className="text-lg px-1">Self-Checkout Stores</span>.
              </li>

              <li className="py-3 px-3 text-sm my-1">
                This feature further triggers an alarm to the
                <span className="text-lg px-1">Governing Management</span>with
                the specific video clippings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCardReverse;
