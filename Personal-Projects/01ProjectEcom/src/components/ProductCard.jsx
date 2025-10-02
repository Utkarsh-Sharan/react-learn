import React from "react";
import { useCart } from "../contexts/cart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 flex flex-col shadow-md p-4 items-center rounded-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 object-contain mb-4 w-60"
      />

      <h2 className="text-lg font-bold mb-1 text-white">{product.name}</h2>

      <p className="mb-5 text-white">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
      >
        Add To Cart
      </button>
    </div>
  );
}
