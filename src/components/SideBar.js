import React from "react";
import headerUserImage from "../images/Avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__userInfo">
        <img
          className="sidebar__userimage"
          src={headerUserImage}
          alt="User's Avatar Image"
        />
        <div className="header__username">Torrence Tegegne</div>
        <button className="sidebar__button">Change profile data</button>
        <button className="sidebar__button">Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
