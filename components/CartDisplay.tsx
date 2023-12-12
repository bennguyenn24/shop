"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartDisplay = () => {
    const { cart } = useCart() as CartContextProps;
    const cartLength = cart.reduce((acc, item: CartItem) => acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc, item: CartItem) => acc + (item.price * item.quantity), 0)

    return (
        <Link href="/cart">
            <div className="flex flex-col justify-center items-center mt-2 gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-gray-600 duration-300 relative">
                <BsCart2 className="text-2xl" />
                <p>${cartTotal}.00</p>
                <span className="absolute w-4 h-4 bg-blue text-white top-0 right-3 rounded-full flex items-center justify-center text-xs">
                    {cartLength}
                </span>
            </div>
        </Link>
    );
};

export default CartDisplay;
