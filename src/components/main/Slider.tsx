import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Sliders: React.FC = () => {
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
      <div className="h-[50vh] w-full relative">
        <div
          className={` px-[5%] m-auto ${
            activeSlide === 0 ? "slide" : "opacity-90 scale-90"
          }  ${activeSlide === 1 && "slide1"} relative`}
        >
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div
            className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 p-2 ${
              activeSlide === 0 ? "block" : "hidden"
            }`}
          >
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...
              <Link to="" className="text-blue-700 text-base">
                see more
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div
          className={` px-[5%] m-auto ${
            activeSlide === 1 ? "slide" : "opacity-90 scale-90"
          }  ${activeSlide === 2 && "slide1"} relative`}
        >
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div
            className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 p-2 ${
              activeSlide === 1 ? "block" : "hidden"
            }`}
          >
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...
              <Link to="" className="text-blue-700 text-base">
                see more
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div
          className={` px-[5%] m-auto ${
            activeSlide === 2 ? "slide" : "opacity-90 scale-90"
          }  ${activeSlide === 3 && "slide1"} relative`}
        >
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div
            className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 p-2 ${
              activeSlide === 2 ? "block" : "hidden"
            }`}
          >
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...
              <Link to="" className="text-blue-700 text-base">
                see more
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div
          className={` px-[5%] m-auto ${
            activeSlide === 3 ? "slide" : "opacity-90 scale-90"
          }  ${activeSlide === 4 && "slide1"} relative`}
        >
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div
            className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 p-2 ${
              activeSlide === 3 ? "block" : "hidden"
            }`}
          >
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...
              <Link to="" className="text-blue-700 text-base">
                see more
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div
          className={` px-[5%] m-auto ${
            activeSlide === 4 ? "slide" : "opacity-90 scale-90"
          }  ${activeSlide === 0 && "slide1"} relative`}
        >
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div
            className={`transition-all absolute right-0 bottom-0 z-20 w-3/5 p-2 ${
              activeSlide === 4 ? "block" : "hidden"
            }`}
          >
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...
              <Link to="" className="text-blue-700 text-base">
                see more
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Sliders;
