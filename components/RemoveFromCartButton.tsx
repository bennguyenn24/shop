"use client";

import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

interface RemoveFromCartButtonProps {
    product: Product;
}

export default function RemoveFromCartButton({ product }: RemoveFromCartButtonProps) {
    const { removeFromCart } = useCart() as CartContextProps;

    const handleRemoveFromCart = () => {
        removeFromCart(product);
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
