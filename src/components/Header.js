import React from "react";
import headerLogo from "../images/header-logo.svg";
import headerUserImage from "../images/Avatar.svg";
import { ToggleSwitch } from "./index";
import { NavLink } from "react-router-dom";

function Header({ onAddButtonClick, currentLocation }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <NavLink exact to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="header logo image"
          />
        </NavLink>
        <p className="header__date-location">
          {currentDate}, {currentLocation}
        </p>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        <button
          className="header__button"
          type="button"
          onClick={onAddButtonClick}
        >
          + Add clothes
        </button>
        <NavLink exact to="/profile" className="header__username">
          Torrence Tegegne
        </NavLink>
        <img
          className="header__userimage"
          src={headerUserImage}
          alt="User's Avatar Image"
        />
      </div>
    </header>
  );
}

export default Header;
