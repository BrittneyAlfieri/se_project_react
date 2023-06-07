import React from "react";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useContext from "react";

const ClothesSection = ({ cards, onSelectCard, onAddButtonClick }) => {
  const currentUser = useContext(CurrentUserContext);

  const userCards = cards.filter((item) => item.owner._id === currentUser._id);
  return (
    <div className="clothessection__container">
      <div className="clothessection__header">
        <div className="clothessection__title">Your items</div>
        <button
          onClick={onAddButtonClick}
          className="clothessection__button"
          type="button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothessection__card-container">
        {userCards.map((item) => (
          <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
