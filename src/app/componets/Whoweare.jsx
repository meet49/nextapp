import Image from "next/image";
import React from "react";
import w6 from "@/app/assets/img/w6.png";
import w3 from "@/app/assets/img/w3.png";
import w5 from "@/app/assets/img/w5.png";
import w4 from "@/app/assets/img/w4.png";

function Whoweare() {
  return (
    <div className="my-20 sm:ml-16 mb-96 lg:mb-0">
      <div className="bg-[url('../../public/bg1.png')] bg-no-repeat bg-cover h-fit xl:h-screen flex relative md:p-10">
        <div className="lg:w-[50%] w-[100%] opacity-15 lg:opacity-100">
          <Image src={w6} />
        </div>
        <div className="w-[100%] lg:w-[50%] px-[3%] pt-[2%] 2xl:pr-[11%] absolute lg:relative flex flex-col justify-start items-center  lg:items-start
         ">
          <div>
            <Image src={w3}  className="inline pr-2"/>
            <p className="font-medium text-2xl inline italic">WHO WE ARE</p>
          </div>
          <p className="font-medium text-[52px]">
            The Best Solution Provider For{" "}
            <span className="font-bold">Green Energy</span>
          </p>
          <p className="text-xl pb-2">
            We have a team of domain experts who strive for excellence in the
            renewable energy generation sector...
          </p>
          <div className="flex gap-5 ">
            <div>
              <Image src={w4} className="lg:animate-spin"/>
              <p className="font-semibold text-[28px]">1. Our Culture</p>
              <p className="text-[#787878] text-lg text-justify px-2">
                Our passion to work with the client satisfaction is the source
                of our success. We 100% believe in ethics...
              </p>
            </div>
            <div className="pt-2">
              <Image src={w5} className="lg:animate-pulse"/>
              <p className="font-semibold text-[28px]">2. Our Productivity</p>
              <p className="text-[#787878] text-lg text-justify px-5">
                We take pride in successfully executing 1.30 GW+ and pipelining
                renewable energy projects of capacity of 1GW in next...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
