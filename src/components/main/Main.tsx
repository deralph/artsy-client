import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiEqualizerLine } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { TiCloudStorage } from "react-icons/ti";
import Slider from "./Slider";
import Arts from "./Arts";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { shop, side, viewNotification } from "../../store/side.slice";
import ShopBy from "./ShopBy";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Main: React.FC = () => {
  const { open, shopBy, Notifications } = useSelector(
    (state: RootState) => state.sidebar
  );
  const { seller } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section
      className={`${open && "h-[100vh] overflow-hidden"} ${
        shopBy && "h-[100vh] overflow-hidden"
      } ${Notifications && "h-[100vh] overflow-hidden"}`}
    >
      {open && (
        <section className="w-full h-full absolute bg-[#00000090] z-50">
          <Sidebar />
        </section>
      )}

      {shopBy && <ShopBy />}

      {Notifications && <Notification />}

      <Navbar main />
      <form className="mt-4 pr-[20%] slg:pr-0 py-4 sm:py-2 items-center md:items-end justify-between md:flex-col flex mx-auto w-[90%] border-[#00000080] border-b border-solid">
        <div className="flex justify-between basis-4/5 md:w-full sml:bg-[#efefefb2] items-center">
          <GiHamburgerMenu
            className=" text-5xl sml:text-3xl p-3 sml:p-1 bg-[#F4F4F4] sml:bg-transparent text-[#1E1E1E]"
            onClick={() => dispatch(side(true))}
          />
          <div className="flex items-center bg-[#EFEFEFB2] sml:bg-transparent basis-[90%] rounded-lg p-1 ">
            <input
              type="text"
              placeholder="Search all categories of artworks here..."
              className="bg-transparent w-full font-primary font-bold opacity-50 p-2 sm:p-1 placeholder:text-center text-xl sml:text-base sm:text-xs"
            />
            <button className="bg-[#1E1E1E] text-white rounded-lg w-[140px] sm:w-auto sm:p-2 font-primary font-bold text-xl sml:text-base slg:hidden ">
              Search
            </button>
            <FaSearch className="bg-[#1E1E1E] text-white rounded-[50%]  font-primary font-bold text-3xl p-1 hidden slg:block" />
          </div>
        </div>
        <div className="flex items-center md:mt-2">
          <RiEqualizerLine
            className="bg-[#EFEFEFB2] text-primary p-2 text-4xl sml:text-3xl"
            onClick={() => dispatch(shop(true))}
          />
          <div
            className="ml-3 relative"
            onClick={() => dispatch(viewNotification(true))}
          >
            <IoNotificationsSharp className=" text-primary text-3xl sml:text-2xl " />
            <span className="text-[10px] top-0 right-0 font-bold grid place-content-center w-4 h-4 bg-[#FF1E1E] absolute rounded-[50%]">
              01
            </span>
          </div>
          {seller && (
            <TiCloudStorage
              className="bg-[#EFEFEFB2] mx-4 text-primary  text-5xl sml:text-4xl px-2"
              onClick={() => navigate("/product")}
            />
          )}{" "}
        </div>
      </form>
      <div className="mt-8 ml-[5%]">
        <p className="font-primary text-primary font-bold text-3xl pb-1">
          What’s New
        </p>
        <p className="font-primary text-black font-medium text-sm">
          Trending arts from new creators
        </p>
      </div>
      <Slider />
      <Arts />
      <section className="relative w-[90%] h-[60vh] mx-auto my-[5%] dark ">
        <img
          src="/facelessArt.png"
          className="absolute w-full h-full  "
          alt="facelessArt"
        />
        <div className=" w-[40%] lg:w-1/2 sml:w-full absolute z-30 right-0 pt-3 sml:p-[3%] bottom-[3%] ">
          <p className="font-primary font-black text-xs text-white opacity-60 ">
            ARTPIECE OF THE WEEK
          </p>
          <p className="font-primary font-black text-2xl sml:text-lg pt-2 text-white ">
            THE FACELESS
          </p>
          <p className="w-1/5 bg-white h-1 mt-1 rounded-xl"></p>
          <p className="font-secondary text-white font-normal text-2xl sml:text-lg py-2">
            $999.9
          </p>
          <p className="font-primary font-black text-xs text-white opacity-60 ">
            DESCRIPTION
          </p>
          <p className="font-primary font-bold text-xl sml:text-base text-white">
            An oil painting painted in the mid 90’s inspired by how people feel
            deep down, unable to express true emotions and desires.
          </p>
          <div className="flex justify-between items-center w-3/5 xl:w-4/5 sml:w-full sml:px-[5%] my-4">
            <button
              className="basis-[38%] py-2 px-4 bg-primary text-white rounded font-primary font-bold text-xl"
              onClick={() => navigate("/cart")}
            >
              Bid
            </button>
            <button
              className="basis-[55%] py-2 px-4 text-primary bg-white rounded  font-primary font-bold text-xl "
              onClick={() => navigate("/cart")}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto mb-14">
        <p className="font-primary text-primary font-bold text-3xl my-8">
          Blogs
        </p>
        <article className="bg-[#F6F6F6] p-[2%] flex justify-evenly sml:flex-col items-center">
          <div className="relative">
            <img src="/sellArts.png" alt="sell Arts" className="h-[35vh]" />
            <p className="absolute bg-primary p-2 text-white font-primary font-bold text-sm right-[-10%] top-[-2%]">
              07 <br /> DEC
            </p>
          </div>
          <div className="bg-[#3A3A3A] p-6 basis-1/2 sml:mt-8">
            <p className="w-auto pb-3 inline text-white font-primary font-bold text-base border-b-4 border-white border-solid">
              Ways to sell your <span className="font-secondary">ARTS</span>{" "}
              online
            </p>
            <p className="mt-6  text-white font-primary font-semibold text-sm">
              To sell art online, you can start by creating an online portfolio
              or website to showcase your work. This will allow potential
              customers to view your art and learn more about you as an artist.
              You can then use social media to promote your art with potential
              buyers. You can also sell your art through online marketplaces
              like Artsy.
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </section>
  );
};

export default Main;
