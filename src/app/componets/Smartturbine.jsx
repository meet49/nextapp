import Image from "next/image";
import React from "react";
import s1 from "@/app/assets/img/s1.png";
import s2 from "@/app/assets/img/s2.png";
import s3 from "@/app/assets/img/s3.png";
import s4 from "@/app/assets/img/s4.png";
import s5 from "@/app/assets/img/s5.png";
import fan from "@/app/assets/img/fan.png";

function Smartturbine() {
  return (
    <div className="bg-[url('../../public/bg2.png')] bg-no-repeat h-screen bg-cover text-white">
      <div className="flex flex-col justify-center items-center gap-2 pt-5 sm:pt-10">
        <div>
          <Image src={s1} className="inline pr-2" alt=""/>
          <p className="font-medium text-2xl inline italic">SMART TURBINE</p>
        </div>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="flex xl:flex-row flex-col  justify-center items-center gap-20 relative    animate-myfirst"> 
        <div className="flex flex-col gap-8 pt-2 sm:pt-10  animate-myfirst">
          <div className="bg-white inline-flex rounded-lg px-10 z-10 ">
            <Image src={s2} width={"94"} height={"94"} alt=""/>
            <div>
              <p className="text-[#1F1F1F] font-bold sm:text-[52px] text-[25px]">110+</p>
              <p className="text-[#898989] font-medium text-[18px]">
                Project Completed
              </p>
            </div>
          </div>
          <div className="bg-white inline-flex rounded-lg px-10 z-10 ">
            <Image src={s3} width={"94"} height={"94"} alt=""/>
            <div>
              <p className="text-[#1F1F1F] font-bold sm:text-[52px] text-[25px]">11+</p>
              <p className="text-[#898989] font-medium text-[18px]">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>
        <div className="opacity-25 xl:opacity-100 absolute top-0 xl:relative z-0 sm:animate-spin">
          <Image src={fan} alt=""/>
        </div>
        <div className="flex flex-col gap-8 absolute top-[110%] xl:relative">
          <div className="bg-white inline-flex rounded-lg px-10 ">
            <Image src={s4} width={"94"} height={"94"} alt=""/>
            <div>
              <p className="text-[#1F1F1F] font-bold sm:text-[52px] text-[25px]">90+</p>
              <p className="text-[#898989] font-medium text-[18px]">
                Professional Staff
              </p>
            </div>
          </div>
          <div className="bg-white inline-flex rounded-lg px-10 ">
            <Image src={s5} width={"94"} height={"94"} alt=""/>
            <div>
              <p className="text-[#1F1F1F] font-bold sm:text-[52px] text-[25px]">170+</p>
              <p className="text-[#898989] font-medium text-[18px]">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smartturbine;
