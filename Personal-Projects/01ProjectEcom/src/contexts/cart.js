import { createContext, useContext } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = CartContext.Provider;

export function useCart(){
  return useContext(CartContext);
}