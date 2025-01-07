import { createContext, useContext, useEffect, useState } from "react";
import allProducts from "../data/data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAddToCart = (product) => {
    const newProduct = { ...product, amount: 1 };
    setCartItems([...cartItems, newProduct]);
  };
  const removeItemCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };
  const handleIncrementQuantity = (product) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };
  const handleDecrementQuantity = (product) => {
    const newCartItems = cartItems
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    setCartItems(newCartItems);
  };
  const handleConfirmOrder = () => {
    setOpenModal(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";
  };
  const handleStartNewOrder = () => {
    setOpenModal(false);
    setCartItems([]);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setProducts(allProducts);
  }, []);
  return (
    <AppContext.Provider
      value={{
        products,
        handleAddToCart,
        cartItems,
        handleIncrementQuantity,
        handleDecrementQuantity,
        removeItemCart,
        handleConfirmOrder,
        openModal,
        handleStartNewOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
