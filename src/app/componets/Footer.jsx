import Image from "next/image";
import React from "react";
import logo from "@/app/assets/img/logo.png";
import location from "@/app/assets/img/location.png";
import call from "@/app/assets/img/call.png";
import mail from "@/app/assets/img/mail.png";
import f1 from "@/app/assets/img/fast.png";
import f2 from "@/app/assets/img/facebook.png";
import f3 from "@/app/assets/img/twitter.png";
import f4 from "@/app/assets/img/linkedin.png";
import f5 from "@/app/assets/img/instagram.png";
import f6 from "@/app/assets/img/youtube.png";

function Footer() {
  return (
    <div className="relative">
      <div className="bg-[#D8F6CF] w-[80%] rounded-lg flex flex-wrap justify-around items-center absolute left-[10%] top-[-10%]">
        <p className="text-[52px] font-medium">
          We Value Our <span className="font-bold">Customers</span>
        </p>
        <div className="bg-[#009846] rounded-lg w-[155px] h-[52px] flex justify-center items-center">
          <p className="font-semibold text-lg text-white ">Get The Quote</p>
        </div>
      </div>
      <div className="bg-[#1F1F1F] flex justify-around flex-wrap pt-[90%] sm:pt-[50%] md:pt-[40%] lg:pt-[10%] px-10  lg:px-0 gap-5 xl:h-[473px]">
        <div className="flex flex-col gap-4">
          <Image src={logo} alt=""/>
          <div className="flex gap-2">
            <Image src={location} className="h-[25px] w-[17px]" alt=""/>
            <p className="text-lg text-[#898989] sm:w-[384px]">
              Shreeji plaza, 201, Main Rd, Valkeshwari, Park Colony, Jamnagar,
              Gujarat 361008
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={call} className="h-[25px] w-[19px]" alt=""/>
            <p className="text-lg text-[#898989]">(+91) 89802 30024</p>
          </div>
          <div className="flex gap-2">
            <Image src={mail} className="h-[25px] w-[19px]" alt=""/>
            <p className="text-lg text-[#898989]">info@operaenergy.in</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-2xl text-white">Quick Link</p>
          <div className="text-[#898989] text-xl">
            <ul className="flex flex-col gap-2">
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">About</p>
              </li>
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">Turn Key EPC Services</p>
              </li>
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">Executed Project</p>
              </li>
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">Captive / Group Captive</p>
              </li>
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">Career</p>
              </li>
              <li>
                <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
                <p className="inline">Blog</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[#898989] text-xl">
          <ul className="flex flex-col gap-2">
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Capex (EPC Model)</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Captive Project Pipeline</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Energy Storage</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Third-Party Power Sale</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Our Clients</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Privacy Policy</p>
            </li>
            <li>
              <Image src={f1} className="w-[18px] h-[20px] inline" alt=""/>
              <p className="inline">Contact Us</p>
            </li>
          </ul>
        </div>
        <div className="text-[#898989] text-xl">
          <ul className="flex flex-col gap-4">
            <li>
              <Image src={f2} className="w-[18px] h-[20px] inline mr-2" alt=""/>
              <p className="inline">Facebook</p>
            </li>
            <li>
              <Image src={f3} className="w-[18px] h-[20px] inline mr-2" alt=""/>
              <p className="inline">Twitter</p>
            </li>
            <li>
              <Image src={f4} className="w-[18px] h-[20px] inline mr-2" alt=""/>
              <p className="inline">LinkedIn</p>
            </li>
            <li>
              <Image src={f5} className="w-[18px] h-[20px] inline mr-2" alt=""/>
              <p className="inline">Instagram</p>
            </li>
            <li>
              <Image src={f6} className="w-[18px] h-[20px] inline mr-2" alt=""/>
              <p className="inline">Youtube</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-[#009846] text-white">
        <p>Copyright © 2022 Operaenergy. All Rights Reserved.Powered by Sauratech</p>
      </div>
    </div>
  );
}

export default Footer;
