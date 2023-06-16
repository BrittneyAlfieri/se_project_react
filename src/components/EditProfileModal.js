import React from "react";
import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ onClose, onEditProfile, token }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Name*
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
        <label className="modal__label" id="name-label">
          Avatar
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
        <div className="modal__footer">
          <button className="modal__button" type="submit">
            Save changes
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
