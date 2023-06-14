import React from "react";
import headerUserImage from "../images/Avatar.svg";

const SideBar = ({ onEditProfileButton }) => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__userInfo">
        <div className="sidebar__profile">
          <img
            className="sidebar__userimage"
            src={headerUserImage}
            alt="User's Avatar Image"
          />
          <div className="header__username">Torrence Tegegne</div>
        </div>
        <div className="sidebar">
          <button className="sidebar__button" onClick={onEditProfileButton}>
            Change profile data
          </button>
          <button className="sidebar__button">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
