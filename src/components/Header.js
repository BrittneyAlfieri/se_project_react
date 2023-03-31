import React from "react";
import headerLogo from "../images/header-logo.svg";
import headerUserImage from "../images/Avatar.svg";

function Header({ onAddButtonClick, currentLocation }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src={headerLogo}
          alt="header logo image"
        />
        <p className="header__date-location">
          {currentDate}, {currentLocation}
        </p>
      </div>
      <div className="header__right">
        <button
          className="header__button"
          type="button"
          onClick={onAddButtonClick}
        >
          + Add clothes
        </button>
        <div className="header__username">Torrence Tegegne</div>
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
