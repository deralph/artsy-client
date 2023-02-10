import React from "react";

const SingleCart = () => {
  return (
    <section className="">
      <div className="flex items-center">
        <img src="/cart.png" alt="cartPics"></img>
        <div className="">
          <p className="font-primary font-bold text-xl text-primary opacity-50">
            MONA SCRIBBLE
          </p>
          <p className="font-primary font-black text-xl text-primary ">
            $ 225.5
          </p>
          <p className="font-primary font-bold text-sm text-primary ">
            12” x 12”
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
