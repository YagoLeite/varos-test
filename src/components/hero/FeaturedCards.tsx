import React, { ReactNode } from "react";

interface FeaturedCardsProps {
  children: ReactNode;
  style?: React.CSSProperties; // Adicionando a propriedade de estilo opcional
}

const FeaturedCards: React.FC<FeaturedCardsProps> = ({ children, style }) => {
  return (
    <div
      className="bg-featuredCardBlack py-[8px] border border-featuredCardGray w-fit h-[62px] flex gap-[13px] px-[13px] rounded-[16px] items-center justify-start"
      style={style} // Aplicando o estilo
    >
      {children}
    </div>
  );
};

export default FeaturedCards;
