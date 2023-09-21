import React from "react";
import { Group } from "../../components/Group";
import { Calendar } from "../../icons/Calendar";
import { Home } from "../../icons/Home";
import { Home25 } from "../../icons/Home25";
import { Home28 } from "../../icons/Home28";
import { Notification3 } from "../../icons/Notification3";
import { SearchIcon2 } from "../../icons/SearchIcon2";
import { Vector82 } from "../../icons/Vector82";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="main">
        <div className="div-2">
          <img className="logo" alt="Logo" src="/imgHome/logo-1.png" />
          <div className="hipnode">FSPC</div>
        </div>
        <div className="main-2">
          <div className="icons">
            <div className="home-wrapper">
              <Home className="icon-instance-node" color="white" />
            </div>
            <div className="home-wrapper-2">
              <Calendar className="icon-instance-node" color="#F4F6F8" />
            </div>
            <div className="home-wrapper-2">
              <Group
                divClassName="design-component-instance-node"
                ellipseClassName="group-instance"
                ellipseClassNameOverride="group-instance"
                img="/imgHome/subtract-8.svg"
                subtract="/imgHome/subtract-9.svg"
                subtract1="/imgHome/subtract-10.svg"
                subtract2="/imgHome/subtract-11.svg"
              />
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
                      <img className="mask-group" alt="Mask group" src="/imgHome/mask-group-1.png" />
                    </div>
                  </div>
                  <div className="AR-jakir">Mateen</div>
                </div>
                <Vector82 className="icon-instance-node" color="#F4F6F8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
