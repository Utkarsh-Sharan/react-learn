import { useCart } from "../contexts/cart";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-6 justify-center mt-6">
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
}
