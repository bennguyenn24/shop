"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";

const CartDisplay = () => {
    return (
        <Link href="/cart">
            <div className="flex flex-col justify-center items-center mt-2 gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-gray-600 duration-300 relative">
                <BsCart2 className="text-2xl" />
                <p>$0.00</p>
                <span className="absolute w-4 h-4 bg-blue text-black top-0 right-3 rounded-full flex items-center justify-center text-xs">
                    0
                </span>
            </div>
        </Link>
    );
};

export default CartDisplay;
