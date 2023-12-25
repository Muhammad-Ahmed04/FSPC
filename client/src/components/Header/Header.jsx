import { React, useState, useEffect } from "react";
import { Group } from "../../components/Group";
import { Calendar } from "../../icons/Calendar";
import { Home } from "../../icons/Home";
import { Home25 } from "../../icons/Home25";
import { Home28 } from "../../icons/Home28";
import { Notification3 } from "../../icons/Notification3";
import { SearchIcon2 } from "../../icons/SearchIcon2";
import { Vector82 } from "../../icons/Vector82";
import "./header.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const response = await fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      console.log('could not end the user session')
    }
    console.log(response)
    localStorage.removeItem('access');
    navigate('/');
    navigate(0);
  };


    return (
      <div className="dropdown-content">
        <div className="logout-button" onClick={handleLogOut}>
          Log Out
        </div>
      </div>
  );
};


export const Header = ({ page }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [showDashboardOption, setShowDashboardOption] = useState(false);
  const navigate = useNavigate();
  const handlePastPaperLink = () => {
    console.log("Han bhai dab raha");
    if (userInfo && userInfo.role === 'admin') {
      navigate('/admin/pastpaper');
    } else {
      navigate('/pastpaper');
    }
    console.log("Han Bhai navigate bhi ho raha");
  };
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
        setUserInfo(sessionUser);
        console.log('User Info:', sessionUser);
        if (sessionUser && sessionUser.role === 'admin') {
          setShowDashboardOption(true);
        }
        
      } catch (error) {
        console.error('Error Fetching User data', error);
      }
    };


    fetchUserInfo();
  }, []);

  const handleDashboardClick = () => {
    navigate('/admin/home');
  };
  return (
    <div id="navbar" className="header">
      <div className="main">
        <div className="div-2">
          <img className="logo" alt="Logo" src="/imgHome/logo-1.png" />
          <div className="hipnode">FSPC</div>
        </div>
        <div className="main-2">
          <div className="icons">
            <div className={page === "home" ? "home-wrapper" : "home-wrapper-2"}>
              <Link to="/home">
                <Home className="icon-instance-node" color="white" />
              </Link>
            </div>
            <div className={page === "pp" ? "home-wrapper" : "home-wrapper-2"}>
            <Link to="#" onClick={(e) => { e.preventDefault(); handlePastPaperLink(); }}>
              <Calendar className="icon-instance-node" color="#F4F6F8" />
            </Link>
            </div>
            <div className="home-wrapper-2">

              <Link to="/register-competition">
                <Group
                  divClassName="design-component-instance-node"
                  ellipseClassName="group-instance"
                  ellipseClassNameOverride="group-instance"
                  img="/imgHome/subtract-8.svg"
                  subtract="/imgHome/subtract-9.svg"
                  subtract1="/imgHome/subtract-10.svg"
                  subtract2="/imgHome/subtract-11.svg"
                  color="#F4F6F8" 
                />
              </Link>
            </div>
            <div className="home-wrapper-2">
              <Home25 className="icon-instance-node" color="#F4F6F8" />
            </div>
            <div className="home-wrapper-2">
              <Home28 className="icon-instance-node" color="#F4F6F8" />
            </div>
          </div>
          <div className="search">
            <div className="title-wrapper">
              <div className="title">
                <div className="text-wrapper">Type here to search...</div>
                <SearchIcon2 className="search-icon" color="#858EAD" />
              </div>
            </div>
            <div className="right-info">
              <div className="notification">
                <Notification3 className="icon-instance-node" color="#F4F6F8" stroke="#262D34" />
              </div>
              <div className="div-2">
                <div className="name">
                  <div className="profile-image">
                    <div className="mask-group-wrapper">
                      <img className="mask-group" alt="Mask group"
                        src={`data:image/${userInfo && userInfo.profilepicture};base64, ${userInfo && userInfo.profilepicture}`}
                      />
                    </div>
                  </div>
                  <div className="AR-jakir">{userInfo && userInfo.username}</div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">
                    <Vector82 className="icon-instance-node" color="#F4F6F8" />
                  </button>
                  <div className="dropdown-content">
                    <Link to="/profile">Profile</Link>
                    <Link to="/settings">Settings</Link>
                    {showDashboardOption && (
                <div className="dashboard-option" onClick={handleDashboardClick}>
                    Dashboard
                    </div>
                    )}
                    <LogoutButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  page: PropTypes.string,
};
