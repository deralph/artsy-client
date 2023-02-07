import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Arts_ from "../database";

const Arts: React.FC = () => {
  return (
    <section className="w-[90%] mx-auto my-8">
      <p className="font-primary text-primary text-2xl font-bold py-2 ">
        Our Collection
      </p>
      <div className="hide flex my-4 overflow-x-scroll">
        <button className="bg-primary rounded-lg font-primary text-white text-xl font-bold py-2 px-[5%] mr-4">
          All
        </button>
        <button className="bg-[#f6f6f6] rounded-lg font-primary text-primary text-xl font-bold py-2 px-[5%] mr-4">
          Newest
        </button>
        <button className="bg-[#f6f6f6] rounded-lg font-primary text-primary text-xl font-bold py-2 px-[5%] mr-4">
          Prices
        </button>
        <button className="bg-[#f6f6f6] rounded-lg font-primary text-primary text-xl font-bold py-2 px-[5%] mr-4">
          Artist
        </button>
        <button className="bg-[#f6f6f6] rounded-lg font-primary text-primary text-xl font-bold py-2 px-[5%] mr-4">
          Location
        </button>
      </div>
      <section className="flex justify-between min-w-[23%] flex-wrap ">
        {Arts_.map(({ image, hot, sold, title, price }, index) => {
          return (
            <article key={index} className="w-[23%] lg:w-[29%] mb-4">
              <div className="py-3 px-4 bg-[#f6f6f6]">
                <img
                  src={image}
                  alt={title}
                  className="h-[40vh] w-full px-[2%] rounded-xl"
                />
                <p
                  className={`font-priimary font-bold  text-xs ${
                    hot && "bg-primary"
                  } text-white grid place-content-center w-14 rounded-md h-8 p-3  my-3 text-center `}
                >
                  {hot ? "HOT" : " "}
                </p>
                <p className="text-center  font-primary text-primary text-xl font-bold capitalize">
                  {title}
                </p>
                <p className="text-center font-family font-black  text-primary text-base">
                  $ {price}
                </p>
              </div>
            </article>
          );
        })}
        <div className="flex">
          <button className="mr-3 py-2 px-4 font-bold bg-primary  text-white font-primary text-2xl">
            1
          </button>
          <button className="mr-3 py-2 px-4 font-bold bg-[#F6F6F6] text-primary font-primary text-2xl">
            2
          </button>
          <button className="mr-3 py-2 px-4 font-bold bg-[#F6F6F6] text-primary font-primary text-2xl">
            3
          </button>
          <button className="mr-3 py-2 px-4 bg-[#F6F6F6] text-primary font-primary text-2xl">
            <FaArrowLeft />{" "}
          </button>
          <button className="mr-3 py-2 px-4 bg-primary   text-white font-primary text-2xl">
            <FaArrowRight />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Arts;
