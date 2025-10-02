import logo from "../assets/logo.png";
import cartLogo from "../assets/cart-logo.png";
import { useCart } from "../contexts/cart";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="bg-gray-600 flex items-center justify-around">
      <img src={logo} alt="Logo" className="h-20" />

      <h1 className="text-3xl text-white">Games Shoppe</h1>

      <div className="flex items-center">
        <img src={cartLogo} alt="Logo" className="h-20" />

        <h1 className="text-white">{cart.length} items in cart</h1>
      </div>
    </div>
  );
}
