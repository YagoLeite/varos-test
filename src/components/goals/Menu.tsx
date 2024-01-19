"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedWrapper from "../animations/AnimatedWrapper";

type DropdownItem = {
  icon: JSX.Element; // Substitua por seu componente de ícone
  label: string;
};

type DropdownProps = {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  setSelected: (title: string) => void;
  setOption: (number: number) => void;
};

type MenuProps = {
  selectedDropdown: string | null;
  setSelectedDropdown: (title: string | null) => void;
  setOption: (number: number) => void;
};

const containerVariants = {
  open: {
    maxHeight: "1000px",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  closed: {
    maxHeight: "0px",
    opacity: 0,
    transition: {
      duration: 0,
      //   ease: "easeOut",
      //   when: "afterChildren",
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  isOpen,
  setSelected,
  setOption,
}) => {
  return (
    <div className="w-[270px] mobile:w-full flex flex-col gap-[16px] text-[14px] ">
      <button
        onClick={() => setSelected(title)}
        className="flex tablet:w-[270px] mobile:w-full h-[64px] bg-featuredCardBlack rounded-[40px] justify-center gap-2 items-center "
      >
        {title} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      <AnimatePresence initial={false} mode={"popLayout"}>
        {isOpen && (
          <motion.div
            key="content" // Chave constante para o conteúdo
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="origin-top tablet:w-[270px] mobile:w-full rounded-[32px] bg-featuredCardBlack border gap-[22px] flex flex-col border-secondGray py-[32px] items-center"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setOption(index)}
                className="rounded-[32px] flex items-center justify-center gap-[16px] tablet:w-[270px] mobile:w-full bg-purple-400 max-w-[213px] p-[16px]"
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({
  selectedDropdown,
  setSelectedDropdown,
  setOption,
}) => {
  const dropdowns = [
    {
      title: "Carteiras",
      items: [
        // Substitua pelo seu componente de ícone e rótulos apropriados
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
        {
          icon: <div className="bg-blue-500 w-4 h-4" />,
          label: "Carteira FATOR",
        },
        {
          icon: <div className="bg-yellow-500 w-4 h-4" />,
          label: "Carteira Dividendos",
        },
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
      ],
    },
    {
      title: "Cursos",
      items: [
        // Substitua pelo seu componente de ícone e rótulos apropriados
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
        {
          icon: <div className="bg-blue-500 w-4 h-4" />,
          label: "Carteira FATOR",
        },
        {
          icon: <div className="bg-yellow-500 w-4 h-4" />,
          label: "Carteira Dividendos",
        },
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
      ],
    },
    {
      title: "Consultoria",
      items: [
        // Substitua pelo seu componente de ícone e rótulos apropriados
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
        {
          icon: <div className="bg-blue-500 w-4 h-4" />,
          label: "Carteira FATOR",
        },
        {
          icon: <div className="bg-yellow-500 w-4 h-4" />,
          label: "Carteira Dividendos",
        },
        {
          icon: <div className="bg-green-500 w-4 h-4" />,
          label: "Carteira Seleção",
        },
      ],
    },
  ];

  return (
    <div className="w-full tablet:w-[300px] ">
      <AnimatedWrapper from="left">
        <div className="p-4 space-y-2">
          {dropdowns.map((dropdown) => (
            <Dropdown
              key={dropdown.title}
              title={dropdown.title}
              items={dropdown.items}
              isOpen={selectedDropdown === dropdown.title}
              setSelected={setSelectedDropdown}
              setOption={setOption}
            />
          ))}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Menu;
