"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

interface ProductsProps {
    products: Product[];
}

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div className="w-full px-2 py-2 flex flex-col items-center">
            <h1 className="text-lg font-extrabold py-2 mb-2 border-b border-gray-600">
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
                                            <p>{cartItem.name}</p>
                                            <p className="">{cartItem.description}</p>
                                        </div>
                                    </span>
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
