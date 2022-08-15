import React from "react";
import { NavLink } from "react-router-dom";
import './card.css'
const Card = (props) => {
  return (
    <>
      
        <div className="card" data-aos="zoom-out-down">
          <img className="cardImg" src={props.imgsrc} alt="cardImg" />
          <div className="cardDetails">
            <p className="cardTitle">{ props.title}</p>
            <p className="cardText">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink className="serviceBtn" to="/">
              Check Now
            </NavLink>
          </div>
        </div>

    </>
  );
};
export default Card;
