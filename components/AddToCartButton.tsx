"use client";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    return (
        <button
            type="button"
            className="rounded-full w-32 h-10 bg-gray-300 hover:bg-gray-400"
        >
            Add to cart
        </button>
    );
}
