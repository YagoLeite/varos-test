import React from "react";
import { CartIcon, UserIcon, VarosTextLogo } from "../svgs/Icon";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-fit pt-10px ">
      {/* Parte do Logo */}
      <div className="logo">
        <VarosTextLogo />
      </div>

      {/* Parte dos Quatro Textos */}
      <div className="menu flex gap-[80px] font-[14px] ">
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

      {/* Parte dos Dois Textos */}
      <div className="actions flex gap-[12px]">
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
    </header>
  );
};

export default Header;
