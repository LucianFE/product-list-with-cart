import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { openModal } = useGlobalContext();
  return (
    <main>
      <Menu />
      <Cart />
      {openModal && <Modal />}
    </main>
  );
}

export default App;
