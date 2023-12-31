import Image from "next/image";
import { getProducts } from "@/helpers/getProducts";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";


export default async function SearchPage({
    params,
}: {
    params: { searchTerm: string };
}) {
    const products = (await getProducts()) as Product[];

    if (!products) {
        throw new Error("Products failed to load.");
    }

    const matchedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(params.searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="px-10 pt-4 text-center font-semibold mb-6">
                Products matching with search term: {params.searchTerm}
            </h2>
            <div className="grid grid-cols-1 sm:flex-col md:flex-col lg:grid-cols-4 gap-4">
                {matchedProducts.map((product: Product) => (
                    <div
                        key={product.id}
                        className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-4"
                    >
                        <div className="relative w-76 h-64 sm:flex">
                            <Link href={`/product/${product.id}`}>
                                <Image
                                    className="scale-100 group-hover:scale-105 duration-300"
                                    layout="fill"
                                    objectFit="cover"
                                    src={product.imgUrl}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                        <div className="px-2 py-6 flex flex-col justify-center">
                            <h2 className="text-xl text-center font-semibold">
                                {product.name}
                            </h2>

                            <div className="flex justify-between py-2 px-4">
                                <AddToCartButton
                                    title={"Add To Cart"}
                                    product={product}
                                    className="rounded-full w-32 h-12 sm:h-12 text-white bg-gray-900 hover:bg-gray-400"
                                />
                                <button className="w-24 h-9 sm:h-12 bg-white text-black border-black border-[1px] rounded-full flex gap-1 items-center justify-center hover:bg-gray-600 duration-300">
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
}
