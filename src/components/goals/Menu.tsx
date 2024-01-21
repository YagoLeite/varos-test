"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import { DropdownData } from "@/data/DropdownData";

type DropdownItem = {
  icon: JSX.Element;
  label: string;
};

type DropdownProps = {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  setSelected: (title: string) => void;
  setOption: (number: number) => void;
  option: number;
};

type MenuProps = {
  selectedDropdown: string;
  setSelectedDropdown: (title: string) => void;
  setOption: (number: number) => void;
  option: number;
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
  option,
}) => {
  return (
    <div className="tablet:w-[270px] desktop:w-[270px] mobile:w-full flex flex-col gap-[16px] text-[14px] ">
      <button
        onClick={() => {
          setSelected(title);
          setOption(0);
        }}
        className={`flex tablet:w-[270px] mobile:w-full h-[64px] ${
          isOpen ? "bg-inputBackground" : "bg-featuredCardBlack"
        } rounded-[40px] justify-center gap-2 items-center`}
      >
        {title} <span>{!isOpen ? "▶" : "▼"}</span>
      </button>
      <AnimatePresence initial={false} mode={"popLayout"}>
        {isOpen && (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="origin-top tablet:w-[270px] mobile:pl-[32px] tablet:pl-[0px] desktop:pl-[0px] mobile:w-full rounded-[32px] bg-featuredCardBlack border gap-[22px] flex flex-col border-secondGray py-[32px] desktop:items-center tablet:items-center mobile:items-start "
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setOption(index)}
                className={`rounded-[32px] ${
                  option === index && "bg-inputBackground"
                } flex items-center justify-start gap-[16px] cursor-pointer tablet:w-[270px] mobile:w-full  max-w-[213px] py-[16px] pl-[25px] `}
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
  option,
}) => {
  return (
    <AnimatedWrapper from="left">
      <div className="flex w-full  mobile:justify-center tablet:justify-start desktop:justify-start">
        <div className="p-4 space-y-2 w-full">
          {DropdownData.map((dropdown) => (
            <Dropdown
              key={dropdown.title}
              title={dropdown.title}
              items={dropdown.items}
              isOpen={selectedDropdown === dropdown.title}
              setSelected={setSelectedDropdown}
              setOption={setOption}
              option={option}
            />
          ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Menu;
