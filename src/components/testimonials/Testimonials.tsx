import React from "react";
import Carousel from "./Carousel";
import AnimatedWrapper from "../animations/AnimatedWrapper";

const Testimonials: React.FC = () => {
  return (
    <div className="w-full flex">
      <AnimatedWrapper from="left">
        <div className="flex flex-col gap-[80px] ">
          <div>
            <h1 className="mobile:text-[30px] tablet:text-[38px] desktop:text-[38px ] font-bold ">
              Didática de verdade
            </h1>
            <p className="text-[18px] font-bold mt-[8px]">
              Garantido seu aprendizado
            </p>
          </div>
          <Carousel />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper from="right">
        <div className="w-full flex flex-col justify-start items-center  ">
          <div
            className="bg-cover bg-center w-[564px] h-[400px] "
            style={{ backgroundImage: "url('/threeGuysImage.png')" }}
          />
          <div className="w-[564px] flex justify-center items-center border rounded-[32px] py-[16px] border-featuredCardGray h-[104px] ">
            <div className="flex gap-[38px] ">
              <div className="max-w-[100px] flex flex-col items-center  ">
                <p className="text-[18px] font-bold ">+1000</p>
                <p className="text-[14px] font-normal text-center ">
                  Nota média geral das aulas
                </p>
              </div>
              <div className="max-w-[100px] flex flex-col items-center  ">
                <p className="text-[18px] font-bold ">4,8/5</p>
                <p className="text-[14px] font-normal text-center ">
                  Nota média geral das aulas
                </p>
              </div>
              <div className="max-w-[100px] flex flex-col items-center  ">
                <p className="text-[18px] font-bold ">10k +</p>
                <p className="text-[14px] font-normal text-center ">
                  Comunidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Testimonials;
