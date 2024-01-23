"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    celular: yup.string().required("Celular é obrigatório"),
  })
  .required();

type FormData = {
  nome: string;
  email: string;
  celular: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar o formulário: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData.message);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-featuredCardBlack border rounded-[24px] border-secondGray w-full max-w-[564px] h-[385px] flex flex-col px-[50px] gap-[10px] justify-center"
    >
      <div className="min-h-[70px] ">
        <input
          {...register("nome")}
          type="text"
          placeholder="Nome"
          className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
        />
        {errors.nome && (
          <p className="text-red-500 text-[11px] mt-[5px] ">
            {errors.nome.message}
          </p>
        )}
      </div>
      <div className="min-h-[70px] ">
        <input
          {...register("email")}
          type="email"
          placeholder="Seu melhor e-mail"
          className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
        />
        {errors.email && (
          <p className="text-red-500 text-[11px] mt-[5px] ">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="min-h-[70px] ">
        <input
          {...register("celular")}
          type="tel"
          placeholder="Celular"
          className="p-[10px] w-full bg-inputBackground rounded-[4px] border border-featuredCardGray"
        />
        {errors.celular && (
          <p className="text-red-500 text-[11px] mt-[5px] ">
            {errors.celular.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-navButtonGreen text-black p-[10px] rounded-[4px]  w-full"
      >
        QUERO ME INSCREVER
      </button>
    </form>
  );
};

export default Form;
