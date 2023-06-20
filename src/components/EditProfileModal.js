import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ onClose, onEditProfile, token, currentUser }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfile({ name, avatar });
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save changes"
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
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
