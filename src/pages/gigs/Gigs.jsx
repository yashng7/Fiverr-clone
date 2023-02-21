import React from "react";
import "./Gigs.scss";

const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr > Graphics & Design ></span>
        <h1>AI ARTIST</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
      </div>
      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder="min" />
          <input type="text" placeholder="max" />
          <button>Apply</button>
        </div>
        <div className="right">
          <span className="sortBy">Sort By</span>
          <span className="sortType">Bestselling</span>
          <img src="./img.down.png" alt="" />
          <div className="rightMenu">
            <span>Newest</span>
            <span>Best Selling</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
