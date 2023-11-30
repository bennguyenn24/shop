"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CartContextProps {
    cart: any[];
    addToCart: (cartItem: any) => void;
    removeFromCart: (cartItemId: number) => void;
}

const CartContext = createContext<CartContextProps>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

const useCart = () => useContext(CartContext);
const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]') 

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState(localStorageCart);
    
    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart])

    const addToCart = (cartItem: any) => {
        setCart((prevCart) => [...prevCart, cartItem]);
    };

    const removeFromCart = (cartItemId: number) => {
        const modifiedCart = cart.filter(
            (cartItem) => cartItem.id !== cartItemId);
        setCart(modifiedCart);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(modifiedCart))
    };

    const value = { cart, addToCart, removeFromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export { useCart, CartContextProvider };
