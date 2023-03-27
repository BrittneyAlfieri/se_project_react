import React from "react";
import closeButton from "../images/item-close-button.png";

function ItemModal({ selectedCard, onClose }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button type="button" className="card__close" onClick={onClose}>
          <img src={closeButton}></img>
        </button>
        <img src={selectedCard.link} className="card__modal-image" />
        <div className="card__info">
          <div className="card__modal-name">{selectedCard.name}</div>
          <div className="card__modal-weather">
            Weather type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
