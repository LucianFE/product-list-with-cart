import carbon from "../assets/images/icon-carbon-neutral.svg";
import { useGlobalContext } from "../context/GlobalContext";
import removeItem from "../assets/images/icon-remove-item.svg";
import ConfirmBtn from "./ConfirmBtn";

function FullCart() {
  const { cartItems, removeItemCart, handleConfirmOrder } = useGlobalContext();
  const total = cartItems.reduce((acc, item) => {
    {
      acc += item.price * item.amount;
      return acc;
    }
  }, 0);

  return (
    <div className="full-cart">
      <ul className="cart-items">
        {cartItems.map((item) => {
          const { id, name, price, amount } = item;
          return (
            <li className="cart-item flex" key={id}>
              <div className="content">
                <p className="name">{name}</p>
                <div className="details flex">
                  <p className="quantity">{amount}x</p>
                  <p className="price">@${price.toFixed(2)}</p>
                  <p className="total">${(amount * price).toFixed(2)}</p>
                </div>
              </div>
              <div className="action flex">
                <button
                  className="action-btn quantity-btn"
                  onClick={() => {
                    removeItemCart(item.id);
                  }}
                >
                  <img src={removeItem} alt="" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total-items flex">
        <p>Order Total</p>
        <p className="total-price">${total.toFixed(2)}</p>
      </div>
      <div className="carbon-delivery flex">
        <img src={carbon} alt="icon" />
        <p>
          This is a <span>carbon-neutral delivery</span>
        </p>
      </div>
      <ConfirmBtn onClick={handleConfirmOrder}>Confirm Order</ConfirmBtn>
    </div>
  );
}

export default FullCart;
