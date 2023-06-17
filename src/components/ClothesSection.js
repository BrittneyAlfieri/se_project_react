import ItemCard from "./ItemCard";

const ClothesSection = ({
  cards,
  onSelectCard,
  onAddButtonClick,
  currentUser,
}) => {
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
        {cards.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectCard={onSelectCard}
            currentUser={currentUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
