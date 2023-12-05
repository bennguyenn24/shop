"use client";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi2";
import { HiArrowUp } from "react-icons/hi2";
import RemoveFromCartButton from "@/components/RemoveFromCartButton";

interface ProductsProps {
    products: Product[];
}

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div className="rounded-lg">
            <div className="container mx-auto flex mt-8">
                <div className="w-2/3 p-4">
                    <h2 className="text-2xl font-extrabold mb-4">Shopping Cart</h2>
                    <div className=":w-8/12 w-full py-4 flex flex-wrap">
                        <h1 className="font-semibold">
                            Here are your items <br />
                        </h1>
                        <ul>
                            {cart.map((cartItem) => (
                                <div
                                    key={cartItem.id}
                                    className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-400 pb-4"
                                >
                                    <div className="w-3/4 flex items-center gap-2">
                                        <span>
                                            <Image
                                                src={cartItem.imgUrl}
                                                alt={cartItem.name}
                                                width={200}
                                                height={200}
                                            />
                                            <div>
                                                <p className="text-base text-zinc-900">
                                                    {cartItem.name}
                                                </p>
                                                <p className="text-sm text-zinc-500">
                                                    {cartItem.description}
                                                </p>
                                                <p className="text-sm text-zinc-500 ">
                                                    ${cartItem.price}
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-6">
                                        <button>
                                            <RemoveFromCartButton
                                                cartItemId={cartItem.id}
                                            />
                                        </button>
                                        <div className="w-28 h-9 border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                                            <button className="bg-gray-200 p-2 rounded-md hover:text-gray-700">
                                                <HiArrowDown />
                                            </button>
                                            <span>{cartItem.quantity}</span>
                                            <button className="bg-gray-200 p-2 rounded-md">
                                                <HiArrowUp />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/3 p-4">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
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
