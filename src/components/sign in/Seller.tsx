import React, { useState } from "react";
import { handleInputs } from "../../extra/formHandler";

export interface Form1 {
  fullName: string;
  studio: string;
  nationality: string;
  username: string;
  password: string;
  email: string;
  recieveEmail: string;
}
const Seller: React.FC = () => {
  const [form, setForm] = useState<Form1>({
    fullName: "",
    studio: "",
    nationality: "",
    username: "",
    password: "",
    email: "",
    recieveEmail: "",
  });

  return (
    <div>
      <label
        htmlFor="fullName"
        className="font-primary text-white font-bold text-xl "
      >
        FullName
      </label>
      <input
        type="text"
        value={form.fullName}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="fullName"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />

      <label
        htmlFor="studio"
        className="font-primary text-white font-bold text-xl "
      >
        Studio
      </label>
      <input
        type="text"
        value={form.studio}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="studio"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />
      <label
        htmlFor="nationality"
        className="font-primary text-white font-bold text-xl "
      >
        Nationality
      </label>
      <input
        type="text"
        value={form.nationality}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="nationality"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />
      <label
        htmlFor="username"
        className="font-primary text-white font-bold text-xl "
      >
        Username
      </label>
      <input
        type="text"
        value={form.username}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="username"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />
      <label
        htmlFor="email"
        className="font-primary text-white font-bold text-xl "
      >
        Email
      </label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="email"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />
      <label
        htmlFor="password"
        className="font-primary text-white font-bold text-xl "
      >
        Password
      </label>
      <input
        type="text"
        value={form.password}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="password"
        className="mb-8 border-[2px] border-solid border-white focus:border-[#0094FF] bg-transparent w-full mt-4 p-3 text-white"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          name="recieveEmail"
          value={form.recieveEmail}
          id=""
          className="border-[2px] border-solid border-white bg-[#1e1e1e]  "
        />
        <p className="font-family font-medium text-white text-lg ml-4">
          I don’t want to recieve{" "}
          <span className="text-[#0094FF] underline"> promotional emails</span>{" "}
          from Artsy
        </p>
      </div>
    </div>
  );
};

export default Seller;
