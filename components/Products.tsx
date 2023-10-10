import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    return (
        <div>
        <div className="flex col-span-4">
        <span className="w-full h-full pt-8 pb-8 bg-gray-900 text-white flex text-center justify-center font-bold hover:text-blue-900 p-4 rounded-sm" href="/collection" >
                CHECKOUT OUR COLLECTION  
        </span>
    </div>
        <div className="py-6 px-6 grid grid-cols-4 gap-4">
            {products.map((product: Product) => (
                <div key={product.id} className="border-gray-600 mb-6 group shadow-2xl">
                    <div className="w-full h-full pr-4 object-contain scale-80 group-hover:scale-110 duration-300">
                    <Image
                        width={300}
                        height={250}
                        src={product.img}
                        style={{ maxWidth: "100%", height: "100%" }}
                        alt="itemimage"
                    />
                    <h2 className="text-xl text-center font-semibold pt-2 mb-2">{product.type}</h2>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Products;
