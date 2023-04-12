import React from "react";
import closeButton from "../images/item-close-button.png";

function ItemModal({ selectedCard, onClose, onClickDelete }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button type="button" className="card__close" onClick={onClose}>
          <img src={closeButton}></img>
        </button>
        <img src={selectedCard.imageUrl} className="card__modal-image" />
        <div className="card__info">
          <div>
            <div className="card__modal-name">{selectedCard.name}</div>
            <div className="card__modal-weather">
              Weather type: {selectedCard.weather}
            </div>
          </div>
          <button
            onClickDelete={onClickDelete}
            type="submit"
            className="card__delete-button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
