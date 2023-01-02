// import axios from "./axios";

import { Form } from "../components/sign in/Buyer";
import { Form1 } from "../components/sign in/Seller";

export const handleInputs = (
  e: React.ChangeEvent<HTMLInputElement>,
  setForm:
    | React.Dispatch<React.SetStateAction<Form>>
    | React.Dispatch<React.SetStateAction<Form1>>
    | any,
  form: Form | Form1 | any
) => {
  //   e.preventDefault();
  const name: string = e.target.name;
  const value: string = e.target.value;
  setForm({
    ...form,
    [name]: value,
  });
};
