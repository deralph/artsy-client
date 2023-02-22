import React from "react";
import { MdVerified } from "react-icons/md";

const Popup: React.FC = () => {
  return (
    <section className="w-full h-full absolute z-30 bg-[#00000080]  flex justify-center items-center">
      <article className="bg-white  p-[5%]">
        <div className="flex justify-center items-center flex-col">
          <MdVerified className="w-[50%]  min-h-[150px] text-primary " />
          <p className="text-center font-bold text-2xl sm:text-base">
            You have successfully placed a bid for this artpiece. <br />{" "}
            Goodluck!!
          </p>
        </div>

        <div className="flex justify-center my-6">
          <button className="border-2 w-full text-xl border-solid border-primary py-2  font-bold">
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center mt-6 ">
          <button className="w-full text-xl bg-primary my-2 text-white py-2  font-bold">
            Place A Bid
          </button>
        </div>
      </article>
    </section>
  );
};

export default Popup;
