import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux/es/exports";
import { side } from "../../store/side.slice";
import { artTypes, shopBy } from "../database";

const Sidebar: React.FC = () => {
  const [amount, setAmount] = useState<string>();

  const dispatch = useDispatch();

  // Object.keys(artTypes.keyValue);
  return (
    <section className="hide overflow-scroll h-full fixed top-0 left-0 bg-white p-6 min-w-[250px] w-[25%] z-30">
      <FaTimes
        className="py-2 mb-4 text-4xl"
        onClick={() => dispatch(side(false))}
      />
      <p className="text-primary font-primary font-black text-xl flex  justify-between ">
        CATEGORIES{" "}
        <span className="bg-primary p-2 text-white text-sm">
          {" "}
          <FaArrowRight />{" "}
        </span>
      </p>
      <article className="">
        {artTypes.map(({ name, props }, index) => {
          return (
            <div className="mt-6">
              <p className="uppercase text-primary font-primary font-black py-2 items-center text-sm flex justify-between border-solid border-b border-primary">
                {name} <span className="bg-primary w-4 h-1 rounded-sm"></span>
              </p>
              <ul className="mt-3 ">
                {props.map((pop) => (
                  <li className="font-primary font-bold text-xs flex justify-between py-1">
                    {pop}
                    <span className="">(0)</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </article>
      <article className="mt-14">
        <p className=" text-primary font-primary font-black text-base">
          SHOP BY
        </p>
        <div className="h-1 w-1/5 rounded-sm bg-primary"></div>
        {shopBy.map(({ name, props }, index) => {
          return (
            <div className="mt-6">
              <p className="uppercase text-primary font-primary font-black py-2 items-center text-sm flex justify-between border-solid border-b border-primary">
                {name}
              </p>
              <ul className="mt-3 ">
                {props.map((pop) => (
                  <li className="font-primary font-bold text-xs flex justify-between py-1">
                    {pop}
                    <span className="">(0)</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold font-primary opacity-40 text-primary text-xs">
                See More
              </p>
            </div>
          );
        })}
        <div className="mt-6">
          <p className="uppercase text-primary font-primary font-black py-2 items-center text-sm flex justify-between border-solid border-b border-primary">
            PRICE
          </p>
          <input
            type="range"
            min="50"
            max="500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="text-center font-black text-sm font-primary  bg-[#f6f6f6] p-2">
            $ {amount}
          </p>
          <div className="flex justify-between items-center mt-5">
            <p className="bg-[#f6f6f6] text-primary p-2 font-primary font-bold text-xs">
              $50
            </p>
            <p className="bg-primary w-4 h-1 rounded-sm"></p>
            <p className="bg-[#f6f6f6] text-primary p-2 font-primary font-bold text-xs">
              $500
            </p>
            <button className="bg-primary text-white font-primary font-bold p-2 text-xs">
              Search
            </button>
          </div>
        </div>
      </article>
      <ul className="py-8 border-solid border-t border-[##00000080] mt-28">
        <li className="text-black font-primary font-black text-xs py-3">
          About
        </li>
        <li className="text-black font-primary font-black text-xs py-3">
          Customer Services
        </li>
        <li className="text-black font-primary font-black text-xs py-3">
          Artworks
        </li>
        <li className="text-black font-primary font-black text-xs py-3">
          Settungs
        </li>
        <li className="flex justify-between text-black font-primary font-black text-xs py-3">
          My Cart
          <span className="">(0)</span>
        </li>
        <li className="text-black font-primary font-black text-xs py-3">
          My Account
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
