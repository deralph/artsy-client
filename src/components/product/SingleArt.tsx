import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaFilter, FaMinus, FaPlus } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

const SingleArt: React.FC = () => {
  const [bid, setBid] = useState<number>(100);
  return (
    <section>
      <Navbar />
      <section className="w-[80vw] mx-auto">
        <div className="border-b-2 border-solid border-primary flex justify-between items-center  mx-auto my-4 pb-4 pr-[15%]">
          <BsArrowLeftSquareFill className="text-4xl " />
          <form className="flex items-center">
            <input
              type="text"
              placeholder="search all categories of artwork here ..."
              className="bg-slate-300 w-[40vw] p-3"
            />
            <button className="bg-primary text-white py-3 px-6 ml-4 font-primary text-xl font-bold">
              Search
            </button>
          </form>
          <FaFilter className="bg-slate-300 p-1 text-2xl" />
        </div>
        <img
          src="/facelessart.png"
          alt="product pics"
          className="w-[60%] mx-auto h-[60vh] min-h-[400px] m-8 "
        />
        <div className="flex items-center justify-between p-6 border-y-2 border-solid border-primary">
          <div className="flex items-center">
            <BsArrowLeftSquareFill />{" "}
            <p className="ml-6 text-primary text-xl capitalize font-bold">
              raphael ayo
            </p>{" "}
          </div>
          <div className="flex items-center">
            <BsArrowLeftSquareFill />{" "}
            <p className="ml-6 text-primary text-xl capitalize font-bold">
              1hr 30m
            </p>{" "}
          </div>
        </div>
        <article className="my-8">
          <h2 className="text-3xl font-extrabold text-primary ">
            The Faceless
          </h2>
          <p className="text-xl text-primary mt-4 font-semibold w-3/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores inventore, fugiat quidem officiis laborum minima corrupti
            sit temporibus ipsa odit delectus magnam. Ut libero fugit vitae
            reprehenderit. Ex, deserunt.
          </p>
        </article>
        <article className=" border-t border-solid border-[#000000cc] px-[5%]">
          <div className="flex justify-between">
            <div className="flex flex-col my-4">
              <p className="font-bold text-4xl mt-6">Category</p>
              <p className="text-xl font-medium mt-4">Oil Painting</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-4xl mt-6">Size</p>
              <p className="text-xl font-medium mt-4">10 x 16 </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col my-4">
              <p className="font-bold text-4xl mt-6">$999.99</p>
              <p className="text-xl font-medium mt-4">Market Price</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-4xl mt-6">38</p>
              <p className="text-xl font-medium mt-4">Bids </p>
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
          <button className="border-2 w-2/5 text-xl border-solid border-primary py-2  font-bold">
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center mt-6 mb-[5%]">
          <button className="w-2/5 text-xl bg-primary my-2 text-white py-2  font-bold">
            Place A Bid
          </button>
        </div>
      </section>
    </section>
  );
};

export default SingleArt;
