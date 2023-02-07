import React from "react";
import Navbar from "../navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiEqualizerLine } from "react-icons/ri";
import Slider from "./Slider";
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
      <Slider />
      <Arts />
      <section className="relative w-[90%] h-[60vh] mx-auto my-6 dark ">
        <img
          src="/facelessArt.png"
          className="absolute w-full h-full  "
          alt="facelessArt"
        />
        <div className=" w-[45%] absolute z-30 right-0 pt-3">
          <p className="font-primary font-black text-xl text-white opacity-60 ">
            ARTPIECE OF THE WEEK
          </p>
          <p className="font-primary font-black text-4xl text-white dash">
            THE FACELESS
          </p>
          <p className="font-secondary text-white font-normal text-[39px]">
            $999.9
          </p>
          <p className="font-primary font-black text-xl text-white opacity-60 ">
            DESCRIPTION
          </p>
          <p className="font-primary font-bold text-2xl text-white">
            An oil painting painted in the mid 90’s inspired by how people feel
            deep down, unable to express true emotions and desires.
          </p>
          <div className="flex justify-between items-center">
            <button className="p-4 bg-primary text-white rounded font-primary font-bold text-2xl">
              Bid
            </button>
            <button className="p-4 text-primary bg-white rounded  font-primary font-bold text-2xl ">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
