import axios from "axios";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

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
                        <div>
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
                            <IoMdHeartEmpty />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="flex w-full h-full gap-4 justify-between items-center md:px-[12%] md:py-[4%]">
<div className="relative w-[800px] h-[400px] ">
    <Image
        className="scale-100 group-hover:scale-105 duration-300 object-cover rounded-md"
        src={product.img}
        alt={product.name}
        fill
    />
</div>

<div>
    <h2 className="font-semibold">{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
</div>
</div> */
}
