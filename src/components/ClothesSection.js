import React from "react";
import ItemCard from "./ItemCard";

const ClothesSection = ({ cards, onSelectCard }) => {
  return (
    <div className="clothessection__container">
      <div className="clothessection__header">
        <div className="clothessection__title">Your items</div>
        <button className="clothessection__button" type="button">
          + Add new
        </button>
      </div>
      <ul className="clothessection__card-container">
        {cards.map((item) => (
          <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
