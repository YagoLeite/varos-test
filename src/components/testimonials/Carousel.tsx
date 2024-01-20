"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const data: string[] = [
  "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
  "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
  "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
];

const cardVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Carousel: React.FC = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % data.length);
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className=" w-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <CarouselCard position={position} key={data[position]} />
      </AnimatePresence>
    </div>
  );
};

type CarouselCardProps = {
  position: number;
};

function CarouselCard({ position }: CarouselCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-featuredCardBlack border rounded-[24px] border-secondGray w-[372px] h-[385px] flex jusitfy-center items-center px-[48px]  py-[24px] "
    >
      <div className="flex flex-col gap-[16px] w-full h-fit  ">
        <div className="h-[25px] w-fit overflow-hidden  flex justify-center items-center ">
          <h1 className="text-quoteGreen text-[38px] font-black  ">“</h1>
        </div>
        <p className="text-[18px] font-medium ">{data[position]}</p>
        <p className="text-[18px] font-medium italic ">Assinante VAROS</p>
      </div>
    </motion.div>
  );
}

export default Carousel;
