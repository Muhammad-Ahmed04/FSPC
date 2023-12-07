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
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoadingCompetitions, setIsLoadingCompetitions] = useState(true);
  const [user,setUser] = useState()
  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts"); // Update URL to your posts API
        const result = await response.json();
        console.log("Fetched posts:", result); // Add this log
        setPosts(result);
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

    const fetchUser = async ()=>{
      try{
        const response = await fetch("http://localhost:8080/api/me",{
          method : 'GET',
          credentials : 'include'
        });
        const result = await response.json();
        const { me } = result;
        console.log(me)
        console.log(result)
        console.log(response.json())
        setUser(response);
        
      }catch(error){
        console.error('Error Fetching User data', error)
      }
    }

    // Call both fetch functions when the component mounts
    fetchPosts();
    fetchCompetitions();
    fetchUser();
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
              <div className="data-4">
                {isLoadingPosts ? (
                  <p>Loading posts...</p>
                ) : (
                  <div>
                    {/* Display posts here */}
                    {posts.map((item) => (
                      <Post
                        key={item._id}
                        dark="on"
                        text={item.description}
                        text1={item.username}
                        text2={item.createdAt}
                        text3="36,6545 Likes"
                        text4="56 comments"
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
                <div className="text-wrapper-9">Upcoming Competitions</div>
                <Vector173 className="vector-17-3" color="#F7F7F7" />
              </div>
              <ul>
                {isLoadingCompetitions ? (
                  <p>Loading competitions...</p>
                ) : (
                  <div>
                    {/* Display competitions here */}
                    {competitions.map((item) => (
                      <Meetups kind ={item.kind} date={item.date} text1={item.title} text2={item.location} key={item.id}></Meetups>
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
