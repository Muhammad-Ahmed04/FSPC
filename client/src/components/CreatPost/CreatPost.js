import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from 'react-textarea-autosize';
import "./style.css";

export const CreatPost = ({ dark, className, onPostCreated }) => {
  const [postContent, setPostContent] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/me", {
          method: 'GET',
          credentials: 'include'
        });
        const result = await response.json();
        const {sessionUser} = result
        console.log(`in create post ${JSON.stringify(sessionUser)}`);
        setUserInfo(sessionUser); // Assuming the user information is under the key 'userInfo'
      } catch (error) {
        console.error('Error Fetching User data', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCreatePost = async () => {
    console.log(`user info is ${userInfo}`)
    if (!userInfo) {
      console.error("User information not available");
      return;
    }

    const data = {
      userId: userInfo.id,
      userName : userInfo.username,
      description: postContent,
      picturePath: ""
    };

    try {
      const response = await fetch("http://localhost:8080/posts/postcreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (response.ok) {
        console.log("Post Successful");
        setPostContent("");
        navigate(0)
        if (onPostCreated) {
          onPostCreated();
        }
      } else {
        console.error("Post Failed");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`creat-post dark-30-${dark} ${className}`}>
      <div className="main-3">
        <div className="abatars">
          <img className="mask-group" alt="Mask group" src="/imgHome/mask-group-1.png" />
        </div>
        <TextareaAutosize
          className="input-data"
          placeholder="Let’s share what's going on your mind..."
          value={postContent}
          onChange={handlePostContentChange}
          minRows={1}
          maxRows={10}
        />
        <button type="submit" className="text-wrapper-3 button" onClick={handleCreatePost}>
          Create
        </button>
      </div>
    </div>
  );
};

CreatPost.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
  onPostCreated: PropTypes.func,
};
