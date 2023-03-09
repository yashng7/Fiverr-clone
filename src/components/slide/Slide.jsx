import React, { useEffect, useState } from "react";
import "./Slide.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slide = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = children.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, children]);

  return (
    <div className="slide">
      <div className="container">
        <ArrowBackIosIcon
          className="prev"
          onClick={() => setIndex(index - 1)}
        />
        {children}
        <ArrowForwardIosIcon
          className="next"
          onClick={() => setIndex(index + 1)}
        />
      </div>
    </div>
  );
};

export default Slide;
