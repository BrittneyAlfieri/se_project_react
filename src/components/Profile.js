import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ onSelectCard, cards, onAddButtonClick, currentUser }) => {
  return (
    <div className="profile__container">
      <SideBar />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        onAddButtonClick={onAddButtonClick}
        currentUser={currentUser}
      />
    </div>
  );
};

export default Profile;
