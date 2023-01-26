import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_: React.FC = () => {
  var settings: {} = {
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
        <div className="px-[5%] m-auto slide relative">
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
          <div className="absolute right-0 bottom-0 z-20 w-3/5 p-2">
            <p className="font-primary font-black text-2xl text-white">
              HE CRIES
            </p>
            <p className="font-primary font-black text-sm py-2 text-white opacity-60">
              DESCRIPTION
            </p>
            <p className="font-primary font-bold text-xl text-white pr-4">
              An oil painting sowing the image of a child oil painting sowing
              the image of a child...{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div className="px-[5%] m-auto slide relative">
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div className="px-[5%] m-auto slide relative">
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div className="px-[5%] m-auto slide relative">
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
        </div>
      </div>
      <div className="h-[50vh] w-full relative">
        <div className="px-[5%] m-auto slide relative">
          <img
            src="/facelessArt.png"
            className="h-[50vh] w-[100%] "
            alt="faceless pics"
          />
        </div>
      </div>
    </Slider>
  );
};

export default Slider_;
