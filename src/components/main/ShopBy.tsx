import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { shop } from "../../store/side.slice";

const ShopBy: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section className=" w-full h-full z-40 absolute grid place-content-center bg-[#00000080]">
      <ul className="bg-white w-[400px] ">
        <li className="relative font-primary font-black text-primary  px-[10%] text-center text-xl  border-solid border-b border-[#000000] py-7">
          SHOP BY
          <span className="absolute right-3 ">
            {" "}
            <FaTimes
              className="font-extralight"
              onClick={() => dispatch(shop(false))}
            />
          </span>
        </li>
        <li className="font-primary font-medium text-primary  px-[10%] text-center opacity-60 text-xl border-solid border-b border-[#00000059] py-7">
          Price- Low to High
        </li>
        <li className="font-primary font-medium text-primary  px-[10%] text-center opacity-60 text-xl border-solid border-b border-[#00000059] py-7">
          Price- High to Low
        </li>
        <li className="font-primary font-medium text-primary  px-[10%] text-center opacity-60 text-xl border-solid border-b border-[#00000059] py-7">
          Popularity
        </li>
        <li className="font-primary font-medium text-primary py-7 px-[10%] text-center opacity-60 text-xl">
          New Arrivals
        </li>
      </ul>
    </section>
  );
};

export default ShopBy;
