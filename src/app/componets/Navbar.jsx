"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/img/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const getFlagSrc = () => {
    switch (selectedLanguage) {
      case "ENG":
        return "/eng.png";
      case "HI":
        return "/india.png";
      case "PT-BR":
        return "/brazil.png";
      case "TUR":
        return "/turkey.png";
        case "ENG-CA":
        return "/canada.png";
      default:
        return "/flag.png";
    }
  };

  return (
    <div className="bg-white flex justify-around font-medium">
      <Image src={logo} />
      {menuOpen ? (
        <div className="lg:hidden bg-white flex items-center justify-end mx-1">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <div
          className={` ${
            menuOpen ? "hidden" : "block"
          } lg:hidden bg-white mx-1 flex items-center justify-end pr-2`}
        >
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div
        className={`lg:flex justify-center items-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex gap-2 font-medium lg:flex-row flex-col">
          <li className="hover:text-[#009846]">Home</li>
          <li className="font-extralight hidden lg:block">|</li>
          <li className="hover:text-[#009846]">
            About Us
            <svg
              className="w-2.5 h-2.5 ms-3 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li className="font-extralight hidden lg:block">|</li>
          <li className="hover:text-[#009846]">
            Businesses
            <svg
              className="w-2.5 h-2.5 ms-3 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li className="font-extralight hidden lg:block">|</li>

          <li className="hover:text-[#009846]">
            Projects
            <svg
              className="w-2.5 h-2.5 ms-3 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li className="font-extralight hidden lg:block">|</li>
          <li className="hover:text-[#009846]">Career</li>
          <li className="font-extralight hidden lg:block">|</li>
          <li className="hover:text-[#009846]">Contact</li>
          <li className="font-extralight hidden lg:block">|</li>
          <li className="hover:text-[#009846]">Blog</li>
        </ul>
      </div>
      <div className="lg:flex gap-10 justify-center items-center hidden">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={getFlagSrc()}
            className="h-8 w-8"
            width={"32"}
            height={"32"}
          />
          <select value={selectedLanguage} onChange={handleLanguageChange} className="outline-none">
            <option value="ENG">ENG</option>
            <option value="HI">HINDI</option>
            <option value="PT-BR">PT-BR</option>
            <option value="ENG-CA">ENG-CA</option>
            <option value="TUR">TUR</option>
          </select>
        </div>
        <div className="bg-[#009846] rounded-lg w-[155px] h-[52px] flex justify-center items-center">
          <p className="font-semibold text-lg text-white ">Book Now</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
