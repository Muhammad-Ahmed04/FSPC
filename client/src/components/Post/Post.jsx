/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconLike } from "../IconLike";
import "./style.css";

export const Post = ({
  dark,
  className,
  hasRectangle = true,
  text = "Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...",
  hasTags = true,
  memojiBoys = "/imgHome/memoji-boys-3-15-4.png",
  text1 = "Pavel Gvay",
  hasEllipse = true,
  text2 = "3 weeks ago",
  hasDiv = true,
  text3 = "36,6545 Likes",
  text4 = "56 comments",
  iconLikeIconLikeClassName,
  iconLikeHeartClassName,
  avatarsClassName,
}) => {
  return (
    <div className={`post dark-32-${dark} ${className}`}>
      <div className="main-4">
        {hasRectangle && (
          <img
            className="rectangle"
            alt="Rectangle"
            src={dark === "on" ? "/imgHome/rectangle-24-1.png" : "/imgHome/rectangle-24-2.png"}
          />
        )}

        <div className="data">
          <div className="data-2">
            <div className="title-3">
              <p className="bitcoin-has-tumbled">{text}</p>
              {hasTags && (
                <div className="tags-3">
                  <div className="div-wrapper">
                    <div className="text-wrapper-5">finance</div>
                  </div>
                  <div className="tag-3">
                    <div className="text-wrapper-6">bitcoin</div>
                  </div>
                  <div className="tag-4">
                    <div className="text-wrapper-7">crypto</div>
                  </div>
                </div>
              )}
            </div>
            <div className="user">
              <div className={`avatars ${avatarsClassName}`}>
                <img className="memoji-boys" alt="Memoji boys" src={memojiBoys} />
              </div>
              <div className="name-3">
                <div className="name-4">
                  <div className="name-5">
                    <div className="pavel-gvay">{text1}</div>
                    {hasEllipse && <div className="ellipse" />}
                  </div>
                  <div className="element-weeks-ago">{text2}</div>
                </div>
                <div className="action">
                  {hasDiv && <div className="text-wrapper-8">651,324 Views</div>}

                  <div className="element-likes">{text3}</div>
                  <div className="element-comments">{text4}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="love">
            <IconLike className={iconLikeIconLikeClassName} heartClassName={iconLikeHeartClassName} />
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
  hasRectangle: PropTypes.bool,
  text: PropTypes.string,
  hasTags: PropTypes.bool,
  memojiBoys: PropTypes.string,
  text1: PropTypes.string,
  hasEllipse: PropTypes.bool,
  text2: PropTypes.string,
  hasDiv: PropTypes.bool,
  text3: PropTypes.string,
  text4: PropTypes.string,
};
