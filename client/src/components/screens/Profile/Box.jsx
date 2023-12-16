import "./style.css";
import { Header } from "../../Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Box() {
  const [userInfo, setUserInfo] = useState(null);
  const [selectedSection, setSelectedSection] = useState("aboutMe");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/me", {
          method: 'GET',
          credentials: 'include'
        });
        const result = await response.json();
        const { sessionUser } = result;
        setUserInfo(sessionUser);
      } catch (error) {
        console.error('Error Fetching User data', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const base64Image = await convertImageToBase64(file);
        await updateProfilePicture(base64Image);
        // Optionally, you can update the UI to show the new profile picture.
      } catch (error) {
        console.error("Error handling profile picture change:", error);
      }
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result.split(",")[1]); // Extract base64 data
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const updateProfilePicture = async (base64Image) => {
    try {
      const response = await fetch("http://localhost:8080/api/update-profile-picture", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ userId: userInfo.id, profilePicture: base64Image }),
      });

      if (response.ok) {
        console.log('Profile picture updated successfully');
        navigate(0)
      } else {
        console.error('Failed to update profile picture');
      }
    } catch (error) {
      console.error('Error updating profile picture', error);
    }
  };

  const editProfile = async () => {
    const updatedAboutMe = prompt("Enter your updated 'About Me'");

    try {
      const response = await fetch("http://localhost:8080/api/update-profile", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ userId: userInfo.id, aboutMe: updatedAboutMe }),
      });

      if (response.ok) {
        setUserInfo({
          ...userInfo,
          aboutme: updatedAboutMe,
        });

        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "aboutMe":
        return (
          <>
            <div className="text-wrapper-4">ABOUT ME</div>
            <p className="about">{userInfo && userInfo.aboutme}</p>
          </>
        );
      case "teams":
        return (
          <>
            <div className="text-wrapper-7">Team</div>
            {/* Render team information here */}
          </>
        );
      case "stats":
        return (
          <>
            <div className="text-wrapper-8">Stats</div>
            {/* Render stats information here */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header page="home"></Header>
      <div className="box">
        <div className="profile">
          <div className="change-picture">
          </div>
          <div className="overlap">
            <div className="haha">
              <div className="overlap-group">
                <div id="profile-picture-button">
                  <label htmlFor="profile-picture-input" className="change-picture-label" style={{cursor : "pointer"}}>
                    Change Display
                  </label>
                  <input
                    type="file"
                    id="profile-picture-input"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    style={{ display: "none" }}
                  />
                </div>
                <div id="update-profile" >
                  <button className='edit-profile' onClick={editProfile}> Update profile
                  </button>
                </div>
                <div className="rectangle" />
              </div>
              <img className="banner-DDD" alt="Banner DDD" src="/imgProfile/banner-ddd.png" />
            </div>
            <div className="spotfy">
              <img className="c1" alt="c1" src="/imgProfile/image-6.png" />
              <div className="text-wrapper">ICPC</div>
            </div>
            <div className="avatar">
              <img
                className="img"
                alt="Avatar"
                src={`data:image/${userInfo && userInfo.profilepicture};base64, ${userInfo && userInfo.profilepicture}`}
              /> 
              </div>
            <div className="nick">
              <div className="div">
                <div className="text-wrapper-2">{userInfo && userInfo.username}</div>
                <div className="text-wrapper-3"></div>
              </div>
            </div>

            <div className="profilee">
              {renderSectionContent()}
            </div>
            <div className="all-line">
              <div className="line-wrapper">
                <img
                  className="line"
                  alt="Line"
                  src="/imgProfile/line-2.svg"
                  style={{ left: selectedSection === 'aboutMe' ? '96px' : selectedSection === 'teams' ? '320px' : '560px' }}
                />
              </div>
              <img className="line-2" alt="Line" src="/imgProfile/line-3.svg" />
            </div>
            <div className="element-text">
              <div
                className={`text-wrapper-6 ${selectedSection === 'aboutMe' ? 'active' : ''}`}
                onClick={() => handleSectionClick("aboutMe")}
              >
                User Info
              </div>
              <div
                className={`text-wrapper-7 ${selectedSection === 'teams' ? 'active' : ''}`}
                onClick={() => handleSectionClick("teams")}
              >
                Team
              </div>
              <div
                className={`text-wrapper-8 ${selectedSection === 'stats' ? 'active' : ''}`}
                onClick={() => handleSectionClick("stats")}
              >
                Stats
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}