import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/Bag";
import { useState } from "react";

function Card({ item }) {
  const dispatch = useDispatch();
  const bagId = useSelector((state) => state.bagData);
  const [condition, setCondition] = useState(true);

  function addToBag() {
    dispatch(bagAction.addToBag(item.id));
    setCondition(false);
  }
  function removeFromBag() {
    dispatch(bagAction.removeFromBag(item.id));
    setCondition(true);
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.images} alt="item image" />
      <div className="rating">
        {item.rating} ⭐ | {item.reviews.length}
      </div>
      <div className="company-name">{item.brand}</div>
      <div className="item-name">{item.title}</div>
      <div className="price">
        <span className="current-price">Rs {Math.floor(item.price*95-((item.price*95)/item.discountPercentage))}</span>
        <span className="original-price">Rs {Math.floor(item.price*95)}</span>
        <span className="discount">({item.discountPercentage}% OFF)</span>
      </div>
      {condition ? (
        <button className="btn btn-danger btn-add-bag" onClick={addToBag}>
          Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-warning btn-add-bag"
          onClick={removeFromBag}
        >
          remove
        </button>
      )}
    </div>
  );
}
export default Card;
