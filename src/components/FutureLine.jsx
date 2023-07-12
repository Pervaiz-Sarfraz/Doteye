import React from "react";
import feature from "../assets/images/feature.png";
import overlayreverse from "../assets/images/overlayreverse.png";
import vector2 from "../assets/vector/Vector-2.png";
import ChartLine from "../assets/vector/ChartLine.png";

function FutureLine() {
  return (
    <div
      div
      className=" FutureLine relative   sm:h-auto h-[800px] top-0 left-0"
    >
      <div className="absolute top-0 right-[700px]">
        <img src={vector2} alt="" className="w-8" />
      </div>
      <div className="absolute top-14 left-5">
        <img src={ChartLine} alt="" className="w-14 px-2" />
      </div>
      <div className="absolute bottom-0 right-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="absolute bottom-2 left-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="absolute top-2 right-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <img
            src={feature}
            alt=""
            className="absolute sm:top-3 top-2 sm:left-44 left-14 z-10 w-64 rounded-xl border-none"
          />
          <img
            src={overlayreverse}
            alt=""
            className="absolute sm:top-6 top-5 sm:left-40 left-10 w-72"
          />
        </div>
        <div className=" sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-60  my-10">
          <div className=" px-8">
            <h1 className="py-3 text-4xl font-bold">
              OUR FUTURE LINE OF
              <span className="Heading-overlay px-1"> PRODUCTS</span>
            </h1>
            <ul>
              <li className="py-2 my-1 text-sm">
                <p>
                  We AIM to provide a new generation IoT-based security products
                  that help users to choose between the products they try on. It
                  is like a bridge between virtual try-on and real-time human
                  suggestion.
                </p>
              </li>

              <li className="py-3 text-sm">
                <p>
                  Our main source of income comes from the subscription client
                  opts for. Since it is a SaaS based product and in
                  <span className="text-white"> B2B Model,</span>
                  we offer Quarterly, Half-yearly and Annual subscription plans
                </p>
              </li>
              <li className="py-3 text-orange-500 text-sm">
                We Charge According to the Services the Client Requires.
              </li>

              <li className="py-3 text-sm">
                <p>
                  Our Passive income comes from the Hardware (Scanners /
                  Readers) and Labels that we sell.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureLine;
