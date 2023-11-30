"use client";
import React, { useEffect, useState } from "react";
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
        <div className="w-full px-2 py-2 flex flex-col items-center border-b border-gray-600">
            <h1 className="text-lg font-extrabold py-2 mb-2">
                Shopping Cart
            </h1>
            <div className=" w-full h-full flex md:flex-row flex-col ">
                <div className=":w-8/12 w-full py-4 flex flex-wrap">
                    <h1 className="font-semibold">
                        Here are your items <br />
                    </h1>
                    <ul>
                        {cart.map((cartItem, idx) => (
                            <div
                                key={cartItem.id}
                                className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-400 pb-4"
                            >
                                <div className="w-3/4 flex items-center gap-2">
                                    <span>
                                        <Image
                                            src={cartItem.imgUrl}
                                            alt={cartItem.name}
                                            width={300}
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
                                    <button><RemoveFromCartButton /></button>
                                <div className="w-28 h-9 border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                                    <button className="bg-gray-200 p-2 rounded-md hover:text-gray-700"><HiArrowDown/></button>
                                    <span>{cartItem.quantity}1</span>
                                    <button className="bg-gray-200 p-2 rounded-md"><HiArrowUp/></button>
                                </div>
                            </div>
                            </div>
                        ))}
                    </ul>
                </div> 
                <div id="cart" className="lg:w-4/12 w-full py-4 px-2 text-bold">
                    Order Summary
                </div>
            </div>
        </div>
    );
};

export default CartPage;
