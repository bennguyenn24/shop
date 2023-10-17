import axios from "axios";
import Image from "next/image";

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
        <div className="flex w-full h-full gap-4 justify-between items-center md:px-[12%] md:py-[4%]">
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
        </div>
    );
}
