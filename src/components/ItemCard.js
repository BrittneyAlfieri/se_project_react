import cardheart from "../images/card-heart.png";
import solidcardheart from "../images/solid-card-heart.png";

function ItemCard({ item, onSelectCard, onCardLike, currentUser }) {
  const isLiked = item.likes.some((item) => item.owner === currentUser._id);
  console.log(item.likes, "likes");
  console.log(currentUser, "currentUser");
  console.log(item);
  const renderNotLiked = () => {
    return (
      <button className="card__button" onClick={() => onCardLike(item)}>
        <img
          className="card__heart"
          src={cardheart}
          alt="item card is liked, solid heart icon"
        />
      </button>
    );
  };

  const renderLiked = () => {
    return (
      <button className="card__button" onClick={() => onCardLike(item)}>
        <img
          className="card__heart"
          src={solidcardheart}
          alt="item card is liked, solid heart icon"
        />
      </button>
    );
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__header">
        <div className="card__name-wrapper">
          <div className="card__name">{item.name}</div>
        </div>
        {isLiked ? renderLiked() : renderNotLiked()}
      </div>
    </div>
  );
}

export default ItemCard;
