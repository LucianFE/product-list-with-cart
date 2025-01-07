import emptyCart from "../assets/images/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <div className="empty-cart ">
      <div className="cart-img-container">
        <img src={emptyCart} alt="" />
      </div>
      <p className="light-text">Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
