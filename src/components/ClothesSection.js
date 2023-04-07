import React from "react";

const ClothesSection = () => {
  return (
    <div className="clothessection__container">
      <div className="clothessection__header">
        <div className="clothessection__title">Your items</div>
        <button className="clothessection__button" type="button">
          + Add new
        </button>
      </div>
      <ul className="clothessection__card-container"></ul>
    </div>
  );
};

export default ClothesSection;
