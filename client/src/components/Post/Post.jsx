import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconLike } from "../IconLike";
import "./style.css";


export const Post = ({
  dark,
  className,
  text = "Default text",
  text1 = "Default user",
  text2 = "Default time ago",
  text3,
  text4,
  iconLikeIconLikeClassName,
  iconLikeHeartClassName,
  profilepicture,
  idd
}) => {

  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/me", {
          method: 'GET',
          credentials: 'include'
        });
        const result = await response.json();
        const { sessionUser } = result
        console.log(`in create post ${JSON.stringify(sessionUser)}`);
        setUserInfo(sessionUser); // Assuming the user information is under the key 'userInfo'
      } catch (error) {
        console.error('Error Fetching User data', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLikeClick = async () => {
    setIsLiked(!isLiked);
    let response
    try {
      let data = {
        id: idd,
        text3,
        userId: userInfo.id
      }
      response = await fetch("http://localhost:8080/posts/update-likes", {
        method: 'PUT',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('haha')
        navigate(0)
      }
    } catch (error) {
      console.error('Error Fetching User data', error);
    }
  };


  return (
    <div className={`post dark-32-${dark} ${className}`}>
      <div className="main-4">
        <div className="data">
          <img className="post-image" src={`data:image/${profilepicture};base64, ${profilepicture}`} alt="Post Image" />
          <div className="data-2">
            <div className="title-3">
              <p className="bitcoin-has-tumbled">{text}</p>
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
                  <div className="element-likes">{text3} likes</div>
                  <div className="element-comments">{text4} comments</div>
                </div>
              </div>
            </div>
          </div>
          <div className="love" onClick={handleLikeClick}>
            <IconLike
              className={iconLikeIconLikeClassName}
              heartClassName={isLiked ? `${iconLikeHeartClassName} liked` : iconLikeHeartClassName}
              fillColor={(isLiked || (userInfo && userInfo.likedPosts && userInfo.likedPosts.includes(idd))) ? "#FE4401" : "transparent"}
              />
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
