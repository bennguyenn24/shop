import { prisma } from "@/db/script";

export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error: any) {
        console.error("PRODUCTS/GET:", error.message);
    }
};
