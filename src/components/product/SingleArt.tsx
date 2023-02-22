import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaClock, FaFilter, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const SingleArt: React.FC = () => {
  const navigate = useNavigate();

  const [bid, setBid] = useState<number>(100);
  return (
    <section>
      <Navbar />
      <section className="w-[70vw] md:w-[90vw]  mx-auto">
        <div className="border-b-2 border-solid border-primary flex justify-between items-center  mx-auto my-4 pb-4 pr-[12%] lg:pr-0">
          <BsArrowLeftSquareFill
            className="text-4xl sm:text-2xl"
            onClick={() => navigate(-1)}
          />
          <form className="flex justify-between items-center p-1 bg-[#EFEFEFB2]">
            <input
              type="text"
              placeholder="search all categories of artwork here ..."
              className="w-[40vw] sm:w-[67vw] p-3 sm:p-2 bg-transparent"
            />
            <button className="bg-primary text-white py-3 px-6 ml-4 font-primary text-xl font-bold sm:hidden">
              Search
            </button>
            <FaSearch className="bg-[#1E1E1E] text-white   font-primary font-bold text-3xl p-1 hidden sm:block" />
          </form>
          <RiEqualizerLine className="bg-slate-300 p-1 text-4xl sm:text-2xl sm:hidden" />
        </div>
        <img
          src="/facelessart.png"
          alt="product pics"
          className="w-[60%] mx-auto h-[60vh] min-h-[400px] m-8 "
        />
        <div className="flex items-center justify-between p-6 border-y-2 border-solid border-primary">
          <div className="flex items-center">
            <MdVerified className="text-2xl" />{" "}
            <p className="ml-6 sm:ml-2 text-primary text-xl sm:text-base capitalize font-bold">
              raphael ayo
            </p>{" "}
          </div>
          <div className="flex items-center">
            <FaClock />{" "}
            <p className="ml-6 sm:ml-2 text-primary text-xl sm:text-base capitalize font-bold">
              1hr 30m
            </p>{" "}
          </div>
        </div>
        <article className="my-8">
          <h2 className="text-3xl sm:text-xl font-extrabold text-primary ">
            The Faceless
          </h2>
          <p className="text-xl sm:text-base text-primary mt-4 font-semibold w-3/5 lg:w-4/5 sm:w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores inventore, fugiat quidem officiis laborum minima corrupti
            sit temporibus ipsa odit delectus magnam. Ut libero fugit vitae
            reprehenderit. Ex, deserunt.
          </p>
        </article>
        <article className=" border-t border-solid border-[#000000cc] px-[5%]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col my-4">
              <p className="font-bold text-4xl sm:text-2xl mt-6">Category</p>
              <p className="text-xl font-medium mt-4">Oil Painting</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-4xl sm:text-2xl mt-6">Size</p>
              <p className="text-xl font-medium mt-4">10 x 16 </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col my-4">
              <p className="font-bold text-4xl sm:text-2xl mt-6">
                Market Price
              </p>
              <p className="text-xl font-medium mt-4">$999.99</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-4xl sm:text-2xl mt-6">Bids</p>
              <p className="text-xl font-medium mt-4">38 </p>
            </div>
          </div>
        </article>
        <p className="font-semibold mt-10">My Bid</p>
        <div className="flex items-center mt-4">
          <FaMinus
            onClick={() => setBid((prev) => prev - 1)}
            className="bg-primary mr-4 text-white p-2 text-3xl"
          />
          <p className="text-xl font-semibold">{`$${bid}.00`}</p>
          <FaPlus
            onClick={() => setBid((prev) => prev + 1)}
            className="bg-primary text-white p-2 ml-4 text-3xl"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button className="border-2 w-2/5 sm:w-4/5 sm:text-base text-xl border-solid border-primary py-2  font-bold">
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center mt-6 mb-[5%]">
          <button className="w-2/5 sm:w-4/5 sm:text-base text-xl bg-primary my-2 text-white py-2  font-bold">
            Place A Bid
          </button>
        </div>
      </section>
    </section>
  );
};

export default SingleArt;
