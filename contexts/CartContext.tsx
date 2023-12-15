"use client";

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface CartContextProps {
    cart: any[];
    addToCart: (cartItem: any) => void;
    removeFromCart: (cartItemId: number) => void;
    removeQuantity: (cartItem: any) => void;
    cartTotal: number;
    cartLength: number;
}

const CartContext = createContext<CartContextProps>({
    cart: [],
    cartTotal: 0,
    cartLength: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    removeQuantity: () => {},
});

const useCart = () => useContext(CartContext);
const localStorageCart =
    typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || "[]")
        : [];

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState(localStorageCart);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    // Make sure it increments instead of adding a new item
    const addToCart = (product: Product, quantity = 1) => {
        // Figure out if this item already exists in cart.
        const productExistsinCart = cart.filter(
            (cartItem: any) => cartItem.id === product.id
        ).length;

        if (Boolean(productExistsinCart)) {
            const currentCartItem = cart.filter(
                (cartItem: CartItem) => product.id === cartItem.id
            )[0];

            const updatedCartItem = {
                ...currentCartItem,
                quantity: currentCartItem.quantity + quantity,
            };

            const updatedCart = cart.map((cartItem: CartItem) =>
                product.id === cartItem.id ? updatedCartItem : cartItem
            );

            setCart(updatedCart);
        } else {
            //If it does not exist, then add it to cart
            const cartItem = {
                ...product,
                quantity,
            };

            setCart((prevCart) => [...prevCart, cartItem]);
        }
    };

    const removeFromCart = (productId: number) => {
        const modifiedCart = cart.filter(
            (cartItem: CartItem) => cartItem.id != productId
        );

        setCart(modifiedCart);
    };

    const removeQuantity = (productId: number) => {
        const modifiedCart = cart.map(
            (cartItem: CartItem) =>
                cartItem.id === productId && cartItem.quantity > 0
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
        );

        const filteredCart = modifiedCart.filter(
            (cartItem: CartItem) => cartItem.quantity > 0
        );
        setCart(filteredCart);
    };
    
    const cartLength = cart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc : number, item: CartItem) => acc + (item.price * item.quantity), 0)

    const value = { cart, addToCart, removeFromCart, removeQuantity, cartLength, cartTotal };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export { useCart, CartContextProvider };
