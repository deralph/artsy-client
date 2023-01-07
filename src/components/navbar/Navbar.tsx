import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-screen py-[1%] px-[10%]">
      <p className="text-primary font-secondary font-normal text-3xl">ARTSY</p>
      <ul className="flex items-center text-primary font-bold w-3/5 justify-between md:hidden">
        <li className="text-2xl"> Home</li>
        <li className="text-2xl ">Marketplace</li>
        <li className="text-2xl ">Collections</li>
        <li className="text-2xl flex items-center ">
          My Cart{" "}
          <span className="ml-3 p-1 bg-[#F4F4F4] rounded-[50%] text-xs">
            01
          </span>
        </li>
        <li className="text-2xl ">
          <FaUserCircle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
