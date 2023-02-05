import React from "react";
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
            <article key={index} className="w-[23%] lg:w-[29%] ">
              <div className="py-8 px-4 bg-[#f6f6f6]">
                <img
                  src={image}
                  alt={title}
                  className="h-[40vh] w-full px-[2%]"
                />
                <p
                  className={`${
                    hot && "bg-primary"
                  } text-white grid place-content-center w-20 h-10 p-3  my-3 text-center `}
                >
                  {hot ? "hot" : " "}
                </p>
              </div>
              <p className="text-center">{title}</p>
              <p className="text-center">$ {price}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Arts;
