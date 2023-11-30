"use client";

import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

interface RemoveFromCartButtonProps {
    cartItemId: number;
}

export default function RemoveFromCartButton({ cartItemId }: RemoveFromCartButtonProps) {
    const { removeFromCart } = useCart() as CartContextProps;

    const handleRemoveFromCart = () => {
        removeFromCart(cartItemId);
        toast.success("Removed from cart.")
    };

    return (
        <button
            onClick={handleRemoveFromCart}
            type="button"
            className = "text-sm underline underline-offset-2 decoration-red-700 text-zinc-600 hover:no-underline hover:text-red-700"
        >
            Remove
        </button>
    );
}
