import React, { ReactNode } from "react";

interface FeaturedCardsProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

const FeaturedCards: React.FC<FeaturedCardsProps> = ({ children, style }) => {
  return (
    <div
      className="bg-featuredCardBlack relative py-[8px] z-10 border border-featuredCardGray w-fit min-w-[240px] h-[62px] flex gap-[13px] px-[13px] rounded-[16px] items-center justify-start"
      style={style}
    >
      {children}
    </div>
  );
};

export default FeaturedCards;
