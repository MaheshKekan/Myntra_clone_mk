import { useDispatch } from "react-redux";
import { bagAction } from "../store/Bag";

function BagSummary({item}){
  const dispatch=useDispatch();
  function removeFromBag(){
    dispatch(bagAction.removeFromBag(item.id));
  }

 return (
    <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.images} alt={item.item_name} />
    </div>
    <div className="item-right-part">
      <div className="company">{item.brand}</div>
      <div className="item-name">{item.title}</div>
      <div className="price-container">
        <span className="current-price">Rs {Math.floor(item.price*95-((item.price*95)/item.discountPercentage))}</span>
        <span className="original-price">Rs {Math.floor(item.price*95)}</span>
        <span className="discount-percentage">({Math.floor(item.discountPercentage)}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.returnPolicy}</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        {/* <span className="delivery-details-days">{item.delivery_date}</span> */}
      </div>
    </div>

    <div className="remove-from-cart" onClick={removeFromBag}>X</div>
  </div>
 )
}

export default BagSummary;