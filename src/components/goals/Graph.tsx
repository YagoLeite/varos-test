import React from "react";
import {
  BarGraphIcon,
  HorizontalLinesIcon,
  PowerButtonIcon,
} from "../svgs/Icon";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { DropdownData } from "@/data/DropdownData";

const textVariants: Variants = {
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
  selectedDropdown: string;
};

const Graph: React.FC<GraphProps> = ({
  option,
  selectedDropdown,
}: GraphProps) => {
  const graphData = DropdownData.find(
    (item) => item.title === selectedDropdown
  )?.items;

  return (
    <AnimatedWrapper from="right">
      <div className="w-full flex justify-center h-full relative items-center">
        <div className="relative z-10  desktop:w-[662px] tablet:w-[580px] mobile:w-full gap-[16px] overflow-hidden flex flex-col pl-[41px] pt-[30px] bg-featuredCardBlack rounded-[32px] ">
          <div className="flex gap-[16px] justify-center items-center w-fit overflow-hidden ">
            {graphData?.[option].icon}
            <div className="overflow-hidden min-h-[25px] ">
              <AnimatePresence mode="wait">
                <motion.p
                  key={graphData?.[option].label}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {graphData?.[option].label}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col gap-[1px] w-[355px]  ">
            <div className="overflow-hidden min-h-[110px]  flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={graphData?.[option].title}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-[38px] mobile:text-[24px] font-semibold "
                >
                  {graphData?.[option].title}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="overflow-hidden min-h-[75px]  flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={graphData?.[option].text}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-[16px] font-medium "
                >
                  {graphData?.[option].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-[621px] h-[329px] rounded-[32px]">
            <div
              className="w-[621px] h-[329px] rounded-[32px] bg-cover bg-center"
              style={{ backgroundImage: "url('/varosGraphPicture.png')" }}
            />
          </div>
        </div>
        <div className="absolute w-[438px] h-[444px] rounded-[100px] bg-radial-custom z-0 left-[50%] top-[40%] blur-[15px]  " />
      </div>
    </AnimatedWrapper>
  );
};

export default Graph;
