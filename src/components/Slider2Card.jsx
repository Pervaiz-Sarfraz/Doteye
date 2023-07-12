import React from "react";
import slider3 from "../assets/images/slider3.png";
import overlayimg from "../assets/images/overlayimg.png";
import vector1 from "../assets/vector/Vector-1.png";

function Slider2Card({ Heading }) {
  return (
    <div className="Slider2Card sm:h-[300px] h-[670px]  px-6 py-4 relative top-5 left-0">
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-72  my-10">
          <div className=" px-4  ">
            <h1 className="Heading font-bold py-2 text-3xl ">{Heading}</h1>
            <ul className="list-disc">
              <li className="py-1 my-1 text-sm leading-8  ">
                Offline retargeting made easy with our INSIGHTFUL DATA analysis
              </li>

              <li className="py-2 my-1  text-sm">
                <p>
                  Similar to online retargeting, our custom API feature linked
                  to the existing CRM, will help the governing management track
                  in-depth user activity details.
                </p>
              </li>

              <li className="py-2 my-1 text-sm">
                <p>
                  We provide our data analysis over email/WhatsApp by 12 noon
                  the following day. If the client requests for a comprehensive
                  physical analysis, they can get the particular video clippings
                  from the past week.
                </p>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-2 left-72">
            <img src={vector1} alt="" className="w-14 px-2" />
          </div>
        </div>
        <div className="sm:w-[48%] w-full ">
          <img
            src={slider3}
            alt=""
            className="absolute sm:top-9 top-4 sm:right-24 right-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayimg}
            alt=""
            className="absolute sm:top-4 top-2  sm:right-36  right-20 w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider2Card;
