import React from "react";
import Slider from "react-slick";

const Slider_: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <Slider {...settings}>
      <div className="h-[40vh]">
        <img src="/facelessArt.png" alt="" />
      </div>
      <div className="h-[40vh]">
        <img src="/facelessArt.png" alt="" />
      </div>
      <div className="h-[40vh]">
        <img src="/facelessArt.png" alt="" />
      </div>
      <div className="h-[40vh]">
        <img src="/facelessArt.png" alt="" />
      </div>
      <div className="h-[40vh]">
        <img src="/facelessArt.png" alt="" />
      </div>
    </Slider>
  );
};

export default Slider_;
