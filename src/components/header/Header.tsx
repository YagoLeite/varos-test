"use client";
import React, { useState } from "react";
import { CartIcon, UserIcon, VarosTextLogo } from "../svgs/Icon";
import Nav from "./Nav";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-start h-[64px] max-h-[64px] pt-[35px] ">
      <div className="logo mobile:hidden tablet:block desktop:block ">
        <VarosTextLogo />
      </div>
      <div className="logo mobile:block tablet:hidden desktop:hidden ">
        {!isOpen && <VarosTextLogo />}
      </div>

      <div className="menu desktop:flex tablet:hidden mobile:hidden gap-[80px] font-[14px] ">
        <a href="#" className=" hover:text-gray-200">
          Produtos
        </a>
        <a href="#" className=" hover:text-gray-200">
          Blog
        </a>
        <a href="#" className=" hover:text-gray-200">
          Conteúdos
        </a>
        <a href="#" className=" hover:text-gray-200">
          Quem Somos
        </a>
      </div>

      <div className="actions desktop:flex tablet:hidden mobile:hidden gap-[12px]">
        <a
          href="#"
          className="flex gap-[16px] jusitfy-center items-center hover:text-gray-200"
        >
          <CartIcon /> <span>Assinar Agora</span>
        </a>
        <a
          href="#"
          className="flex gap-[16px] jusitfy-center items-center hover:text-gray-200"
        >
          <UserIcon /> <span>Entrar</span>
        </a>
      </div>

      <div className="desktop:hidden tablet:block mobile:block items-end w-full flex relative z-20">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
