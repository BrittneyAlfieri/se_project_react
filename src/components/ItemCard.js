import React from "react";

function ItemCard({ item }) {
  return (
    <div className="card">
      <img className="card__image" src={item.link} />
      <div className="card__name-wrapper">
        <div className="card__name">{item.name}</div>
      </div>
    </div>
  );
}

export default ItemCard;
