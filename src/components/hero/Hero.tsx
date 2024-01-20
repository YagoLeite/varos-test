import React from "react";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import CircleFillButton from "../animations/CircleFillButton";
import FeaturedCards from "./FeaturedCards";
import {
  BarGraphIcon,
  BlueElipse,
  MarqueeIconFive,
  MarqueeIconFour,
  MarqueeIconOne,
  MarqueeIconThree,
  MarqueeIconTwo,
  PowerButtonIcon,
  SmallWhiteElipse,
  ThirdIcon,
} from "../svgs/Icon";
import Marquee from "react-fast-marquee";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-grow justify-center items-center gap-10 ">
      <div className="w-full overflow-hidden h-fit ">
        <AnimatedWrapper from="left">
          <div className="w-full max-w-[664px]  flex flex-col gap-[24px]">
            <h1 className="font-extrabold  text-[38px] tablet:text-[50px] desktop:text-[64px] ">
              Investir de forma mais inteligente passa por aqui.
            </h1>
            <p className="font-semibold text-[18px] max-w-[469px]">
              Fazemos de tudo para que você possa conquistar seus sonhos da
              melhor forma possível.
            </p>

            <CircleFillButton />
            <div className="rounded-[24px] border border-featuredCardGray py-[20px] mt-[80px] ">
              <Marquee>
                {/* <div className="flex gap-[110px]"> */}
                <div className="mx-[55px]">
                  <MarqueeIconOne />
                </div>
                <div className="mx-[55px]">
                  <MarqueeIconTwo />
                </div>
                <div className="mx-[55px]">
                  <MarqueeIconThree />
                </div>
                <div className="mx-[55px]">
                  <MarqueeIconFour />
                </div>
                <div className="mx-[55px]">
                  <MarqueeIconFive />
                </div>
                {/* </div> */}
              </Marquee>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
      <div className="w-[50%] hidden tablet:flex desktop:flex overflow-hidden h-fit   ">
        <AnimatedWrapper from="right">
          <div className="w-full  flex flex-col gap-[70px]  items-start  pb-[15px]  ">
            <div className="relative ">
              <FeaturedCards style={{ marginLeft: "10px" }}>
                <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                  <PowerButtonIcon />
                </div>
                <p>Carteira FATOR</p>
              </FeaturedCards>
              <div className="absolute top-[-40%] left-[55%] blur-[5px]  z-0 ">
                <BlueElipse />
              </div>
            </div>

            <div className="relative">
              <FeaturedCards style={{ marginLeft: "40px" }}>
                <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                  <BarGraphIcon />
                </div>
                <p>Carteira de Dividendos</p>
              </FeaturedCards>
              <div className="absolute top-[-40%] left-[-5%] blur-[5px]  z-0 ">
                <SmallWhiteElipse />
              </div>
            </div>

            <div className="relative ">
              <FeaturedCards style={{ marginLeft: "10px" }}>
                <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                  <ThirdIcon />
                </div>
                <p>Codigo.py</p>
              </FeaturedCards>
              <div className="absolute top-[-40%] left-[55%]  z-0 blur-[5px]  ">
                <BlueElipse />
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Hero;
