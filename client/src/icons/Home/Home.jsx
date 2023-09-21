/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Home = ({ color = "#3F4354", className }) => {
  return (
    <svg
      className={`home ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_4069_330)">
        <path
          className="path"
          d="M19.3441 7.5198L10.8801 0.339514C10.639 0.121018 10.3253 0 9.99994 0C9.67458 0 9.36086 0.121018 9.11979 0.339514L0.656695 7.5199C0.450039 7.70713 0.284879 7.93555 0.171844 8.19047C0.0588099 8.44538 0.000407589 8.72115 0.000396729 9L0.000396729 19.3357C0.000396727 19.5119 0.0703692 19.6808 0.194928 19.8054C0.319487 19.93 0.488434 20 0.6646 20L6.0004 20C6.55268 20 7.0004 19.5523 7.0004 19V15C7.0004 14.436 7.55249 13.9788 8.11669 13.9788H11.8832C12.4475 13.9788 13.0004 14.436 13.0004 15V19C13.0004 19.5523 13.4481 20 14.0004 20H19.3362C19.5124 20 19.6813 19.93 19.8059 19.8054C19.9304 19.6808 20.0004 19.5119 20.0004 19.3357V9C20.0004 8.72114 19.9419 8.44537 19.8289 8.19044C19.7159 7.93551 19.5507 7.70707 19.3441 7.5198Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_4069_330">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
};
