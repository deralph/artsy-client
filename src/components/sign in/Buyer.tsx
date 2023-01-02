import React, { useState } from "react";
import { handleInputs } from "../../extra/formHandler";

export interface Form {
  email: string;
  username: string;
  password: string;
  recieveEmail: string;
}

interface Login {
  login?: boolean;
}

const Buyer: React.FC<Login> = ({ login }) => {
  const [form, setForm] = useState<Form>({
    email: "",
    username: "",
    password: "",
    recieveEmail: "",
  });

  return (
    <div>
      <label
        htmlFor="email"
        className="font-primary text-white font-bold text-xl "
      >
        Email
      </label>
      <input
        type="text"
        value={form.email}
        onChange={(e) => handleInputs(e, setForm, form)}
        name="email"
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
      {!login && (
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
            <span className="text-[#0094FF] underline">
              {" "}
              promotional emails
            </span>{" "}
            from Artsy
          </p>
        </div>
      )}
    </div>
  );
};

export default Buyer;
