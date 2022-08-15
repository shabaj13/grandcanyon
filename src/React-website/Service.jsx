import React from "react";
import Card from "../React-website/Card";
import "./service.css";
import CardData from "../React-website/CardData";
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="serviceContent">
          <div className="headingDiv">
            <span className="serviceHeading">Our Services</span>
          </div>
          <div className="cardDiv">
            {CardData.map((curelem) => {
             return <Card imgsrc={curelem.image} title={curelem.title} />;
            })}
            </div>
          </div>
        </div>
    </>
  );
};

export default Service;
