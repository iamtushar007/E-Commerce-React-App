import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://raw.githubusercontent.com/iamtushar007/Assets/main/img/20220809_144906.jpg?token=GHSAT0AAAAAAB67RLX2ETVBFGV5G2LFZ7QSY7Y25WA",
    "https://raw.githubusercontent.com/iamtushar007/Assets/main/img/20220809_145749.jpg?token=GHSAT0AAAAAAB67RLX2UIDM5IALRRRFL2POY7Y26XQ",
    "https://raw.githubusercontent.com/iamtushar007/Assets/main/img/20220809_181424.jpg?token=GHSAT0AAAAAAB67RLX2PTHSHFZKPKX3AMIIY7Y27MQ",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
