

import PropTypes from "prop-types";
import React from "react";
// import { Button } from "../Button";
import "./style.css";

import { useState } from 'react';

  export const CreatPost = ({ dark, className }) => {
    const [postContent, setPostContent] = useState("");
    // const navigate = useNavigate();
  
    const handlePostContentChange = (event) => {
      setPostContent(event.target.value);
    };
  
    const handleCreatePost = async () => {
      // You can handle the creation of the post here, e.g., by sending a request to your server
      const data = {username: "ramshaahmed", description: postContent, picturePath: "" };
      sendDataToBackend(data);
    };
  
    const sendDataToBackend = async (data) => {
      console.log(JSON.stringify(data));
      try {
        const response = await fetch("http://localhost:8080/posts/postcreate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          // Data sent successfully
          console.log("Post Successful");
          // navigate("/home");
        } else {
          // Handle errors
          console.error("Post Failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      setPostContent("");
    };

  return (
    <div className={`creat-post dark-30-${dark} ${className}`}>
      <div className="main-3">
        <div className="abatars">
          <img className="mask-group" alt="Mask group" src="/imgHome/mask-group-1.png" />
        </div>
          <input
            className= "input-data" 
            placeholder="Let’s share what's going on your mind..."
            value={postContent}
            onChange={handlePostContentChange}
          />

        <button type ="submit" className="text-wrapper-3 button" onClick={handleCreatePost}>Create
        </button>
      </div>
    </div>
  );
};


CreatPost.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
};
