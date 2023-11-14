import { prisma } from "@/db/script";

export const getProduct = async (productId: number) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        return product;
    } catch (error: any) {
        console.error("PRODUCT/GET:", error.message);
    }
};
