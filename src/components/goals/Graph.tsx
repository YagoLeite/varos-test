import React from "react";
import {
  BarGraphIcon,
  HorizontalLinesIcon,
  PowerButtonIcon,
} from "../svgs/Icon";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import { AnimatePresence, motion } from "framer-motion";

const textVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const data = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
    icon: <HorizontalLinesIcon />,
    name: "Carteira Seleção",
  },
  {
    title: "Perfeito para curtir a Bolsa",
    text: "Juntamos o que há de melhor nas Carteiras VAROS: uma estratégia completa para você ter resultados exponenciais.",
    icon: <PowerButtonIcon />,
    name: "Carteira FATOR",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
    icon: <BarGraphIcon />,
    name: "Carteira Dividendos",
  },
  {
    title: "A combinação perfeita pra você aproveitar a virada da Bolsa",
    text: "Juntamos o que há de melhor nas Carteiras VAROS: uma estratégia completa para você ter resultados exponenciais. ",
    icon: <HorizontalLinesIcon />,
    name: "Carteira Seleção",
  },
];

type GraphProps = {
  option: number;
};

const Graph: React.FC<GraphProps> = ({ option }) => {
  return (
    <AnimatedWrapper from="right">
      <div className="w-full flex justify-center items-center overflow-hidden">
        <div className="desktop:w-[662px] tablet:w-[580px] mobile:w-full desktop:h-[536px] tablet:h-[536px] mobile:h-[580px] gap-[16px] overflow-hidden flex flex-col pl-[41px] pt-[30px] bg-featuredCardBlack rounded-[32px] ">
          <div className="flex gap-[16px] justify-center items-center w-fit overflow-hidden ">
            {data[option].icon}
            <AnimatePresence mode="wait">
              <motion.p
                key={data[option].name}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {data[option].name}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-[16px] w-[355px]  ">
            <AnimatePresence mode="wait">
              <motion.h1
                key={data[option].title}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[38px] mobile:text-[24px] font-semibold "
              >
                {data[option].title}
              </motion.h1>

              <motion.p
                key={data[option].text}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[16px] font-medium "
              >
                {data[option].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-[621px] h-[329px] rounded-[32px]">
            <div
              className="w-[621px] h-[329px] rounded-[32px] bg-cover bg-center"
              style={{ backgroundImage: "url('/varosGraphPicture.png')" }}
            />
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Graph;
