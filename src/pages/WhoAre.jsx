import React from "react";
import Profile1 from "../assets/images/Profile-1.png";
import Profile2 from "../assets/images/Profile-2.png";
import ChartLine from "../assets/vector/ChartLine.png";

function WhoAre() {
  return (
    <div className="WhoAreWe" id="About">
      <div className="sm:w-[40%] w-full m-auto mt-6  ">
        <div className="relative top-12 left-80 w-7">
          <img src={ChartLine} alt="" />
        </div>
        <h1 className="Heading uppercase text-3xl text-center text-white font-black p-3">
          Who <span className="Heading-overlay">Are We</span>
        </h1>

        <p className="text-center text-white py-3 px-1">
          <span className="logo-span ">DotEYE</span> is born from a strong
          belief that a simplified tech suite is the way forward to help the
          complex retail market.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
        <div className=" profile-box sm:w-[35%] w-[90%] m-auto h-[430px]">
          <div>
            <img src={Profile1} alt="" className="mt-2 ml-4 w-16" />
            <h2 className="Heading pt-6 px-4 font-bold">TARUN KOPURI</h2>
            <p className=" py-0 px-4 title">Co Founder & CEO</p>
            <p className="py-2 px-3 font-normal text-lg box">
              A serial entrepreneur who eats, drinks, and sleeps business.
              Graduated from Andhra University in Civil engineering. Loves
              photography and food as well as constructive criticism. His dream
              is to get dotEYE in every store globally
            </p>
          </div>
        </div>
        <div className="profile-box sm:w-[35%] w-[90%] m-auto h-[430px]">
          <div>
            <img src={Profile2} alt="" className="mt-2 ml-4 w-16" />
            <h2 className="Heading pt-6 px-4 font-bold">GOVARDHAN CHITRADA</h2>
            <p className=" py-0 px-4 title">Co Founder & CTO</p>
            <p className="py-2 px-3  text-lg box">
              A postgraduate from the University of La Sapienza in Artificial
              Intelligence & Robotics. He is a 2X founder, with dotEYE being his
              second tech venture. He has been instrumental in keeping the
              product vision steady and hopes to make this into the best that
              India has to offer to the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAre;
