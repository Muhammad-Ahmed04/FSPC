/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Design2 } from "../../icons/Design2";
import { Vector173 } from "../../icons/Vector173";
import "./style.css";

export const PinnedGroup = ({
  dark,
  className,
  text = "Pinned Group",
  text1 = "#javascript",
  text2 = "82,645 Posted by this tag",
  text3 = "#bitcoin",
  text4 = "65,523 Posted • Trending",
  icon = <Design2 className="vector" color="#5D95E8" />,
  text5 = "#design",
  text6 = "51,354 • Trending in Bangladesh",
  text7 = "#blogging",
  text8 = "48,029 Posted by this tag",
  text9 = "#tutorial",
}) => {
  return (
    <div className={`pinned-group dark-18-${dark} ${className}`}>
      <div className="main-2">
        <div className="title-2">
          <div className="title-2">
            <div className="text-wrapper-2">{text}</div>
            <Vector173 className="vector" color={dark === "on" ? "#F7F7F7" : "#3F4354"} />
          </div>
        </div>
        <div className="tags-2">
          <div className="tag-2">
            <img alt="icon9" src="/imgHome/icon-9.png" />
            <div className="name-2">
              <div className="javascript-2">{text1}</div>
              <p className="element-posted-by-3">{text2}</p>
            </div>
          </div>
          <div className="tag-2">
            <img alt="icon8" src="/imgHome/icon-8.png"/>
            <div className="name-2">
              <div className="bitcoin-2">{text3}</div>
              <div className="element-posted-2">{text4}</div>
            </div>
          </div>
          <div className="tag-2">
            <img alt="icon7" src="/imgHome/icon-7.png"/>
            <div className="name-2">
              <div className="design-3">{text5}</div>
              <p className="element-trending-in-3">{text6}</p>
            </div>
          </div>
          <div className="tag-2">
          <img alt="icon6" src="/imgHome/icon-6.png"/>            
              <div className="name-2">
              <div className="blogging-2">{text7}</div>
              <p className="element-posted-by-4">{text8}</p>
            </div>
          </div>
          <div className="tag-2">
          <img alt="icon6" src="/imgHome/icon-5.png"/>
            <div className="name-2">
              <div className="tutorial-2">{text9}</div>
              <p className="element-trending-in-4">{text6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PinnedGroup.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
};
