/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Home24 = ({ color = "#C5D0E6", className }) => {
  return (
    <svg
      className={`home-2-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.5422 5.63125C9.51932 6.1956 8.49681 6.76053 7.47464 7.32603C6.16477 8.05045 5.14224 8.61911 4.40715 9.03201C3.49997 8.76174 2.74144 8.2738 2.13146 7.56813L2.00241 7.64692C1.90857 7.69951 1.80694 7.71264 1.6974 7.68634C1.58794 7.66009 1.50193 7.60188 1.43935 7.51179L1.05226 6.86996C0.997507 6.77987 0.985788 6.67853 1.01705 6.5659C1.04832 6.45331 1.1109 6.36697 1.20474 6.30692L1.33379 6.23933C0.91932 5.20335 0.909523 4.15045 1.30444 3.08072C1.69937 2.01094 2.40905 1.19456 3.43351 0.631476C4.47366 0.0609406 5.56847 -0.122988 6.71804 0.0796906C7.86764 0.282369 8.80997 0.815405 9.54506 1.67875L9.67411 1.59991C9.78361 1.54737 9.89306 1.53799 10.0026 1.57179C10.1121 1.60554 10.1981 1.66746 10.2607 1.75755L10.636 2.39942C10.6907 2.48951 10.7044 2.5871 10.6771 2.69219C10.6497 2.79728 10.5891 2.87987 10.4953 2.93996L10.3427 3.01875C10.6712 3.85206 10.7377 4.7229 10.5422 5.63125ZM13.51 18.3447C13.7993 18.8777 14.161 19.2868 14.595 19.5721C15.0291 19.8574 15.4963 20 15.9968 20C16.8727 20 17.5941 19.7241 18.1611 19.1723C18.7281 18.6205 19.0076 17.9355 18.9998 17.1172C18.9998 16.8545 18.9783 16.5917 18.9353 16.329C18.8923 16.0663 18.8473 15.8448 18.8004 15.6646C18.7535 15.4844 18.6811 15.2799 18.5834 15.0509C18.4856 14.8219 18.4133 14.6605 18.3664 14.5667C18.3195 14.4729 18.2413 14.3264 18.1318 14.1275C18.0223 13.9286 17.9636 13.8179 17.9558 13.7953C17.7838 13.48 17.6059 13.2661 17.4221 13.1534C17.2383 13.0408 17.0878 13.0146 16.9704 13.0746C16.8922 13.1121 16.8375 13.1835 16.8062 13.2886C16.775 13.3937 16.7789 13.5307 16.818 13.6996C16.857 13.8685 16.9313 14.0468 17.0408 14.2345C17.2676 14.6099 17.4925 15.1034 17.7153 15.7153C17.9382 16.3271 18.0496 16.8245 18.0496 17.2073C18.0496 17.6953 17.8365 18.1195 17.4104 18.4798C16.9841 18.8401 16.4934 19.0203 15.9382 19.0203C15.4846 19.0203 14.9997 18.6149 14.4836 17.8042L14.5774 17.7479C14.7886 17.6277 14.945 17.517 15.0466 17.4157C15.1483 17.3143 15.2109 17.1811 15.2343 17.0159C15.2578 16.8508 15.2109 16.6631 15.0936 16.4529L10.6595 6.71228L8.74739 7.77081L9.72103 9.38112C9.76795 9.45616 9.77775 9.54063 9.75038 9.63447C9.723 9.72831 9.67022 9.79772 9.59199 9.84277L9.13453 10.0905L8.67703 10.3383C8.59102 10.3908 8.50303 10.4039 8.41308 10.3777C8.32317 10.3514 8.25085 10.297 8.1961 10.2144L7.23418 8.61536L5.32215 9.67389L11.8912 18.2321C12.1102 18.5098 12.333 18.6618 12.5598 18.6881C12.7866 18.7144 13.0408 18.6375 13.3223 18.4573L13.51 18.3447Z"
        fill={color}
      />
    </svg>
  );
};

Home24.propTypes = {
  color: PropTypes.string,
};
