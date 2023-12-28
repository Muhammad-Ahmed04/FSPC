import "./style.css";
import { Header } from "../../Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ProfileEditModal = ({ onClose, onSave }) => {
  const [updatedAboutMe, setUpdatedAboutMe] = useState('');

  const handleSave = () => {
    onSave(updatedAboutMe);
    onClose();
  };

  return (
    <div className="profile-edit-modal">
      <h3 style={{color:"white"}}>Edit 'About Me'</h3>
      <input
        type="text"
        value={updatedAboutMe}
        onChange={(e) => setUpdatedAboutMe(e.target.value)}
        placeholder="Enter your updated 'About Me'"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default function Box() {
  const [userInfo, setUserInfo] = useState(null);
  const [selectedSection, setSelectedSection] = useState("aboutMe");
  const [isEditingAboutMe, setIsEditingAboutMe] = useState(false);
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
        toast.success("Profile picture updated successfully",{
          autoClose : 200,
          hideProgressBar: true,
          position:"top-center"
        })
        // console.log('Profile picture updated successfully');
       setTimeout(() => {
         navigate(0)
       }, 1500);
      } else {

        console.error('Failed to update profile picture');
        toast.error('Failed to update profile picture', {
          position: "top-center",
          autoClose: 200,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored"
        });
      }
    } catch (error) {
      toast.error('File Too Large', {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "colored"
      });
      console.error('Error updating profile picture', error);
    }
  };

  const editProfile = async () => {
    setIsEditingAboutMe(true);
  };

  const saveUpdatedAboutMe = async (updatedAboutMe) => {
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
        toast.success("Profile Updated successfully",{
          position: "top-center"
        })
      } else {
        console.error('Failed to update profile');
        toast.error('Failed to update profile', {
          position: "top-center",
          autoClose: 200,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored"
        });

      }
    } catch (error) {
      console.error('Error updating profile', error);
    } finally {
      setIsEditingAboutMe(false);
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
      {isEditingAboutMe && (
        <ProfileEditModal onClose={() => setIsEditingAboutMe(false)} onSave={saveUpdatedAboutMe} />
      )}
    </>
  );
}