import { useGlobalContext } from "../context/GlobalContext";

function CartTitle() {
  return (
    <h2>
      Your Cart (<span>0</span>)
    </h2>
  );
}

export default CartTitle;
