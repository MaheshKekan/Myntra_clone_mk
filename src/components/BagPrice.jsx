function BagPrice({items}) {
  let totalPrice=0;
  let totalDiscount=0;
  let finalPayment=0;
  items.forEach(item => {
    totalPrice+=Math.floor(item.price*95);
    totalDiscount+= Math.floor((item.price*95-(item.price*95-((item.price*95)/item.discountPercentage)))+1);
    finalPayment=(totalPrice-totalDiscount+99);
  });
  

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({items.length} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalPrice}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{items.length > 0 ? 99:0}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagPrice;