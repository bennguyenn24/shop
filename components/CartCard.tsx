"use client";
import React from "react";
import Image from "next/image";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import RemoveFromCartButton from "./RemoveFromCartButton";
import AddToCartButton from "./AddToCartButton";
import RemoveQuantityFromCartButton from "./RemoveQuantityFromCartButton";

interface CartCardProps {
    cartItem: CartItem;
}

const CartCard = ({ cartItem }: CartCardProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border rounded-lg border-b-zinc-400 pb-4 bg-white shadow-md transition-transform transform hover:scale-110 mb-6">
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full md:w-[200px] h-[140px] md:h-[140px]">
                    <Image
                        src={cartItem.imgUrl}
                        alt={cartItem.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="max-w-full md:max-w-[300px]">
                    <p className="text-base text-zinc-900 font-bold">
                        {cartItem.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                        {cartItem.description.substring(0, 240)}...
                    </p>
                    <p className="text-sm text-zinc-500 font-bold">
                        ${cartItem.price} USD
                    </p>
                </div>
            </div>

            <div className="mt-2 md:mt-0 flex items-center gap-6">
                <button>
                    <RemoveFromCartButton cartItemId={cartItem.id} />
                </button>
                <div className="w-full md:w-28 h-9 border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 gap-2">
                    <RemoveQuantityFromCartButton
                        product={cartItem}
                        title="-"
                        className="bg-gray-400 p-2 rounded-md hover:text-gray-700"
                    />
                    <span>{cartItem.quantity}</span>
                    <AddToCartButton
                        title="+"
                        className="bg-gray-400 p-2 rounded-md hover:text-gray-700"
                        product={cartItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartCard;
