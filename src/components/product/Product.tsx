import React, { useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "../../extra/axios";

const Product: React.FC = () => {
  const [preview, setPreview] = useState<string | any>("");

  const image: React.MutableRefObject<any> = useRef();
  const artName: React.MutableRefObject<any> = useRef();
  const description: React.MutableRefObject<any> = useRef();
  const category: React.MutableRefObject<any> = useRef();
  const size: React.MutableRefObject<any> = useRef();
  const price: React.MutableRefObject<any> = useRef();

  const formData = new FormData();

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    formData.append("image", image.current.files[0]);
    formData.append("artName", artName.current.value);
    formData.append("description", description.current.value);
    formData.append("category", category.current.value);
    formData.append("size", size.current.value);
    formData.append("price", price.current.value);

    console.log(description.current.value);
    console.log(image.current.files[0], 3);
    console.log(typeof image.current.files[0], 4);
    console.log("before");

    console.log(formData.get("artName"));
    console.log(formData);
    try {
      const { data } = await axios.post("/art/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      console.log("done sucess");
    } catch (error) {
      console.log(error);
      console.log("done error");
    }
    console.log("done");
  };

  return (
    <section className="">
      <Navbar />
      <article className="w-screen px-[5%]">
        <div className="relative mt-8">
          <BsArrowLeftSquareFill className="text-4xl absolute top-[50%] -translate-y-[50%]" />
          <p className="text-primary font-black font-primary text-4xl text-center">
            Upload Artwork
          </p>
        </div>
        <div className="flex justify-center ">
          <form action="" className="max-w-[700px] w-full mb-20">
            <div
              className="w-full min-h-[300px] h-[30vh] border-dashed border-[6px] border-[#B9B9B9B2] my-7 flex flex-col items-center justify-center"
              onClick={() => image.current.click()}
            >
              <FaCloudUploadAlt className="text-8xl text-[#B9B9B9B2]" />
              <p className="font-primary font-bold text-[44px] text-[#B9B9B9B2] ">
                Browse Files
              </p>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                ref={image}
                onChange={() =>
                  setPreview(URL.createObjectURL(image.current.files[0]))
                }
              />
            </div>
            {preview && (
              <img
                src={URL.createObjectURL(image.current.files[0])}
                alt="art pics"
                className="w-full min-h-[300px] h-[30vh] border-solid border-[6px] border-[#B9B9B9B2] my-7 flex flex-col items-center justify-center object-"
              />
            )}
            <label
              htmlFor="art name"
              className="font-primary text-2xl font-black "
            >
              Art Name
            </label>
            <input
              ref={artName}
              type="text"
              className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6"
            />

            <label
              htmlFor="art name"
              className="font-primary text-2xl font-black "
            >
              Description
            </label>
            <input
              ref={description}
              type="text"
              className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6"
            />

            <label
              htmlFor="art name"
              className="font-primary text-2xl font-black "
            >
              Category
            </label>
            {/* <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" /> */}
            <select
              ref={category}
              name="category"
              id=""
              className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6"
            >
              <option value="Choose Category">Choose Category</option>
              <option value="Futuristic">Futuristic</option>
              <option value="Psychedelic">Psychedelic</option>
              <option value="Landscape">Landscape</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Symphonie">Symphonie</option>
            </select>

            <label
              htmlFor="art name"
              className="font-primary text-2xl font-black "
            >
              Size
            </label>
            <input
              ref={size}
              type="text"
              className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6"
            />

            <label
              htmlFor="art name"
              className="font-primary text-2xl font-black "
            >
              Price
            </label>
            <input
              ref={price}
              type="text"
              className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6"
            />

            <p className="mb-4 font-primary text-2xl font-black text-primary ">
              Anonymity
            </p>
            <p className="mb-4 font-primary text-2xl font-black text-primary ">
              Save to Drafts
            </p>

            <button
              className="w-full py-4 bg-primary text-white text-4xl"
              onClick={(e) => submit(e)}
            >
              Preview
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Product;
