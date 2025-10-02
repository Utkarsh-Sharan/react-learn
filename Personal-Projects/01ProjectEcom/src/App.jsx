import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Total from "./components/Total";
import { CartProvider } from "./contexts/cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartProvider value={{ cart, addToCart, removeFromCart }}>
      <Navbar />
      <ProductList />
      <Cart />
      <Total />
    </CartProvider>
  );
}

export default App;
