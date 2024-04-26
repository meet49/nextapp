import Image from "next/image";
import React from "react";
function Banner() {
  return (
    <>
    <div className="bg-[url('../../public/banner.png')] bg-no-repeat bg-cover h-fit  xl:h-screen">
      <div className="w-[51%] flex flex-col gap-10 pl-10 sm:pl-28 pt-48 pb-48"> 
        <p className="text-[64px] font-medium text-white ">
          Best Wind Energy Companies In{" "}
          <span className="font-bold"> Tamilnadu India.</span>
        </p>
        <p className="text-white sm:w-[100%] xl:w-[55%]">   
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard.
        </p>
        <div className="bg-[#FFFFFF] rounded-lg w-[155px] h-[52px] flex justify-center items-center">
          <p className="font-semibold text-lg text-[#009846] ">Read More</p>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Banner;
