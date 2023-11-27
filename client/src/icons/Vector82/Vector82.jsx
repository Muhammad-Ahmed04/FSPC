
import PropTypes from "prop-types";
import React from "react";

export const Vector82 = ({ color = "#F4F6F8", className }) => {
  return (
    <svg
      className={`vector-8-2 ${className}`}
      fill="none"
      height="0"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14 6H6C5.17595 6 4.70557 6.94076 5.2 7.6L9.2 12.9333C9.6 13.4667 10.4 13.4667 10.8 12.9333L14.8 7.6C15.2944 6.94076 14.824 6 14 6Z"
        fill={color}
      />
    </svg>
  );
};

Vector82.propTypes = {
  color: PropTypes.string,
};
