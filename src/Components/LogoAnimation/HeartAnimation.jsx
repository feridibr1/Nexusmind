import React from "react";
import "./HeartAnimation.scss";
import LeftPart from "../../assets/images/HeartLeft.png";
import RightPart from "../../assets/images/HeartRight.png";

const HeartAnimation = () => {
  return (
    <div className="heart-animation">
      <img className="left-heart" src={LeftPart} alt="left" />
      <img className="right-heart" src={RightPart} alt="right" />
    </div>
  );
};

export default HeartAnimation;
