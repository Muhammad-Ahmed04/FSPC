import React, { useEffect, useState } from "react";
import { CreatPost } from "../../CreatPost";
import { Design } from "../../Design";
// import { IconLike } from "../../IconLike";
import { Meetups } from "../../Meetups";
import { PinnedGroup } from "../../PinnedGroup";
import { PopularTags } from "../../PopularTags";
import { Header } from "../../Header";
import { Post } from "../../Post";
import "./homepage.css";
import { Vector173 } from "../../../icons/Vector173";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [onSiteCompetitions, setonSiteCompetitions] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoadingCompetitions, setIsLoadingCompetitions] = useState(true);
  const [user, setUser] = useState()
  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts"); // Update URL to your posts API
        const result = await response.json();
        console.log("Fetched posts:", result); // Add this log
        setPosts(result);
        console.log(result)
        setIsLoadingPosts(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoadingPosts(false);
      }
    };


    // Fetch competitions
    const fetchCompetitions = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/competitions");
        const result = await response.json();
        setCompetitions(result);
        setIsLoadingCompetitions(false);
      } catch (error) {
        console.error("Error fetching competitions:", error);
        setIsLoadingCompetitions(false);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/me", {
          method: 'GET',
          credentials: 'include'
        });
        const result = await response.json();
        // const { me } = result;
        console.log(`result is ${JSON.stringify(result)}`)
        // console.log(result)
        // console.log(response.json())
        setUser(response);

      } catch (error) {
        console.error('Error Fetching User data', error)
      }
    }
    const fetchOnSiteCompeitions = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/get-onsite-competitions");
        const result = await response.json();
        console.log(result)
        setonSiteCompetitions(result);
        setIsLoadingCompetitions(false);
      } catch (error) {
        console.error("Error fetching competitions:", error);
        setIsLoadingCompetitions(false);
      }
    };

    // Call both fetch functions when the component mounts
    fetchPosts();
    fetchCompetitions();
    fetchOnSiteCompeitions()
    fetchUser();
  }, []);

  return (
    <>
      <Header page="home"></Header>
      <div id="Home" className="main">
        <div className="div-3">
          <div id="comp" className="meetups dark-46-on design-component-instance-node1">
            <div className="main-5">
              <div className="text-wrapper-9" style={{fontSize : "15px"}}><a href="/register-competition">Onsite Registerations ! </a></div>
            </div>
            {isLoadingCompetitions ? (
              <p>Loading competitions...</p>
            ) : (
              <div>
                {onSiteCompetitions.map((item) => (
                  <PopularTags className="design-component-instance-node"
                    dark="on" text="Registerations !" date={item.date} text1={item.title} text2={item.max_registerations} text3={item.registerations_completed} text4={item.location}/>
                ))}
              </div>
            )}
          </div>
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
              <div className="data-4">
                {isLoadingPosts ? (
                  <p>Loading posts...</p>
                ) : (
                  <div>
                    {/* Display posts here */}
                    {posts.map((item) => (
                      <Post
                        profilepicture={item.profilepicture}
                        idd={item._id}
                        dark="on"
                        text={item.description}
                        text1={item.userName}
                        text2={item.createdAt}
                        text3={item.likes}
                        text4={item.comments}
                        style={{ marginBottom: '50px' }} // Add styling here if needed
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="div-3">
          <div id="comp" className="meetups dark-46-on design-component-instance-node">
            <div className="main-5">
              <div className="title-4">
                <div className="text-wrapper-9" style={{fontSize : "15px"}}>Online Competitions ! </div>
                {/* <Vector173 className="vector-17-3" color="#F7F7F7" /> */}
              </div>
              <ul>
                {isLoadingCompetitions ? (
                  <p>Loading competitions...</p>
                ) : (
                  <div>
                    {/* Display competitions here */}
                    {competitions.map((item) => (
                      <Meetups kind={item.kind} date={item.date} text1={item.title} text2={item.location} key={item.id} link={item.link}></Meetups>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
