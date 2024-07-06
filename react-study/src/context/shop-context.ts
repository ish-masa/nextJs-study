"use client";
import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const productsLength = 20;
  let cart = [];
  for (let i = 1; i < productsLength + i; i++) {
    cart[i] = 0;
  }

  return cart;
}


interface ShopContextProps {
  cartItems: Record<number, number>;
  getTotalCartAmount: () => number;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  checkout: () => void;
}


interface ShopContextProviderProps {
  children: React.ReactNode;
}

export const ShopContextProvider = (props:ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cartItems.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
  }
}