import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({
  onSelectCard,
  cards,
  onAddButtonClick,
  currentUser,
  onEditProfileButton,
  signOut,
}) => {
  return (
    <div className="profile__container">
      <SideBar
        onEditProfileButton={onEditProfileButton}
        signOut={signOut}
        currentUser={currentUser}
      />
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
