"use client";

import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart() as CartContextProps;

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`Added ${product.name} to cart.`)
    };

    return (
        <button
            onClick={handleAddToCart}
            type="button"
            className="rounded-full w-32 h-12 text-white bg-gray-900 hover:bg-gray-400"
        >
            Add to cart
        </button>
    );
}
