import React from "react";

const Popup: React.FC = () => {
  return (
    <section className="w-full h-full absolute z-30 bg-slate-700  flex justify-center items-center">
      <article className="bg-white w-3/5 min-h-4/5 p-[5%]">
        <div className="">
          <div className="flex justify-center">
            <p className="w-[50%] h-[50vh] min-h-[150px] bg-primary rounded-[50%]"></p>
          </div>
          <p className="text-center font-bold text-2xl">
            You have successfully placed a bid for this artpiece. <br />{" "}
            Goodluck!!
          </p>
        </div>

        <div className="flex justify-center mt-[10%]">
          <button className="border-2 w-full text-xl border-solid border-primary py-2  font-bold">
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center mt-6 mb-[5%]">
          <button className="w-full text-xl bg-primary my-2 text-white py-2  font-bold">
            Place A Bid
          </button>
        </div>
      </article>
    </section>
  );
};

export default Popup;
