import React from "react";
import "./style.css";
import { Header } from "../../Header";

export default function Box() {
  return (
    <>
      <Header page="home"></Header>
      <div className="box">
        <div className="profile">
          <div className="overlap">
            <div className="haha">
              <div className="overlap-group">
                <div className="rectangle" />
              </div>
              <img className="banner-DDD" alt="Banner DDD" src="/imgProfile/banner-ddd.png" />
            </div>
            <div className="spotfy">
              <img className="c1" alt="c1" src="/imgProfile/image-6.png" />
              <div className="text-wrapper">ICPC</div>
            </div>
            <div className="avatar">
              <img className="img" alt="Avatar" src="/imgProfile/avatar.png" />
            </div>
            <div className="nick">
              <div className="div">
                <div className="text-wrapper-2">Mateen</div>
                <div className="text-wrapper-3">#0280</div>
              </div>
            </div>
            {/* Integrated content of the "Profilee" component */}
            <div className="profilee">
              <div className="text-wrapper-4">ABOUT ME</div>
              <div className="text-wrapper-5">NOTE</div>
              <p className="about">
                Web Developer, love all things related to code.
              </p>
              <p className="note-click">Click to add a note</p>
            </div>
          <div className="all-line">
            <div className="line-wrapper">
              <img className="line" alt="Line" src="/imgProfile/line-2.svg" />
            </div>
            <img className="line-2" alt="Line" src="/imgProfile/line-3.svg" />
          </div>
          <div className="element-text">
            <div className="text-wrapper-6">User Info</div>
            <div className="text-wrapper-7">Team</div>
            <div className="text-wrapper-8">Stats</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
