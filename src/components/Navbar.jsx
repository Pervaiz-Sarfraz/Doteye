import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#About" },
    { name: "WhoAreWe", link: "/#About" },
    { name: "WhatWeDO", link: "/#WhatWeDO" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="header w-full fixed top-0 left-0 z-30">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img src={logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute sm:right-8 right-14 top-6 text-yellow-500 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={`md:flex md:items-center 
          md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opennav" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
              <a href={link.link} className=" hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn text-white ml-2 ">Contact Us</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
