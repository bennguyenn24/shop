import axios from "axios";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { useState } from "react";

export default async function ProductPage({
    params,
}: {
    params: { productId: string };
}) {
    const { productId } = params;

    const { data: product } = await axios.get(
        `${process.env.HOST_URL}/api/products/${productId}`
    );

    if (!product) {
        throw new Error("Product failed to load.");
    }

    return (
        <div className="w-full bg-white">
            <div className="max-w-Contentcontainer mx-auto flex items-center py-4">
                <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
                    <Image
                        className="rounded-md w-[60%] transform-origin-top-left cursor-move duration-500"
                        src={product.img}
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
                            <div>
                                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    This is just some informational text{" "}
                                    <button
                                        data-popover-target="popover-description"
                                        data-popover-placement="bottom-end"
                                        type="button"
                                    >
                                        <svg
                                            className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="sr-only">
                                            Show information
                                        </span>
                                    </button>
                                </p>
                                <div
                                    data-popover
                                    id="popover-description"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                                >
                                    <div className="p-3 space-y-2">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Activity growth - Incremental
                                        </h3>
                                        <p>
                                            Report helps navigate cumulative
                                            growth of community activities.
                                            Ideally, the chart should have a
                                            growing trend, as stagnating chart
                                            signifies a significant decrease of
                                            community activity.
                                        </p>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Calculation
                                        </h3>
                                        <p>
                                            For each date bucket, the all-time
                                            volume of activities is calculated.
                                            This means that activities in period
                                            n contain all activities up to
                                            period n, plus the activities
                                            generated by your community in
                                            period.
                                        </p>
                                        <a
                                            href="#"
                                            className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                            Read more{" "}
                                            <svg
                                                className="w-2 h-2 ml-1.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
