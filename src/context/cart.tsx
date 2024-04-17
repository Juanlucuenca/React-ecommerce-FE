import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import { createContext, useEffect, useState } from "react";

// Define un tipo para el valor del contexto
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product: Product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    if (!isItemInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const removeFromCart = (productId: number) => {
    const isItemInCart = cartItems.find((item) => item.id === productId);
    if (isItemInCart!.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
