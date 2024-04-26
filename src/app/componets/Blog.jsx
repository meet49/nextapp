import React from "react";
import w3 from "@/app/assets/img/p1.png";
import b1 from "@/app/assets/img/b1.png";
import b2 from "@/app/assets/img/b2.png";
import b3 from "@/app/assets/img/arrow.png";
import b4 from "@/app/assets/img/arrow2.png";
import b5 from "@/app/assets/img/arrow3.png";
import Image from "next/image";

function Blog() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center pb-10">
        <div>
          <Image src={w3} alt="" className="inline pr-2" />
          <p className="font-medium text-2xl inline italic">OUR BLOG</p>
        </div>
        <p className="text-[52px] font-medium">
          Our Latest <span className="font-bold">Blog</span>
        </p>
      </div>
      <div className="flex gap-5 px-10 justify-center items-center flex-wrap lg:flex-nowrap">
        <div className="bg-[#EDEDED] flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start relative">
          <Image src={b1} alt=""/>
          <div className="pt-5 pl-5">
            <p className="text-lg text-[#666666]">21, January, 2023</p>
            <p className="text-[#599537] font-semibold text-2xl">
              Lorem Ipsum simply
            </p>
            <p className="text-lg text-[#666666]">
              It is a long established fact that a reader will be diable content
              of a page.
            </p>
            <p className="text-[#1F1F1F] text-lg inline-flex">
              Read More <Image src={b3} alt=""/>
            </p>
          </div>
          <Image src={b4} alt="" className="absolute left-[-2%] top-[40%] hidden lg:block"/>
        </div>
        <div className="bg-[#EDEDED] flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start relative">
          <Image src={b2} alt=""/>
          <div className="pt-5 pl-5">
            <p className="text-lg text-[#666666]">21, January, 2023</p>
            <p className="text-[#599537] font-semibold text-2xl">
              Hydrogen Energy
            </p>
            <p className="text-lg text-[#666666]">
              It is a long established fact that a reader will be diable content
              of a page.
            </p>
            <p className="text-[#1F1F1F] text-lg inline-flex">
              Read More <Image src={b3} alt=""/>
            </p>
          </div>
          <Image src={b5} alt="" className="absolute right-[-2%] top-[40%] hidden lg:block"/>

        </div>
      </div>
      <div className="flex justify-center items-center p-10 pb-40">
        <div className="bg-[#009846] rounded-lg w-[155px] h-[52px] flex justify-center items-center">
          <p className="font-semibold text-lg text-white ">Show More</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
