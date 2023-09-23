/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Vector173 } from "../../icons/Vector173";
import "./style.css";



export const PinnedGroup = ({
  dark,
  className,
  text = "Pinned Group",
 
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = "https://codeforces.com/api/user.ratedList";
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const filteredData = result.result.filter(
          (user) => user.country === "Pakistan" && user.city === "Karachi"
        );
        const top5Data = filteredData.slice(0, 5);
        setData(top5Data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={`pinned-group dark-18-${dark} ${className}`}>
      <div className="main-2">
        <div className="title-2">
          <div className="title-2">
            <div className="text-wrapper-2">{text}</div>
            <Vector173 className="vector" color={dark === "on" ? "#F7F7F7" : "#3F4354"} />
          </div>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.map((user) => (
              <div id="user" className="tag-2">
                <img id="userIcon" alt="icon9" src={user.titlePhoto} />
                <div className="name-2">
                <div className="javascript-2">{user.handle}</div>
                <p className="element-posted-by-3">{user.rating}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    //   </div>
    // </div>
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
