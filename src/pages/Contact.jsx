import React from "react";
import vector1 from "../assets/vector/Vector-1.png";
import ChartLine from "../assets/vector/ChartLine-1.png";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="text-white text-center m-auto  sm:w-[50%]  w-full pt-5">
          <h1 className="Heading  text-3xl font-bold uppercase">Contact Us</h1>

          <p className="text-sm p-5">
            Our main source of income comes from the subscriptions our clients
            opt for. Since it is a SaaS-based product and in the B2B model, we
            offer quarterly, half-yearly, and annual subscription plans.
          </p>
        </div>

        <div className="flex justify-center items-center mt-3 py-3">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight "
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto text-white border  rounded py-3 px-4 leading-tight "
                  id="grid-last-name"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none block sm:w-full w-[90%] m-auto  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight  h-36 resize-none"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center  justify-center border-1 border-red-600">
              <button className="btn text-white" type="button">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative top-0 left-0">
        <img src={vector1} alt="" className="absolute bottom-72 left-72 w-12" />
      </div>
      <div className="relative top-0 left-0">
        <img
          src={ChartLine}
          alt=""
          className=" absolute bottom-72 right-3 w-8"
        />
      </div>
    </>
  );
}

export default Contact;
