import ModalWithForm from "./ModalWithForm";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const RegisterModal = ({ onClose, onSubmit }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      avatar,
      name,
      email,
      password,
    };
    onSubmit(userData);
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      buttonText="Next"
      onSubmit={handleSubmit}
      buttonText="Next"
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Email*
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="modal__input"
            value={email}
            id="email-input"
            placeholder="Email"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Password*
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="modal__input"
            value={password}
            id="password-input"
            placeholder="Password"
            type="text"
            name="password"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Name
          <input
            onChange={(e) => setName(e.target.value)}
            className="modal__input"
            value={name}
            id="name-input"
            placeholder="Name"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="image-label">
          Avatar URL
          <input
            onChange={(e) => setAvatar(e.target.value)}
            className="modal__input"
            value={avatar}
            id="image-input"
            placeholder="Avatar URL"
            type="url"
            name="avatarUrl"
          ></input>
        </label>
      </div>
      <Link to="/signin" className="modal__link">
        or Login
      </Link>
    </ModalWithForm>
  );
};

export default RegisterModal;
