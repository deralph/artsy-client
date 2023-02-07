import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="py-[5%] flex justify-evenly border-y border-solid border-[#00000080] ">
        <ul className="">
          <li className="font-black text-lg font-primary">About</li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            News & Stories
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            History
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Our Studio
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Showrooms
          </li>
        </ul>
        <ul className="">
          <li className="font-black text-lg font-primary">Customer Services</li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Showrooms
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Trade Services
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Login/Register
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Delivery & Returns
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            FAQs
          </li>
        </ul>
        <ul className="">
          <li className="font-black text-lg font-primary">Artworks</li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Futuristic
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Psychedelic
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Oil paintings
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Aged Arts
          </li>
          <li className="text-primary opacity-60 font-primary font-bold text-base py-2">
            Abstract
          </li>
        </ul>
      </div>
      <div className="w-3/5 m-auto flex justify-between p-5">
        <p className="text-black font-black opacity-60 font-primary text-sm">
          ABOUT US
        </p>
        <p className="text-black font-black opacity-60 font-primary text-sm">
          BLOG
        </p>
        <p className="text-black font-black opacity-60 font-primary text-sm">
          FAQS
        </p>
        <p className="text-black font-black opacity-60 font-primary text-sm">
          ORDER TRACKING
        </p>
        <p className="text-black font-black opacity-60 font-primary text-sm">
          CONTACT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
