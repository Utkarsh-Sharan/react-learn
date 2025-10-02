import React from 'react'
import { useCart } from '../contexts/cart';

function Total() {
    const {cart} = useCart();

    const total = cart.reduce((sum, cur) => sum + cur.price, 0);

  return (
    <div className="bg-gray-800 flex items-center justify-around p-10 mt-10 text-white">
      <h1>Total cost: ${total}</h1>
    </div>
  );
}

export default Total