import React from "react";
import { cart } from "../database";

const SingleCart: React.FC<cart> = ({ name, price, size, image }) => {
  return (
    <div className="flex items-center py-6 basis-[43%] sml:basis-[90%] border-solid border-b border-[#00000080]">
      <div className="p-4 bg-[#F6F6F6]">
        <img src={image} alt={name} className="h-[200px]" />
      </div>{" "}
      <div className="ml-[5%]">
        <p className="font-primary font-bold opacity-50 text-primary text-xl sml:text-base">
          {name}
        </p>
        <p className="py-4 font-primary font-black text-primary text-xl sml:text-base">
          {price}
        </p>
        <p className="text-[#1E1E1ECC] font-primary text-xl sml:text-base font-bold">
          {size}
        </p>
      </div>
    </div>
  );
};

export default SingleCart;
