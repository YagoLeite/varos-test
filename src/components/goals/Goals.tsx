"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import Graph from "./Graph";

const Goals: React.FC = () => {
  const [selectedDropdown, setSelectedDropdown] = useState<string>("Carteiras");

  const [option, setOption] = useState(0);

  return (
    <div className="w-full flex flex-col gap-[48px] ">
      <div className="flex flex-col w-full gap-[16px] desktop:max-w-[648px] tablet:max-w-[487px] ">
        <h1 className="font-extrabold  text-[24px] tablet:text-[38px] desktop:text-[38px] ">
          Simplifique seus investimentos e alcance seus objetivos{" "}
        </h1>
        <p className="font-medium text-[18px] max-w-[469px]">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>
      <div className="flex flex-col desktop:flex-row tablet:flex-row ">
        <Menu
          selectedDropdown={selectedDropdown}
          setSelectedDropdown={setSelectedDropdown}
          setOption={setOption}
          option={option}
        />
        <Graph option={option} selectedDropdown={selectedDropdown} />
      </div>
    </div>
  );
};

export default Goals;
