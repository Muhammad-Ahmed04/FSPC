import React, { useState, useEffect } from "react";
import { Meetups } from "../../Meetups";
import { PopularTags } from "../../PopularTags";
import { Bitcoin3 } from "../../../icons/Bitcoin3";
import "./admin.css";
import MyModal from "../../Modal/modal";
import { Vector173 } from "../../../icons/Vector173";
import { Navigate, useNavigate } from 'react-router-dom';
import { AdminHeader } from '../../Header/AdminHeader';


const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/competitions");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [fetchDataFlag, setFetchDataFlag] = useState(true); // State to trigger data fetching
  const [modalMode, setModalMode] = useState(""); // State to store the modal mode
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
        const { sessionUser } = result
        setUserInfo(sessionUser); // Assuming the user information is under the key 'userInfo'
        if(sessionUser.role !== 'admin'){
          navigate('/')
          throw new Error('Unauthorized')
        }
      } catch (error) {
        console.error(error.message);
        // navigate()
      }
    };

    fetchUserInfo();
  }, []);
  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const result = await fetchData();
      if (result) {
        setData(result);
        setFetchDataFlag(false);
        console.log(result);
      }
    };
    fetchDataAndSetData();
  }, [fetchDataFlag]);

  const openModal = (mode) => {
    setModalMode(mode); // Set the modal mode based on the button clicked
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (competitionData) => {
    // Perform actions with the competitionData (e.g., send it to your API)
    console.log("Competition Data:", competitionData);
    let url = modalMode === "competition" ? "admin-uc" : "pastpapers";
    try {
      const response = await fetch("http://localhost:8080/api/" + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(competitionData),
      });

      if (response.ok) {
        // Data sent successfully
        console.log("Competition Upload Successful");
        setFetchDataFlag(true);
        const index = data.findIndex((item) => item.id === competitionData.id);

      // Update the selectedTag for the specific competition
      setData((prevData) => [
        ...prevData.slice(0, index),
        { ...prevData[index], kind: competitionData.kind },
        ...prevData.slice(index + 1),
      ]);
    } else {
      // Handle errors
      const errorMessage = await response.text(); // Get the error message from the response
      console.error("Competition Upload Failed:", errorMessage);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <>
      <AdminHeader page="pp"></AdminHeader>
    <>
      <MyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
        mode={modalMode} // Pass the modal mode as a prop
      />
      <div id="admin" className="main">
        <div className="div-3">
          <PopularTags
            className="design-component-instance-node"
            dark="on"
            icon={<Bitcoin3 className="bitcoin-3" />}
            mainClassName="popular-tags-instance"
            text="Registrations !"
            text1="SOFTEC"
            text10="IEEExtreme"
            text2="Upcoming"
            text3="PROCOM’24"
            text4="21 registration"
            text5="Asia West"
            text6="Upcoming"
            text7="ICPC"
            text8="Upcoming"
            text9="Coder’s Cup"
          />
        </div>
        <div className="div-3">
          <button
            type="button"
            className="button text-wrapper-3"
            onClick={() => openModal("competition")} // Specify the mode when clicking "Upload Competition"
          >
            Upload Competition
          </button>
          <button
            type="button"
            className="button text-wrapper-3"
            onClick={() => openModal("pastpaper")} // Specify the mode when clicking "Add Pastpaper"
          >
            Add Pastpaper
          </button>
        </div>

        <div className="right-bar">
          <div id="comp" className="meetups dark-46-on design-component-instance-node">
            <div className="main-5">
              <div className="title-4">
                <div className="text-wrapper-9">Upcoming Competitions</div>
                <Vector173 className="vector-17-3" color="#F7F7F7" />
              </div>
              <ul>
                {data.map((item) => (
                  <Meetups
                    date={item.date}
                    text1={item.title}
                    text2={item.location}
                    kind={item.kind} // Pass the type here instead of selectedTag
                    key={item.id}
                  ></Meetups>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  </>
  );
}
