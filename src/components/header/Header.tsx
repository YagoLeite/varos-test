import React from "react";
import { CartIcon, UserIcon, VarosTextLogo } from "../svgs/Icon";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-start h-[64px] max-h-[64px] pt-[10px] ">
      <div className="logo">
        <VarosTextLogo />
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

      <div className="desktop:hidden tablet:block mobile:block items-end relative z-20">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
