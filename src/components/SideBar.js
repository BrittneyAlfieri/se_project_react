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
      </div>
    </div>
  );
};

export default SideBar;
