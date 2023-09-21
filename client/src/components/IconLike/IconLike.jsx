/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const IconLike = ({ className, heartClassName }) => {
  return (
    <div className={`icon-like ${className}`}>
      <div className={`heart ${heartClassName}`} />
    </div>
  );
};
