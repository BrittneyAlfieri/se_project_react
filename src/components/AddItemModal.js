import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose, token }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen === true) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }
  
  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(token, { name, imageUrl, weather });
  }

  return (
    <ModalWithForm
      title="New garment"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Name
          <input
            value={name}
            onChange={handleNameChange}
            className="modal__input"
            id="name-input"
            placeholder="Name"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="image-label">
          Image
          <input
            value={imageUrl}
            onChange={handleImageUrlChange}
            className="modal__input"
            id="image-input"
            placeholder="Image URL"
            type="url"
            name="imageUrl"
            minLength="1"
          ></input>
        </label>
      </div>
      <p className="modal__weather-description">Select the weather type:</p>
      <div className="modal__radio-container">
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="hot"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Hot</label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="warm"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Warm</label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="cold"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Cold</label>
        </div>
        <button className="modal__button" type="submit">
          Add garment
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
