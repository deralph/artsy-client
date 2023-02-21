import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Title: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <p className=" relative font-primary text-primary font-black text-3xl text-center w-4/5 mx-auto my-6">
      {title}
      <BsArrowLeftSquareFill
        onClick={() => navigate(-1)}
        className="text-4xl absolute top-[50%] -translate-y-[50%] -left-[3%]"
      />
    </p>
  );
};

export default Title;
