import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    return (
        <div>
            <div className="flex col-span-4">
                <span
                    className="w-full h-full pt-6 pb-6 bg-gray-900 text-white flex text-center justify-center font-bold hover:text-blue-900 p-4 rounded-sm"
                    href="/collection"
                >
                    CHECKOUT OUR COLLECTION
                </span>
            </div>
            <div className="py-10 px-10 grid grid-cols-4 gap-4">
                {products.map((product: Product) => (
                    <div
                        key={product.id}
                        className="border-gray-600 mb-6 group shadow-xl"
                    >
                        <div className="w-full h-full pr-4 object-contain">
                            <Image
                                width={150}
                                height={200}
                                className="w-40 h-52 object-contain"
                                src={product.img}
                                alt="itemimage"
                            />
                            <h2 className="text-xl text-center font-semibold pt-2 mb-2">
                                {product.name}
                            </h2>
                        </div>
                        <div className="px-2 py-6 flex flex-col justify-center">
                            <div className="flex justify-between py-2 px-2">
                                <button className="w-20 h-9 bg-gray-900 text-white rounded-full flex gap-1 items-center justify-center hover:bg-gray-600 duration-300">
                                    +
                                </button>
                                <button className="w-24 h-9 bg-white text-black border-black border-[1px] rounded-full flex gap-1 items-center justify-center hover:bg-gray-600 duration-300">
                                    Details
                                </button>
                            </div>
                            <p className="text-white text-lg font-semibold">
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
