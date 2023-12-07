"use client";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import CartCard from "@/components/CartCard";

interface ProductsProps {
    products: Product[];
}

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div className="rounded-lg">
            <div className="container mx-auto flex mt-8">
                
                <div className="w-2/3 p-4">
                    <h2 className="text-2xl font-extrabold mb-4 flex justify-center border-b-8 border-solid border-blue-500">
                        Shopping Cart
                    </h2>
                    <div className=":w-8/12 w-full py-4 flex flex-wrap">
                        <h1 className="font-semibold mb-4">
                            Here are your items: <br />
                        </h1>
                        <ul>
                            {cart.map((cartItem) => (
                                <div className="mb-6"><CartCard
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-1/3 p-4">
                    <h2 className="text-2xl font-bold mb-4 flex justify-center border-b-8 border-solid border-blue-800">
                        Order Summary
                    </h2>
                    <div>
                        <h2>Price</h2>
                        <h3>Taxes</h3>
                        <h4>Total</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
