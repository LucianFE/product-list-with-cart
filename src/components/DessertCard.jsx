import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import AddToCartButton from "./AddToCartButton";
import ClickedBtn from "./ClickedBtn";
import decrement from "../assets/images/icon-decrement-quantity.svg";
import increment from "../assets/images/icon-increment-quantity.svg";

function DessertCard({ product }) {
  const [isClicked, setIsClicked] = useState(false);
  const { id, name, price, category, image } = product;
  const {
    handleAddToCart,
    handleDecrementQuantity,
    handleIncrementQuantity,
    cartItems,
  } = useGlobalContext();
  const itemAmount = cartItems.find((item) => item.id === id)?.amount;
  return (
    <div className="card" key={id}>
      <picture className="img-container">
        <source media="(min-width: 592px)" srcSet={image.tablet} />
        <source media="(min-width: 920px)" srcSet={image.desktop} />
        <img src={image.mobile} alt={name} />
      </picture>
      {isClicked && itemAmount > 0 ? (
        <ClickedBtn>
          <button
            className="quantity-btn"
            onClick={() => handleDecrementQuantity(product)}
          >
            <img src={decrement} alt="decrement quantity" />
          </button>{" "}
          {itemAmount}
          <button
            className="quantity-btn"
            onClick={() => handleIncrementQuantity(product)}
          >
            <img src={increment} alt="increment quantity" />
          </button>
        </ClickedBtn>
      ) : (
        <AddToCartButton
          onClick={() => {
            handleAddToCart(product);
            setIsClicked(true);
          }}
        />
      )}

      <div className="description">
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default DessertCard;
