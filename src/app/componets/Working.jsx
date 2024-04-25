import Image from "next/image";
import React from "react";
import w3 from "@/app/assets/img/p1.png";
import p1 from "@/app/assets/img/p3.png";
import p2 from "@/app/assets/img/p4.png";
import p3 from "@/app/assets/img/p5.png";
import p4 from "@/app/assets/img/p6.png";

function Working() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-10">
        <div>
          <Image src={w3} className="inline pr-2" />
          <p className="font-medium text-2xl inline italic">WORKING PROCESS</p>
        </div>
        <p className="text-[52px] font-medium">
          4 Way To Achive <span className="font-bold">Results</span>
        </p>
        <p className="text-lg w-[37%] text-center">
          Nature driven choice of energy generation is only a way ahead for
          overturning damage made due to climate change.
        </p>
      </div>
      <div className="lg:h-screen w-[100%] flex items-center lg:justify-around px-10 pb-40 lg:flex-row flex-col ">
        

        <div className="w-[25%] h-[489px] flex flex-col justify-between mt-[5%] animate-mysecond">
          <b className="text-[52px] font-bold flex justify-center items-center">
            1<p className="text-2xl font-medium inline">Step</p>
          </b>
          <div className=" flex flex-col justify-center items-center">
            <Image src={p1} className="w-[117px] h-[154px]" />
            <p className="font-semibold text-[28px] text-center">
              Consult With Us
            </p>
            <p className="text-lg text-center">
              Either we or you may approach for consultation for chosen services
              in the energy sector.
            </p>
          </div>
        </div>

        <div className="w-[25%] h-[489px] flex flex-col justify-between mt-[13%]">
          <b className="text-[52px] font-bold flex justify-center items-center">
            2<p className="text-2xl font-medium inline">Step</p>
          </b>
          <div className=" flex flex-col justify-center items-center">
            <Image src={p2} className="w-[117px] h-[153px]" />
            <p className="font-semibold text-[28px] text-center">
              Generate Power
            </p>
            <p className="text-lg text-center">
              Extra Ordinary efforts and in depth knowledge for power generation
              process makes us different.
            </p>
          </div>
        </div>

        <div className="w-[25%] h-[489px] flex flex-col justify-between  mt-[5%]">
          <b className="text-[52px] font-bold flex justify-center items-center">
            3<p className="text-2xl font-medium inline">Step</p>
          </b>
          <div className=" flex flex-col justify-center items-center">
            <Image src={p3} className="w-[105px] h-[140px]" />
            <p className="font-semibold text-[28px] text-center">
              Store The Power
            </p>
            <p className="text-lg text-center">
              Storage and distribution of the power in a state of the art way
              can help you to grow fast.
            </p>
          </div>
        </div>

        <div className="w-[25%] h-[489px] flex flex-col justify-between mt-[13%] ">
          <b className="text-[52px] font-bold flex justify-center items-center">
            4<p className="text-2xl font-medium inline">Step</p>
          </b>
          <div className=" flex flex-col justify-center items-center">
            <Image src={p4} className="w-[105px] h-[155px]" />
            <p className="font-semibold text-[28px] text-center">
              Use It Flexibly
            </p>
            <p className="text-lg text-center">
              Our expertize of generating and regenerating energy with process
              driven usage guidelines is best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
