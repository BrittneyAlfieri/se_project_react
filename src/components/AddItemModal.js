import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
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
    setName({ name: e.target.value });
  }

  function handleImageUrlChange(e) {
    setImageUrl({ imageUrl: e.target.value });
  }

  function handleWeatherChange(e) {
    setWeather({ weather: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(setName, setImageUrl, setWeather);
  }

  return (
    <ModalWithForm
      title="New garment"
      // onClose={handleCloseModal}
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
            name="link"
            minLength="1"
            maxLength="30"
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
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
