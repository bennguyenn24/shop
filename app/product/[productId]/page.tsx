import axios from "axios";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Popover from "@/components/Popover";
import AddToCartButton from "@/components/AddToCartButton";
import { getProduct } from "@/helpers/getProduct";


export default async function ProductPage({
    params,
}: {
    params: { productId: string };
}) {
    const productId = Number(params.productId);

    const product = (await getProduct(productId)) as Product;

    if (!product) {
        throw new Error("Product failed to load.");
    }

    return (
        <div className="w-full bg-white">
            <div className="max-w-Contentcontainer mx-auto flex items-center py-4">
                <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
                    <Image
                        className="rounded-md w-[60%] transform-origin-top-left cursor-move duration-500"
                        src={product.imgUrl}
                        alt={product.name}
                        width={300}
                        height={100}
                    />
                </div>
                <div className="w-1/3 h-full flex flex-col gap-2">
                    <p className="w-3/4 p-2 text-gray-900 text-sm font-semibold border border-gray-600 rounded-md">
                        This item has been recently brought! 500+ since
                        yesterday
                    </p>
                    <div className="px-2 py-4 border border-gray-600 rounded-md flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <button
                                    className="px-2 py-[1px] font-semibold 
                             text-red-500 text-sm border-[1px] border-red-700 rounded-sm"
                                >
                                    Best seller
                                </button>
                                <button className="px-2 py-[1px] font-semibold text-gray-600 text-sm border-[1px] border-gray-700 rounded-sm">
                                    Great for fine-dining
                                </button>
                            </div>
                            <IoMdHeartEmpty className="text-gray-600 text-2xl" />
                        </div>
                    </div>
                    {/* Product Info  */}
                    <div>
                        <h2 className="font-xl font-semibold underline underline-offset-4">
                            {product.name}
                        </h2>
                        <p>{product.description}</p>
                        <div className="flex gap-2 items-center text-xs mt-2">
                            <div className="flex gap-1">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </div>
                            <p>50</p>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="pt-2 font-semibold">
                                ${product.price} 1x100g
                            </p>
                            <Popover
                                initialText="Show more information"
                                title="Limited Quantity"
                                description="Buy it now before we run out of supplies!"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            <span className="font-semibold">$20/month</span>{" "}
                            <span className="font-bold">withAffirm</span>
                            {"  "}
                            <span className="text-sm underline underline-offset-2">
                                Learn how
                            </span>
                        </p>
                        <p className="text-xs text-zinc-500 flex items-center gap-2">
                            {" "}
                            Price when purchased online
                            <span>
                                <BsInfoCircle />
                            </span>
                        </p>
                    </div>
                    <div className="border-b-[1px] border-b-slate-300 pb-4">
                            <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
