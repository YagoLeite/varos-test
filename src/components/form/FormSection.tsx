import React from "react";
import AnimatedWrapper from "../animations/AnimatedWrapper";
import Form from "./Form";

const FormSection: React.FC = () => {
  return (
    <div className="w-full flex">
      <AnimatedWrapper from="left">
        <div className="w-full">
          <div>
            <h1 className="text-[38px] font-bold ">
              Cadastre-se para receber mais informações.
            </h1>
            <p className="text-[18px] font-bold ">
              Fique ligado no que tem de melhor no Mercado Financeiro.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper from="right">
        <div className="w-full flex justify-center">
          <Form />
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default FormSection;
