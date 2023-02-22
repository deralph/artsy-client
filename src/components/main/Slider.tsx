import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { slider } from "../database";

const Sliderss: React.FC = () => {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleBeforeChange = (current: unknown, next: number) => {
    setActiveSlide(next);
  };

  const settings: {} = {
    beforeChange: handleBeforeChange,
    dots: true,
    speed: 1000,
    // slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    // autoplaySpeed: 10,
    centerPadding: "15%",
    arrows: true,
    // fade: true,
  };
  return (
    <Slider {...settings} className="mt-8">
      {slider.map(({ src, title, desc }, index) => {
        return (
          <div
            key={index}
            className="h-[50vh] w-full relative"
            onClick={() => navigate("/singlePage")}
          >
            <div
              className={` px-[5%]  m-auto ${
                activeSlide === index ? "slide" : "opacity-90 scale-90"
              }  ${activeSlide === index + 1 && "slide1"} relative`}
            >
              <img
                src={src}
                className="h-[50vh] w-[100%] "
                alt="faceless pics"
              />
              <div
                className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 sml:w-full sml:pl-[10%] p-2 ${
                  activeSlide === index ? "block" : "hidden"
                }`}
              >
                <p className="font-primary font-black text-2xl sml:text-lg text-white">
                  {title}
                </p>
                <p className="font-primary font-black text-sm sml:text-xs py-2 text-white opacity-60">
                  DESCRIPTION
                </p>
                <p className="font-primary font-bold text-xl sml:text-base text-white pr-4">
                  {desc}...
                  <Link
                    to="/singlepage"
                    className="text-blue-700 text-base sml:text-xs"
                  >
                    see more
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Sliderss;
