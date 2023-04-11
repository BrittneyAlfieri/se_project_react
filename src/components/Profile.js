import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ onSelectCard, cards }) => {
  return (
    <div className="profile__container">
      <SideBar />
      <ClothesSection cards={cards} onSelectCard={onSelectCard} />
    </div>
  );
};

export default Profile;
