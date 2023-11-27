/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./meetups.css";

export const Meetups = ({text1, text2, date}) => {
  const dateObject = new Date(date);
  const month = dateObject.toLocaleString('default', {month:'short'});
  const day = dateObject.getDate();
  return (
    <div className="meetups dark-46-on design-component-instance-node">
      <div className="main-5">
        <div className="div-2">
          <div className="date">
            <div className="text-wrapper-10">{month.toUpperCase()}</div>
            <div className="text-wrapper-11">{day}</div>
          </div>
          <div className="data-3">
            <div className="title-5">
              <p className="UIHUT-crunchbase">{text1}</p>
              <div className="profile">
                <img className="img" alt="Rectangle" src="/imgHome/rectangle-32-5.png" />
                <div className="text-wrapper-12">{text2}</div>
              </div>
            </div>
            <div className="tags-4">
              <div className="tag-5">
                <div className="text-wrapper-13">Local</div>
              </div>
              <div className="tag-6">
                <div className="text-wrapper-13">Regional</div>
              </div>
              <div className="tag-7">
                <div className="text-wrapper-13">Worldwide</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

    );
};
Meetups.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  rectangle: PropTypes.string,
  text6: PropTypes.string,
};
