import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import Title from "../../extra/Title";
import { carts } from "../database";
import Navbar from "../navbar/Navbar";
import SingleCart from "./SingleCart";

const Cart: React.FC = () => {
  return (
    <section className="">
      <Navbar />
      <section className="my-6 mx-auto w-4/5 sml:w-[90%]">
        <Title title="My Cart" />
        <section className="flex justify-evenly flex-wrap my-[5%]">
          {carts.map(({ name, price, size, image }, index) => {
            return (
              <SingleCart
                name={name}
                price={price}
                size={size}
                image={image}
                key={index}
              />
            );
          })}
        </section>
        <div className="flex justify-center">
          <div className="w-2/5 md:w-4/5 ">
            <p className="flex justify-between text-primary font-primary font-black text-xl">
              Total Price <span className="">$ 225.5</span>
            </p>
            <button className="w-full mt-4 bg-primary text-white py-4 text-2xl font-black">
              CHECKOUT
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
