'use client'
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    if (!products) {
        throw new Error("Products could not be loaded.")
    }

    const notify = () => toast('Item has been added to cart');
    

    return (
        <div>
            <div className="flex col-span-4">
                <span className="w-full h-full pt-6 pb-6 bg-gray-900 text-white flex text-center justify-center font-bold hover:text-blue-900 p-4 rounded-sm">
                    CHECKOUT OUR COLLECTION
                </span>
            </div>

            <div className="py-24 px-10 grid grid-cols-4 gap-4">
                {products && products.map((product: Product) => (
                    <div
                        key={product.id}
                        className="border-gray-600 group shadow-xl"
                    >
                        <div className="relative w-64 h-64">
                            <Link href={`/product/${product.id}`}>
                                <Image
                                    className="scale-100 group-hover:scale-105 duration-300"
                                    layout="fill"
                                    objectFit="cover"
                                    src={product.img}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                        <div className="px-2 py-6 flex flex-col justify-center">
                            <h2 className="text-xl text-center font-semibold">
                                {product.name}
                            </h2>
                            <div className="flex justify-between py-2 px-4">
                                <button className="w-20 h-9 bg-gray-900 text-white rounded-full flex gap-1 items-center justify-center hover:bg-gray-600 duration-300" onClick={notify}>
                                    +
                                </button>
                                <button className="w-24 h-9 bg-white text-black border-black border-[1px] rounded-full flex gap-1 items-center justify-center hover:bg-gray-600 duration-300">
                                    Details
                                </button>
                            </div>
                            <p className="text-black m-5 pt-4 text-lg font-semibold">
                                Price: ${product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
