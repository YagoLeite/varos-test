"use client";
import React, { useState } from "react";
import {
  CloseIcon,
  DividerIcon,
  HamburgIcon,
  RightArrowIcon,
  UserIcon,
} from "../svgs/Icon";
import { AnimatePresence, motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    height: "1000px",
    width: "100%",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: {
    height: "20px",
    width: "40px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const contentVariants: Variants = {
  open: { opacity: 1, transition: { delay: 0.7, duration: 1 } },
  closed: { opacity: 0 },
};

type NavProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }: NavProps) => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <div className="">
        <div onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <CloseIcon /> : <HamburgIcon />}
        </div>
      </div>
      <motion.div
        variants={variants}
        className="w-full bg-wrapperBlack max-w-[390px] flex flex-col justify-end items-end"
        animate={isOpen ? "open" : "closed"}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={contentVariants}
              initial="closed"
              animate={"open"}
              exit="closed"
              className="w-full h-full flex flex-col items-center  "
            >
              <DividerIcon />
              <div className="flex flex-col gap-[40px] w-full max-w-[340px] mt-[54px] ">
                {/* Botoes */}
                <div className="flex flex-col gap-[16px]">
                  <button className="flex justify-center items-center gap-[16px] py-[10px] rounded-[4px] border border-navButton w-full min-w-[280px] max-w-[336px] ">
                    <UserIcon />
                    <p className="text-[18px] font-semibold ">ENTRAR</p>
                  </button>
                  <button className="flex justify-center items-center gap-[16px] rounded-[4px] py-[10px] border border-navButton bg-navButtonGreen w-full min-w-[280px] max-w-[336px] ">
                    <p className="text-[18px] font-semibold text-black ">
                      ASSINAR AGORA
                    </p>
                  </button>
                </div>

                {/* Produtos */}
                <div className="bg-inputBackground rounded-[8px] flex flex-col py-[26px] ">
                  <h1 className="text-[16px] font-[700] pl-[20px] ">
                    Produtos
                  </h1>

                  <div className="h-[1px] bg-dividerGray w-full mt-[21px] mb-[32px] " />
                  <div className="flex flex-col gap-[24px] ">
                    <div className="flex flex-col gap-[8px] px-[20px] ">
                      <div className="flex justify-between">
                        <h1 className="text-[16px] font-[600] ">Carteiras</h1>
                        <RightArrowIcon />
                      </div>
                      <p className="text-customGray text-[12px] font-[400] max-w-[85%] ">
                        Aprenda a encontrar as melhores ações, invista seu
                        dinheiro de maneira inteligente e construa um futuro
                        financeiro sólido.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[8px] px-[20px] ">
                      <div className="flex justify-between">
                        <h1 className="text-[16px] font-[600] ">Cursos</h1>
                        <RightArrowIcon />
                      </div>
                      <p className="text-customGray text-[12px] font-[400] max-w-[85%] ">
                        Aprenda a encontrar as melhores ações, invista seu
                        dinheiro de maneira inteligente e construa um futuro
                        financeiro sólido.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[8px] px-[20px] ">
                      <div className="flex justify-between">
                        <h1 className="text-[16px] font-[600] ">Consultoria</h1>
                        <RightArrowIcon />
                      </div>
                      <p className="text-customGray text-[12px] font-[400] max-w-[85%] ">
                        Aprenda a encontrar as melhores ações, invista seu
                        dinheiro de maneira inteligente e construa um futuro
                        financeiro sólido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px] mt-[64px] ">
                <h1 className="text-[16px] font-[700] pl-[50px] ">Blog</h1>
                <DividerIcon />
                <h1 className="text-[16px] font-[700] pl-[50px] ">
                  Quem somos
                </h1>
                <DividerIcon />
                <h1 className="text-[16px] font-[700] pl-[50px] ">Conteúdos</h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Nav;
