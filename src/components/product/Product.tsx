import React, { useRef } from "react";
import Navbar from "../navbar/Navbar";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";

const Product: React.FC = () => {

const image:React.MutableRefObject<any> = useRef()

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

        <div className="w-full min-h-[300px] h-[30vh] border-dashed border-[6px] border-[#B9B9B9B2] my-7 flex flex-col items-center justify-center" onClick={()=> image.current.click()}>
          <FaCloudUploadAlt className="text-8xl text-[#B9B9B9B2]" />
        <p className="font-primary font-bold text-[44px] text-[#B9B9B9B2] ">Browse Files</p>  
          <input type="file" className="hidden" accept="image/*" ref={image}/>
        </div>
        <label htmlFor="art name" className="font-primary text-2xl font-black ">Art Name</label>
        <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" />

        <label htmlFor="art name" className="font-primary text-2xl font-black ">Description</label>
        <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" />

        <label htmlFor="art name" className="font-primary text-2xl font-black ">Category</label>
        {/* <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" /> */}
        <select name="category" id="" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6">
          <option value="Choose Category">Choose Category</option>
          <option value="Futuristic">Futuristic</option>
          <option value="Psychedelic">Psychedelic</option>
          <option value="Landscape">Landscape</option>
          <option value="Oil Painting">Oil Painting</option>
          <option value="Symphonie">Symphonie</option>
        </select>

        <label htmlFor="art name" className="font-primary text-2xl font-black ">Size</label>
        <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" />

        <label htmlFor="art name" className="font-primary text-2xl font-black ">Price</label>
        <input type="text" className="border-[2px] border-solid border-primary p-2 w-full mt-2 mb-6" />

        <p className="mb-4 font-primary text-2xl font-black text-primary ">Anonymity</p>
        <p className="mb-4 font-primary text-2xl font-black text-primary ">Save to Drafts</p>

        <button className="w-full py-4 bg-primary text-white text-4xl" >Preview</button>
        <p className=""></p>

        </form>
        </div>
      </article>
    </section>
  );
};

export default Product;
