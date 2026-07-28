import BagSummary from "./BagSummary";
import BagPrice from "./BagPrice";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
function Bag() {
  const items = useSelector((state) => state.cardData);
  const bagId = useSelector((state) => state.bagData);
  const bagItems = items.filter((item) => {
    const check = bagId.indexOf(item.id) >= 0;
    return check;
  });

  return (
    <div className="bag-page">
      <div className="bag-items-container">
        {bagItems.map((bagItem) => {
           return <BagSummary key={bagItem.id} item={bagItem}></BagSummary>;
        })}
        {bagItems.length===0 && <CartEmpty/>}
      </div>
      <div className="bag-summary">
        <BagPrice items={bagItems}></BagPrice>
      </div>
    </div>
  );
}

export default Bag;
