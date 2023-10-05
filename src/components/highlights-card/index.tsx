import React from "react";

interface Props {
  title: string;
  value: number;
  measure: string;
  children?: React.ReactNode;
}

const HighlightsCard = ({ title, value, measure, children }: Props) => {
  return (
    <div className="h-[200px] w-[330px] bg-[#1E213A] flex justify-center items-center flex-col">
      <p className="text-base text-[#E7E7EB]">{title}</p>
      <h1 className="text-[64px] font-bold text-[#E7E7EB]">
        {value}
        <span className="text-[36px]">{measure}</span>
      </h1>
      {children}
    </div>
  );
};

export default HighlightsCard;
