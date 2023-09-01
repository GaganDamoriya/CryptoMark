import React from "react";
import "./style.scss";
import choseUs from "../../assets/part4.png";

const WhyUs = () => {
  return (
    <div className="whyUs">
      <span className="usHeading">Why choose Us ?</span>
      <div className="imgsec">
        <img src={choseUs} alt="" />
      </div>
    </div>
  );
};

export default WhyUs;
