import { useCart } from "../contexts/cart";

export default function CartItem({ product }) {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="w-full flex bg-gray-600 rounded-md items-center justify-around">
      <img
        src={product.image}
        alt="Product Image"
        className="h-30 p-3 object-contain w-60"
      />

      <div className="mb-4 flex flex-col text-white">
        <h2 className="">{product.name}</h2>

        <h4>${product.price}</h4>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}
