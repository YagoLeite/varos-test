import React from "react";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import CircleFillButton from "../animations/CircleFillButton";
import FeaturedCards from "./FeaturedCards";
import {
  BarGraphIcon,
  BlueElipse,
  PowerButtonIcon,
  ThirdIcon,
} from "../svgs/Icon";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-grow justify-center items-center gap-10 ">
      <div className="w-full overflow-hidden h-fit ">
        <AnimatedWrapper from="left">
          <div className="w-full max-w-[564px ] flex flex-col gap-[24px]">
            <h1 className="font-extrabold  text-[38px] tablet:text-[50px] desktop:text-[64px] ">
              Investir de forma mais inteligente passa por aqui.
            </h1>
            <p className="font-semibold text-[18px] max-w-[469px]">
              Fazemos de tudo para que você possa conquistar seus sonhos da
              melhor forma possível.
            </p>

            <CircleFillButton />
          </div>
        </AnimatedWrapper>
      </div>
      <div className="w-[50%] flex overflow-hidden h-fit  pt-[36px]">
        <AnimatedWrapper from="right">
          <div className="w-full  flex flex-col gap-[70px]  items-start  ">
            <FeaturedCards style={{ marginLeft: "10px" }}>
              <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                <PowerButtonIcon />
              </div>
              <p>Carteira FATOR</p>
            </FeaturedCards>

            <FeaturedCards style={{ marginLeft: "40px" }}>
              <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                <BarGraphIcon />
              </div>
              <p>Carteira de Dividendos</p>
            </FeaturedCards>
            <FeaturedCards style={{ marginLeft: "10px" }}>
              <div className="w-[51px] h-[46px] rounded-[8px] border border-featuredCardGray flex justify-center items-center">
                <ThirdIcon />
              </div>
              <p>Codigo.py</p>
            </FeaturedCards>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Hero;
