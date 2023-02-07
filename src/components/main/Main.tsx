import React from "react";
import Navbar from "../navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiEqualizerLine } from "react-icons/ri";
import Slider from "./Slider";
import Arts from "./Arts";
import Footer from "./Footer";

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
      <section className="relative w-[90%] h-[60vh] mx-auto my-[5%] dark ">
        <img
          src="/facelessArt.png"
          className="absolute w-full h-full  "
          alt="facelessArt"
        />
        <div className=" w-[40%] absolute z-30 right-0 pt-3 top-[10%]">
          <p className="font-primary font-black text-xs text-white opacity-60 ">
            ARTPIECE OF THE WEEK
          </p>
          <p className="font-primary font-black text-2xl pt-2 text-white ">
            THE FACELESS
          </p>
          <p className="w-1/5 bg-white h-1 mt-1 rounded-xl"></p>
          <p className="font-secondary text-white font-normal text-2xl py-2">
            $999.9
          </p>
          <p className="font-primary font-black text-xs text-white opacity-60 ">
            DESCRIPTION
          </p>
          <p className="font-primary font-bold text-xl text-white">
            An oil painting painted in the mid 90’s inspired by how people feel
            deep down, unable to express true emotions and desires.
          </p>
          <div className="flex justify-between items-center w-3/5 my-4">
            <button className="basis-[38%] py-2 px-4 bg-primary text-white rounded font-primary font-bold text-xl">
              Bid
            </button>
            <button className="basis-[55%] py-2 px-4 text-primary bg-white rounded  font-primary font-bold text-xl ">
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto mb-14">
        <p className="font-primary text-primary font-bold text-3xl">Blogs</p>
        <article className="bg-[#F6F6F6] p-[2%] flex justify-evenly items-center">
          <div className="relative">
            <img src="/sellArts.png" alt="sell Arts" className="h-[35vh]" />
            <p className="absolute bg-primary p-2 text-white font-primary font-bold text-sm right-[-10%] top-[-2%]">
              07 <br /> DEC
            </p>
          </div>
          <div className="bg-[#3A3A3A] p-6 basis-1/2">
            <p className="w-auto pb-3 inline text-white font-primary font-bold text-base border-b-4 border-white border-solid">
              Ways to sell your <span className="font-secondary">ARTS</span>{" "}
              online
            </p>
            <p className="mt-6  text-white font-primary font-semibold text-sm">
              To sell art online, you can start by creating an online portfolio
              or website to showcase your work. This will allow potential
              customers to view your art and learn more about you as an artist.
              You can then use social media to promote your art with potential
              buyers. You can also sell your art through online marketplaces
              like Artsy.
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </section>
  );
};

export default Main;
