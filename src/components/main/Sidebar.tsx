import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  // Object.keys(artTypes.keyValue);
  return (
    <section className="fixed top-0 left-0 bg-white p-6 min-w-[250px] z-30">
      <p className="text-primary font-primary font-black text-xl flex  justify-between ">
        CATEGORIES{" "}
        <span className="bg-primary p-2 text-white text-sm">
          {" "}
          <FaArrowRight />{" "}
        </span>
      </p>
      <div className="mt-6">
        <p className="text-primary font-primary font-black py-2 items-center text-base flex justify-between border-solid border-b border-primary">
          STYLE <span className="bg-primary w-4 h-1 rounded-sm"></span>
        </p>
        <ul className="mt-3 ">
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Oil painting <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Fresco <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Still Life <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Action painting <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Landscape <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Encaustic <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Expressionism <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Surrealism <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Cubism <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Abstract <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Potrait <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Divisionism <span className="">(0)</span>
          </li>
          <li className="font-primary font-bold text-base flex justify-between py-1">
            Modernism <span className="">(0)</span>
          </li>
        </ul>
      </div>
      {
        <div className="">
          <p className="text-primary font-primary font-black py-2 items-center text-base flex justify-between border-solid border-b border-primary">
            STYLE <span className="bg-primary w-4 h-1 rounded-sm"></span>
          </p>
          <ul className="mt-3 ">
            <li className="font-primary font-bold text-base flex justify-between py-1">
              Oil painting <span className="">(0)</span>
            </li>
          </ul>
        </div>
      }
    </section>
  );
};

export default Sidebar;
