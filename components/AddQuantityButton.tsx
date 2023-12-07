"use client";
import { HiArrowUp } from "react-icons/hi";
import { useCart } from "@/contexts/CartContext";

interface AddQuantityProps {
    product: Product;
}

const AddQuantityButton = ({product}: AddQuantityProps) => {
    const addQuantityToCart = useCart() as CartContextProps;

    function addQuantityToCart

    return (
        <button className="bg-gray-200 p-2 rounded-md">
            console.log('hello philip')
        </button>
    );
};

export default AddQuantityButton;
