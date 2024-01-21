import React from "react";

const Footer = () => {
  return (
    <div className="h-full w-full flex mobile:flex-col tablet:flex-col desktop:flex-row   ">
      <div className="flex flex-col flex-grow  justify-between ">
        <div
          className="w-[94px] h-[153px] bg-cover bg-center"
          style={{ backgroundImage: "url('/Logo.png')" }}
        />
        <div className="text-[14px] font-medium ">
          <p>VAROS 2023</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
      <div className="flex gap-[24px] flex-wrap w-full justify-between ">
        <div className="flex flex-col gap-[24px] text-[16px] font-medium max-w-[172px] ">
          <h1 className="text-[20px] font-bold ">Cursos</h1>
          <p>Valuation do Zero ao Avançado 2.0</p>
          <p>Código.py</p>
          <p>Minicurso Reels</p>
          <p>Enciclopédia de FII</p>
        </div>
        <div className="flex flex-col gap-[24px] text-[16px] font-medium max-w-[172px] ">
          <h1 className="text-[20px] font-bold ">Carteiras</h1>
          <p>Carteira FATOR</p>
          <p>Carteira Seleção</p>
          <p>Carteira Essencial</p>
          <p>Carteira Small Caps</p>
          <p>Carteira dividendos</p>
          <p>Carteira de FIIs</p>
        </div>
        <div className="flex flex-col gap-[24px] text-[16px] font-medium max-w-[172px] ">
          <h1 className="text-[20px] font-bold ">Sobre</h1>
          <p>Quem somos </p>
        </div>
        <div className="flex flex-col gap-[24px] text-[16px] font-medium max-w-[172px] ">
          <h1 className="text-[20px] font-bold ">Redes Sociais</h1>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
