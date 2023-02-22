import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center w-screen py-[1%] px-[10%]">
      <p className="text-primary font-secondary font-normal text-3xl">ARTSY</p>
      <ul className="flex items-center text-primary font-bold w-3/5 justify-between md:hidden xl:w-4/5">
        <li className="text-2xl lg:text-xl"> Home</li>
        <li className="text-2xl lg:text-xl">Marketplace</li>
        <li className="text-2xl lg:text-xl">Collections</li>
        <li
          className="text-2xl lg:text-xl flex items-center "
          onClick={() => navigate("/cart")}
        >
          My Cart{" "}
          <span className="ml-3 p-1 bg-[#F4F4F4] rounded-[50%] text-xs">
            01
          </span>
        </li>
        <li className="text-2xl " onClick={() => navigate("/account")}>
          <FaUserCircle />
        </li>
      </ul>
      <GiHamburgerMenu className="hidden md:block text-3xl" />
    </nav>
  );
};

export default Navbar;
