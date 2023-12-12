"use client";

import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

interface RemoveFromCartButtonProps {
    product: Product;
    className: string;
    title: string;
}

export default function RemoveFromCartButton({
    product,
    className,
    title,
}: RemoveFromCartButtonProps) {
    const { removeQuantity } = useCart() as CartContextProps;

    const handleDecrementFromCart = () => {
        removeQuantity(product);
        toast.success("Removed");
    };

    return (
        <button className={className} onClick={handleDecrementFromCart} type="button">
            {title}
        </button>
    );
}
