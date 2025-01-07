import cart from "../assets/images/icon-add-to-cart.svg";
function AddToCartButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn initial-btn">
      <img src={cart} alt="add to cart icon" /> Add to cart
    </button>
  );
}

export default AddToCartButton;
