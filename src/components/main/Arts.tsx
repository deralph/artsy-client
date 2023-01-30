import React from "react";
import Arts_ from "../database";

const Arts: React.FC = () => {
  return (
    <section className="w-[90%] mx-auto my-8">
      <p className="font-primary text-primary text-2xl font-bold py-2 ">
        Our Collection
      </p>
      <div className="flex my-4">
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
      <section className="">
        {Arts_.map(({ image, hot, sold, title, price }, index) => {
          return (
            <article>
              <div className="py-8 px-4 bg-[#f6f6f6]">
                <img src={image} alt={title} className="" />
                {/* <P className=''>hot</P> */}
              </div>
              <p className="">{title}</p>
              <p className="">$ {price}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Arts;
