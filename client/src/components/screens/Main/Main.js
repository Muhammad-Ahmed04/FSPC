import React, { useEffect, useState } from "react";
import { CreatPost } from "../../CreatPost";
import { Design } from "../../Design";
import { IconLike } from "../../IconLike";
import { Meetups } from "../../Meetups";
import { PinnedGroup } from "../../PinnedGroup";
import { PopularTags } from "../../PopularTags";
import { Header } from "../../Header";
import { Post } from "../../Post";
import "./homepage.css";
import { Vector173 } from "../../../icons/Vector173";

// const fetchData = async () => {
//   try {
//     const response = await fetch("http://localhost:8080/api/competitions");
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/competitions");
        const result = await response.json();
        setData(result); // Update the state with fetched data
        setIsLoading(false); // Set isLoading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false in case of an error
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);


  return (
    <>
      <Header page="home"></Header>
      <div id="Home" className="main">
        <div className="div-3">
          <PopularTags
            className="design-component-instance-node"
            dark="on"
            mainClassName="popular-tags-instance"
            text="Registerations"
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
          <PinnedGroup
            className="design-component-instance-node"
            dark="on"
            icon={<Design />}
            text="Rankings"
          />
        </div>
        <div className="div-3">
          <CreatPost className="design-component-instance-node" dark="on" />
          <div id="post" className="main-wrapper">
            <div className="div-4">
              <img className="rectangle-2" alt="Rectangle" src="/imgHome/rectangle-24.png" />
              <div className="data-4">
                <div className="data-5">
                  <div className="title-6">
                    <img
                      className="bitcoin-has-tumbled-2"
                      alt="Bitcoin has tumbled"
                      src="/imgHome/bitcoin-has-tumbled-from-its-record-high-of-58-000-after-words.png"
                    />
                  </div>
                  <div className="user-2">
                    <div className="memoji-boys-wrapper">
                      <img className="memoji-boys-2" alt="Memoji boys" src="/imgHome/memoji-boys-3-15-4.png" />
                    </div>
                    <div className="name-6">
                      <div className="name-7">
                        <div className="name-8">
                          <div className="pavel-gvay-2">Dr. Rafi</div>
                          <div className="ellipse-2" />
                        </div>
                        <div className="element-weeks-ago-2">Few hours ago</div>
                      </div>
                      <div className="action-2">
                        <div className="text-wrapper-17">36,6545 Likes</div>
                        <div className="text-wrapper-17">56 comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icon-like-wrapper">
                  <IconLike className="design-component-instance-node-2" heartClassName="icon-like-instance" />
                </div>
              </div>
            </div>
          </div>
          <Post
            className="design-component-instance-node"
            dark="on"
            hasDiv={false}
            hasEllipse={false}
            hasRectangle={false}
            hasTags={false}
            iconLikeHeartClassName="post-2"
            iconLikeIconLikeClassName="post-instance"
            memojiBoys="/imgHome/memoji-boys-3-15-2.png"
            text="Best, current resources to polish Data Structures &amp; Algorithms?"
            text1="Hassan Gatta"
            text2="3 days ago"
            text3="100 Likes"
            text4="184 comments"
          />
          <Post
            avatarsClassName="post-3"
            className="design-component-instance-node"
            dark="on"
            hasDiv={false}
            hasEllipse={false}
            hasRectangle={false}
            hasTags={false}
            iconLikeHeartClassName="post-4"
            iconLikeIconLikeClassName="post-instance"
            memojiBoys="/imgHome/memoji-boys-3-15-1.png"
            text="Practice routine for the upcoming ICPC?"
            text1="Mohsin Drac"
            text2="1 week ago"
            text3="306 Likes"
            text4="209 comments"
          />
          <Post
            className="design-component-instance-node"
            dark="on"
            hasDiv={false}
            hasEllipse={false}
            hasRectangle={false}
            hasTags={false}
            iconLikeHeartClassName="post-5"
            iconLikeIconLikeClassName="design-component-instance-node-2"
            memojiBoys="/imgHome/memoji-boys-3-15-4.png"
            text="How many teams can take part in this year’s Asia West?"
            text1="Waqas"
            text2="2 weeks ago"
            text3="533Likes"
            text4="44 comments"
          />
        </div>
        <div className="div-3">
          <div id="comp" className="meetups dark-46-on design-component-instance-node">
            <div className="main-5">
              <div className="title-4">
                <div className="text-wrapper-9">Upcoming Competitions</div>
                <Vector173 className="vector-17-3" color="#F7F7F7" />
              </div>
              <ul>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  {/* Display your fetched data here */}
                  {data.map((item) => (
                  <Meetups date={item.date} text1={item.title} text2={item.location} key={item.id}></Meetups>
                  ))}
                </div>
              )}
              </ul>
            </div>
          </div>

          {/* <Meetups
          className="design-component-instance-node"
          dark="on"
          rectangle="/imgHome/rectangle-32.svg"
          text1="SOFTEC"
          text2="FAST&nbsp;&nbsp;•&nbsp;&nbsp;Lahore, Pakistan" */}

          {/* /> */}
        </div>
      </div>
    </>
  );
};
