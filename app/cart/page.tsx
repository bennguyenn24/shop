"use client";
import axios from "axios";
import { useCart } from "@/contexts/CartContext";
import CartCard from "@/components/CartCard";
import Popover from "@/components/Popover";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CartPage = () => {
    const { cart, cartTotal, cartLength, clearCart } = useCart();
    const router = useRouter();

    const canCheckout = cart.length > 0;

    const handleCheckout = async () => {
        try {
            if (cart.length === 0) {
                throw new Error("Cart is empty.");
            }

            const checkoutRes = await axios.post(
                "/api/checkout_sessions",
                cart
            );

            if (checkoutRes.status != 201) {
                throw new Error("Checkout was not successful.");
            }

            const orderResData = {
                cart,
                total_price: checkoutRes.data.amount_total,
                checkout_session: checkoutRes.data.id,
            };
            
            const orderRes = await axios.post("/api/orders", orderResData);

            if (orderRes.status === 201) {
                clearCart(); 
                router.push(checkoutRes.data.url);
            }
        } catch (error: any) {
            toast.error(
                "Please sign-in to continue to checkout."
            );
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div className="rounded-lg">
            <div className="container mx-auto flex flex-col mt-8 md:flex-row">
                <div className="md:w-2/3 p-4">
                    <h2 className="text-2xl font-extrabold mb-4 flex justify-center border-b-8 border-solid border-blue-500">
                        Shopping Cart
                    </h2>
                    <div className=":w-8/12 w-full flex flex-wrap">
                        <h1 className="font-semibold mb-4">
                            Here are your items: <br />
                        </h1>
                        <ul>
                            {cart.map((cartItem) => (
                                <CartCard
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                />
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/3 p-4">
                    <h2 className="text-2xl font-bold mb-4 flex justify-center border-b-8 border-solid border-blue-800">
                        Order Summary
                    </h2>
                    <div className="p-4 md:h-auto h-[300px] border-[1px] md:w-84 border-zinc-400 rounded-md justify-center gap-4">
                        <button
                            disabled={!canCheckout}
                            onClick={handleCheckout}
                            className="disabled:cursor-not-allowed bg-gray-600 hover:bg-gray-900 w-full md:w-48 h-10 mb-6 rounded-lg font-semibold duration-300 text-white"
                        >
                            {canCheckout ? "Checkout" : "Cart is empty"}
                        </button>
                        <h2>Price: ${cartTotal}.00</h2>
                        <span>
                            <h2>
                                Tax: Calculated at Checkout
                                <Popover
                                    initialText={""}
                                    title="California Taxes"
                                    description="Shipping out of CA will be taxed under CA Jurisdiction"
                                />{" "}
                            </h2>
                        </span>
                        <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-400 pb-4">
                            <div className="flex flex-col gap-1">
                                <div className="text-sm flex justify-between">
                                    <p className="font-semibold mt-2">
                                        Subtotal:{" "}
                                        <span> ({cartLength} items)</span>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
