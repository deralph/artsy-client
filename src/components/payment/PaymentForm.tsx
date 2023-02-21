import React, { useState } from "react";
import Title from "../../extra/Title";
import Navbar from "../navbar/Navbar";
import { TiTick } from "react-icons/ti";

export interface Form1 {
  cardNo: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
  deliveryAdd: string;
}
const Paymentsection: React.FC = () => {
  const [form, setForm] = useState<Form1>({
    cardNo: "8090     9900     0012     3341",
    expiryDate: "15/23",
    cvv: "333",
    cardHolder: "Raphael Ayomide Oshituga",
    deliveryAdd: "5, Venice road, Italy",
  });

  return (
    <section className="">
      <Navbar />
      <Title title="Payment Method" />
      <section className="flex justify-center px-[15%] flex-col items-center ">
        <div className="flex justify-evenly items-center w-3/5 ">
          <img src="/masterCard.png" alt="MASTERCARD" className="w-[100px]" />
          <img src="/paypal.png" alt="PAYPAL" className="w-[100px] h-[100px]" />
          <img src="VISA.png" alt="VISA" className="w-[100px]" />
        </div>
        <form action="" className="my-12 w-3/5">
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Card Number
          </label>
          <div className="border border-solid border-primary w-full flex justify-between items-center p-2 mt-3 mb-4 ">
            <input
              type="text"
              className="basis-[95%] text-black font-bold"
              value={form.cardNo}
              name="cardNo"
            />
            <TiTick />
          </div>
          <div className="flex justify-between">
            <div className="">
              <label
                htmlFor=""
                className="font-primary font-black text-black text-xl"
              >
                Expiry Date
              </label>
              <div className="border border-solid border-primary flex justify-between items-center p-2 mt-3 mb-4 ">
                <input
                  type="text"
                  className="basis-[95%] text-black font-bold"
                  value={form.expiryDate}
                  name="cardNo"
                />
                <TiTick />
              </div>
            </div>
            <div className="">
              <label
                htmlFor=""
                className="font-primary font-black text-black text-xl"
              >
                CVV
              </label>
              <div className="border border-solid border-primary flex justify-between items-center p-2 mt-3 mb-4 ">
                <input
                  type="text"
                  className="basis-[95%] text-black font-bold"
                  value={form.cvv}
                  name="cardNo"
                />
                <TiTick />
              </div>
            </div>
          </div>
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Card Holder
          </label>
          <div className="border border-solid border-primary w-full flex justify-between items-center p-2 mt-3 mb-4 ">
            <input
              type="text"
              className="basis-[95%] text-black font-bold"
              value={form.cardHolder}
              name="cardNo"
            />
            <TiTick />
          </div>
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Delivery Address
          </label>
          <div className="border border-solid border-primary w-full flex justify-between items-center p-2 mt-3 mb-4 ">
            <input
              type="text"
              className="basis-[95%] text-black font-bold"
              value={form.deliveryAdd}
              name="cardNo"
            />
            <TiTick />
          </div>
        </form>
        <div className="w-3/5">
          <p className="font-primary text-2xl text-black font-black block">
            Save to My Cards
          </p>
          <button className="bg-primary w-full py-3 text-white my-6 font-black text-xl">
            PAY $225.5
          </button>
        </div>
      </section>
    </section>
  );
};

export default Paymentsection;
