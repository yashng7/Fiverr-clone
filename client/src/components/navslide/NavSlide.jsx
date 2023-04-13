import React, { useEffect, useState } from "react";
import "./NavSlide.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { links } from "../../data.js";

const Navslide = () => {
  const [data, setData] = useState(links);
  const [startIndex, setStartIndex] = useState(0);
  const [numItems, setNumItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1080) {
        setNumItems(data.length);
      } else if (windowWidth <= 1024) {
        setNumItems(5);
      } else if (windowWidth < 768) {
        setNumItems(4);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the end index based on the start index
  const endIndex = startIndex + numItems;

  // Get the current items to display
  const items = data.slice(startIndex, endIndex);

  // Handle previous button click
  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 2, 0));
  };

  // Handle next button click
  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 2, data.length - 6));
  };

  return (
    <div className="slider">
      <ArrowBackIosNewRoundedIcon
        onClick={handlePrevClick}
        disabled={startIndex === 0}
        className="arrow prev"
      />
      <div className="slider-items">
        {items.map((item) => (
          <div className="slider-item" key={item.id}>
            {item.title}
          </div>
        ))}
      </div>
      <ArrowForwardIosRoundedIcon
        onClick={handleNextClick}
        disabled={endIndex >= data.length}
        className="arrow next"
      />
    </div>
  );
};

export default Navslide;
