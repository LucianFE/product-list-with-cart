import { useGlobalContext } from "../context/GlobalContext";
import DessertCard from "./DessertCard";
function Menu() {
  const { products } = useGlobalContext();

  return (
    <section className="desserts-menu">
      <h1>desserts</h1>
      <div className=" cards">
        {products.map((product) => (
          <DessertCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
