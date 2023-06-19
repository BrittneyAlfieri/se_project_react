import React from "react";

const SideBar = ({ onEditProfileButton, signOut, currentUser }) => {
  const { name, avatar } = currentUser;

  return (
    <div className="sidebar__container">
      <div className="sidebar__userInfo">
        <div className="sidebar__profile">
          <img
            className="sidebar__userimage"
            src={avatar}
            alt="User's Avatar Image"
          />
          <div className="header__username">{name}</div>
        </div>
        <div className="sidebar">
          <button className="sidebar__button" onClick={onEditProfileButton}>
            Change profile data
          </button>
          <button className="sidebar__button" onClick={signOut}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
