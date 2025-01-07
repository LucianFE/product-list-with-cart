import confirmIcon from "../assets/images/icon-order-confirmed.svg";

import { useGlobalContext } from "../context/GlobalContext";
import ConfirmBtn from "./ConfirmBtn";
import ModalCartItem from "./ModalCartItem";

function Modal() {
  const { cartItems, handleStartNewOrder } = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={confirmIcon} alt="confirm" />
        <h3 className="split-text flex">
          <span>Order</span> <span>Confirmed</span>
        </h3>
        <p className="light-text">We hope you enjoy your food!</p>
        <ul className="modal-items">
          {cartItems.map((item) => (
            <ModalCartItem item={item} key={item.id} />
          ))}
        </ul>
        <ConfirmBtn onClick={handleStartNewOrder}>Start New Order</ConfirmBtn>
      </div>
    </div>
  );
}

export default Modal;
