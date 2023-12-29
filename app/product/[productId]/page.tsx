import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
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
        <div className="container mx-auto mt-8 flex">
            <div className="w-1/2">
                <Image
                    className=""
                    src={product.imgUrl}
                    alt={product.name}
                    width={500}
                    height={300}
                />
                // Carousel
            </div>
            <div className="w-1/2 px-8">
                <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold mb-4">{product.price}</p>
            </div>
        </div>
    );
}

// <div className="w-full bg-white">
//     <div className="max-w-Contentcontainer mx-auto flex items-center py-4">
//         <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
//             <Image
//                 className="rounded-md w-[60%] transform-origin-top-left cursor-move duration-500"
//                 src={product.imgUrl}
//                 alt={product.name}
//                 width={300}
//                 height={100}
//             />
//         </div>
//         <div className="w-1/3 h-full flex flex-col gap-4 p-4">
//             <div className="text-gray-900 text-sm font-semibold border border-gray-600 rounded-md p-2">
//                 This item has been recently bought by 500+ customers since yesterday.
//             </div>
//             <div className="border border-gray-600 rounded-md p-4 flex flex-col gap-6">
//                 <div className="flex justify-between items-center">
//                     <div className="flex gap-2">
//                         <button
//                             className="px-2 py-[1px] font-semibold
//                      text-red-500 text-sm border-[1px] border-red-700 rounded-sm"
//                         >
//                             Best Seller
//                         </button>
//                         <button className="px-2 py-[1px] font-semibold text-gray-600 text-sm border-[1px] border-gray-700 rounded-sm">
//                             Great for Fine Dining
//                         </button>
//                     </div>
//                     <IoMdHeartEmpty className="text-gray-600 text-2xl" />
//                 </div>
//             </div>
//             {/* Product Info  */}
//             <div>
//                 <h2 className="text-xl font-semibold underline underline-offset-4 mb-2">
//                     {product.name}
//                 </h2>
//                 <p className="text-gray-700 mb-4">{product.description}</p>
//                 <div className="flex items-center text-xs">
//                     <div className="flex gap-1">
//                         <BsStarFill />
//                         <BsStarFill />
//                         <BsStarFill />
//                         <BsStarFill />
//                         <BsStarFill />
//                     </div>
//                 </div>
//                 <div className="flex items-end gap-2 mt-2">
//                     <p className="font-semibold text-lg">${product.price} for 100g</p>
//                     <Popover
//                         initialText="Show more information"
//                         title="Limited Quantity"
//                         description="Buy it now before we run out of supplies!"
//                     />
//                 </div>
//             </div>
//             <div className="flex flex-col gap-2 mt-4">
//                 <p>
//                     <span className="font-semibold">$20/month</span>{" "}
//                     <span className="font-bold">with Affirm</span>
//                     {"  "}
//                     <span className="text-sm underline underline-offset-2">
//                         Learn how
//                     </span>
//                 </p>
//                 <p className="text-xs text-gray-500 flex items-center gap-2">
//                     {" "}
//                     Price when purchased online
//                     <span>
//                         <BsInfoCircle />
//                     </span>
//                 </p>
//             </div>
//             <div className="border-b-[1px] border-slate-300 pb-4">
//                 <AddToCartButton
//                     product={product}
//                     className="rounded-full w-32 h-12 text-white bg-gray-900 hover:bg-gray-400"
//                     title="Add to Cart"
//                 />
//             </div>
//         </div>
//     </div>
// </div>
