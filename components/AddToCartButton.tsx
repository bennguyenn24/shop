"use client";

import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
    product: Product;
    className: string;
    title: string;
}

export default function AddToCartButton({
    product,
    className,
    title,
}: AddToCartButtonProps) {
    const { addToCart } = useCart() as CartContextProps;

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`Added ${product.name} to cart.`);
    };

    return (
        <button className={className} onClick={handleAddToCart} type="button">
            {title}
        </button>
    );
}
