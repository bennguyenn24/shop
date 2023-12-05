"use client";
import React from "react";
import Image from "next/image";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import RemoveFromCartButton from "./RemoveFromCartButton";

interface CartCardProps {
    cartItem: CartItem;
}

const CartCard = ({ cartItem }: CartCardProps) => {
    return (
        <div className="flex items-center justify-between gap-4 border rounded-lg border-b-zinc-400 pb-4 bg-white shadow-md">
            <div className="w-3/4 flex items-center gap-4">
                <div className="relative w-[200px] h-[140px]">
                    <Image
                        src={cartItem.imgUrl}
                        alt={cartItem.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className=" max-w-[300px]">
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

            <div className="mt-2 flex items-center gap-6">
                <button>
                    <RemoveFromCartButton cartItemId={cartItem.id} />
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
    );
};

export default CartCard;
