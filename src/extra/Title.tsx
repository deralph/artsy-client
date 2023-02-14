import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <p className=" relative font-primary text-primary font-black text-3xl text-center">
      {title}
      <BsArrowLeftSquareFill className="text-4xl absolute top-[50%] -translate-y-[50%] -left-[3%]" />
    </p>
  );
};

export default Title;
