import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";
const GigCard = ({ card }) => {
  return (
    <Link to="/gig/123">
      <div className="gigCard">
        <img src={card.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={card.pp} alt="" />
            <span>{card.username}</span>
          </div>
          <p>{card.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{card.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${card.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
