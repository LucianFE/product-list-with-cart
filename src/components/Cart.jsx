import { useGlobalContext } from "../context/GlobalContext";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

function Cart() {
  const { cartItems } = useGlobalContext();

  return (
    <section className="cart">
      <CartTitle />
      {cartItems.length === 0 ? <EmptyCart /> : <FullCart />}
    </section>
  );
}

export default Cart;
