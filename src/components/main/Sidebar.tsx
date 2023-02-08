import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <section className="fixed top-0 left-0 bg-white p-6">
      <p className="text-primary font-primary font-black text-2xl  ">
        CATEGORIES{" "}
        <span className="">
          {" "}
          <FaArrowRight />{" "}
        </span>
      </p>
      <div className="">
        <p className="">
          STYLE <span className="">-</span>
        </p>
        <ul className="">
          <li className="">Oil painting</li>
          <li className="">Fresco</li>
          <li className="">Still Life</li>
          <li className="">Action painting</li>
          <li className="">Landscape</li>
          <li className="">Encaustic</li>
          <li className="">Expressionism</li>
          <li className="">Surrealism</li>
          <li className="">Cubism</li>
          <li className="">Abstract</li>
          <li className="">Potrait</li>
          <li className="">Divisionism</li>
          <li className="">Modernism</li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
