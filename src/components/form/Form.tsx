import React from "react";
import { useForm } from "react-hook-form";

const Form: React.FC = () => {
  //   const a = useForm();
  return (
    <form className="bg-featuredCardBlack border rounded-[24px] border-secondGray w-full max-w-[564px] h-[385px] flex flex-col px-[50px] gap-[24px] justify-center">
      <input
        type="text"
        placeholder="Nome"
        className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
      />
      <input
        type="tel"
        placeholder="Celular"
        className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-[10px] rounded-[4px] hover:bg-blue-600 w-full"
      >
        QUERO ME INSCREVER
      </button>
    </form>
  );
};

export default Form;
