import React from "react";
import headerLogo from "../images/header-logo.svg";
import { ToggleSwitch } from "./index";
import { NavLink } from "react-router-dom";

function Header({
  onAddButtonClick,
  currentLocation,
  loggedIn,
  onLoginButton,
  onRegisterButton,
  currentUser,
}) {
  const { name, avatar } = currentUser;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const renderUserAvatar = () => {
    if (avatar) {
      return (
        <img
          className="header__userImage"
          src={avatar}
          alt="User's Avatar Image"
        />
      );
    } else {
      const initials = name.charAt(0).toUpperCase();
      return <div className="header__avatar-placeholder">{initials}</div>;
    }
  };

  const renderAuthenticatedContent = () => {
    return (
      <>
        <ToggleSwitch />
        <button
          className="header__button"
          type="button"
          onClick={onAddButtonClick}
        >
          + Add clothes
        </button>
        <NavLink exact to="/profile" className="header__username">
          {name}
        </NavLink>
        {renderUserAvatar()}
      </>
    );
  };

  const renderUnauthenticatedContent = () => {
    return (
      <>
        <button
          className="header__button"
          type="button"
          onClick={onRegisterButton}
        >
          Sign Up
        </button>
        <button
          className="header__button"
          type="button"
          onClick={onLoginButton}
        >
          Login
        </button>
      </>
    );
  };

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
        {loggedIn
          ? renderAuthenticatedContent()
          : renderUnauthenticatedContent()}
      </div>
    </header>
  );
}

export default Header;
