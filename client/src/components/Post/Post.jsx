import PropTypes from "prop-types";
import React from "react";
import { IconLike } from "../IconLike";
import "./style.css";

export const Post = ({
  dark,
  className,
  text = "Default text",
  text1 = "Default user",
  text2 = "Default time ago",
  text3 = "Default likes",
  text4 = "Default comments",
  iconLikeIconLikeClassName,
  iconLikeHeartClassName,
}) => {
  return (
    <div className={`post dark-32-${dark} ${className}`}>
      <div className="main-4">
        {/* {hasRectangle && <div className="rectangle" />} */}

        <div className="data">
          <div className="data-2">
            <div className="title-3">
              <p className="bitcoin-has-tumbled">{text}</p>
              {/* {hasTags && (
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
              )} */}
            </div>
            <div className="user">
              <div className="name-3">
                <div className="name-4">
                  <div className="name-5">
                    <div className="pavel-gvay">{text1}</div>
                  </div>
                  <div className="element-weeks-ago">{text2}</div>
                </div>
                <div className="action">
                  {/* {hasDiv && <div className="text-wrapper-8">651,324 Views</div>} */}
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
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  iconLikeIconLikeClassName: PropTypes.object,
  iconLikeHeartClassName: PropTypes.object,
};
