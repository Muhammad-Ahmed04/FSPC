import React, { useState, useEffect } from "react";
// import { CreatPost } from "../../CreatPost";
import { Meetups } from "../../Meetups";
import { PopularTags } from "../../PopularTags";
import { Bitcoin3 } from "../../../icons/Bitcoin3";
import "./style.css";
import MyModal from "../../Modal/modal";
import { Vector173 } from "../../../icons/Vector173";


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


  // Call the fetchData function when the component is loaded
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


  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleModalSubmit = async (competitionData) => {
    // Perform actions with the competitionData (e.g., send it to your API)
    console.log("Competition Data:", competitionData);
    try {
      const response = await fetch('http://localhost:8080/api/admin-uc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(competitionData),
      });

      if (response.ok) {
        // Data sent successfully
        console.log('Competition Upload Successful');
        setFetchDataFlag(true);
      } else {
        // Handle errors
        console.error('Competition Upload Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <MyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
      />
      <div className="main">
        <div className="div-3">
          <PopularTags
            className="design-component-instance-node"
            dark="on"
            icon={<Bitcoin3 className="bitcoin-3" />}
            mainClassName="popular-tags-instance"
            text="Registrations"
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
          <button type="button" className="button text-wrapper-3" onClick={openModal}> Upload Competition</button>
        </div>
        <div className="right-bar">
          <div className="meetups dark-46-on design-component-instance-node">
            <div className="main-5">
              <div className="title-4">
                <div className="text-wrapper-9">Upcoming Competitions</div>
                <Vector173 className="vector-17-3" color="#F7F7F7"/>
              </div>
              <ul>
            {data.map((item) => (
              <Meetups text1={item.title} text2={item.location}></Meetups>
            ))}
          </ul>
            </div>
          </div>
          
          {/* <Meetups
          className="design-component-instance-node"
          dark="on"
          rectangle="/imgHome/rectangle-32-6.svg"
          text="Upcoming Competitions"
          text1="SOFTEC"
          text2="FAST&nbsp;&nbsp;•&nbsp;&nbsp;Lahore, Pakistan"
          // text3="Procom’24"
          // text4="FAST&nbsp;&nbsp;•&nbsp;&nbsp;Karachi, Pakistan"
          // text5="Asia West"
          // text6="GIKI&nbsp;&nbsp;•&nbsp;&nbsp;Islamabad, Pakistan"
        /> */}
        </div>
      </div>
    </>
  );
};