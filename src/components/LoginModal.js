import ModalWithForm from "./ModalWithForm";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const LoginModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    onSubmit(userData);
  };

  return (
    <ModalWithForm
      title="Log in"
      onClose={onClose}
      buttonText="Log in"
      onSubmit={handleSubmit}
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal__input"
            id="email-input"
            placeholder="Email"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="modal__input"
            id="password-input"
            placeholder="Password"
            type="text"
            name="password"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <div className="modal__footer">
          <button className="modal__button" type="submit">
            Log in
          </button>
          <Link to="/signup" className="modal__link">
            or Register
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
