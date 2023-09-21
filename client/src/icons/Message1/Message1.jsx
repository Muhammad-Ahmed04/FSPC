/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Message1 = ({ color = "#F4F6F8", className }) => {
  return (
    <svg
      className={`message-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_5_1010)">
        <path
          className="path"
          d="M19.9759 9.1546C19.7898 6.39176 18.3945 3.81175 16.1851 2.0993C13.9759 0.38668 11.092 -0.321092 8.30125 0.135521C3.32444 0.980453 -0.326775 5.5012 0.0220673 10.4787C0.184939 12.8762 1.20809 15.0909 2.92908 16.7806C2.48717 17.4199 2.09186 17.8309 1.04538 18.6529C0.83611 18.8128 0.742999 19.0638 0.812751 19.315C0.859308 19.5661 1.04538 19.7716 1.27783 19.8401C1.62661 19.9543 2.13827 20 2.71967 20C3.95224 20 5.51036 19.7261 6.71972 19.1095C8.32444 19.6575 10.0453 19.7945 11.743 19.4977C16.7199 18.63 20.3246 14.0863 19.9757 9.15445L19.9759 9.1546ZM5.34776 11.5976C4.44077 11.5976 3.71987 10.8898 3.71987 9.99936C3.71987 9.10889 4.44077 8.40112 5.34776 8.40112C6.25475 8.40112 6.97565 9.10889 6.97565 9.99936C6.97565 10.8898 6.25475 11.5976 5.34776 11.5976ZM9.99898 11.5976C9.092 11.5976 8.3711 10.8898 8.3711 9.99936C8.3711 9.10889 9.092 8.40112 9.99898 8.40112C10.906 8.40112 11.6269 9.10889 11.6269 9.99936C11.6269 10.8898 10.906 11.5976 9.99898 11.5976ZM14.6502 11.5976C13.7432 11.5976 13.0223 10.8898 13.0223 9.99936C13.0223 9.10889 13.7432 8.40112 14.6502 8.40112C15.5572 8.40112 16.2781 9.10889 16.2781 9.99936C16.2781 10.8898 15.5572 11.5976 14.6502 11.5976Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_5_1010">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Message1.propTypes = {
  color: PropTypes.string,
};
