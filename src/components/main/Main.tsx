import React from "react";
import Navbar from "../navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiEqualizerLine } from "react-icons/ri";
import Slider_ from "./Slider";
import Arts from "./Arts";

const Main: React.FC = () => {
  return (
    <section className="">
      <Navbar />
      <form className="mt-4 pr-[20%] py-4 items-center justify-between flex mx-auto w-[90%] border-[#00000080] border-b border-solid">
        <div className="flex justify-between basis-4/5">
          <GiHamburgerMenu className="text-5xl p-3 bg-[#F4F4F4] text-[#1E1E1E]" />
          <div className="flex bg-[#EFEFEFB2] basis-[90%] rounded-lg p-1 ">
            <input
              type="text"
              placeholder="Search all categories of artworks here..."
              className="bg-transparent w-full font-primary font-bold opacity-50 p-2 placeholder:text-center text-xl"
            />
            <button className="bg-[#1E1E1E] text-white rounded-lg w-[140px] font-primary font-bold text-xl ">
              Search
            </button>
          </div>
        </div>
        <RiEqualizerLine className="bg-[#EFEFEFB2] text-primary p-2 text-4xl" />
      </form>
      <div className="mt-8 ml-[5%]">
        <p className="font-primary text-primary font-bold text-3xl pb-1">
          What’s New
        </p>
        <p className="font-primary text-black font-medium text-sm">
          Trending arts from new creators
        </p>
      </div>
      <Slider_ />
      <Arts />
    </section>
  );
};

export default Main;
