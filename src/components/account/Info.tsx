import React, { useState } from "react";
import { handleInputs } from "../../extra/formHandler";
import Title from "../../extra/Title";
import Navbar from "../navbar/Navbar";

export interface Form1 {
  fullName: string;
  email: string;
  mobileNo: string;
  address: string;
  accountType: string;
}
const Info: React.FC = () => {
  const [form, setForm] = useState<Form1>({
    fullName: "Raphael Ayo",
    email: "raphaelayo@gmail.coml",
    mobileNo: "+234-7034257336",
    address: "15, Ikeja rd",
    accountType: "",
  });

  return (
    <section className="">
      <Navbar />
      <Title title="Account Information" />
      <div className="flex justify-evenly px-[10%]">
        <img
          src="/profileDP.png"
          alt="profile pics"
          className="h-[40vh] rounded-[50%]"
        />
        <form action="" className="basis-[50%]">
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Name
          </label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleInputs(e, setForm, form)}
            name="fullName"
            className="block bg-[#D9D9D980] rounded-md mt-2 mb-4 py-3 px-2 w-full font-primary font-bold text-[#000000] opacity-50 text-xs"
          />
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Email
          </label>
          <input
            type="text"
            value={form.email}
            onChange={(e) => handleInputs(e, setForm, form)}
            name="email"
            className="block bg-[#D9D9D980] rounded-md mt-2 mb-4 py-3 px-2 w-full font-primary font-bold text-[#000000] opacity-50 text-xs"
          />
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Mobile Number
          </label>
          <input
            type="text"
            value={form.mobileNo}
            onChange={(e) => handleInputs(e, setForm, form)}
            name="mobileNo"
            className="block bg-[#D9D9D980] rounded-md mt-2 mb-4 py-3 px-2 w-full font-primary font-bold text-[#000000] opacity-50 text-xs"
          />
          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Home Address
          </label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => handleInputs(e, setForm, form)}
            name="address"
            className="block bg-[#D9D9D980] rounded-md mt-2 mb-4 py-3 px-2 w-full font-primary font-bold text-[#000000] opacity-50 text-xs"
          />
          {/* <input
        type="text"
        value={form.accountType}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="accountType"
        
        
      /> */}

          <label
            htmlFor=""
            className="font-primary font-black text-black text-xl"
          >
            Account Type{" "}
          </label>
          <select
            id=""
            value={form.accountType}
            name="accountType"
            className="block bg-[#D9D9D980] rounded-md mt-2 mb-4 py-3 px-2 w-full font-primary font-bold text-[#000000] opacity-50 text-xs"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <p>{form.accountType}</p>
        </form>
      </div>
    </section>
  );
};

export default Info;
