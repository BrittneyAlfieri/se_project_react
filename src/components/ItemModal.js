import closeButton from "../images/item-close-button.png";

function ItemModal({
  selectedCard,
  onClose,
  onClickDelete,
  currentUser,
  token,
}) {
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  return (
    <div className="modal">
      <div className="modal__container">
        <button type="button" className="card__close" onClick={onClose}>
          <img src={closeButton} alt="close-button"></img>
        </button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="card__modal-image"
        />
        <div className="card__info">
          <div>
            <div className="card__modal-name">{selectedCard.name}</div>
            <div className="card__modal-weather">
              Weather type: {selectedCard.weather}
            </div>
          </div>
          <button
            onClick={() => onClickDelete(selectedCard)}
            type="submit"
            className={itemDeleteButtonClassName}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
