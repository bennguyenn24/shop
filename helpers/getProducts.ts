import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.get(`${process.env.HOST_URL}/api/products`);
        if (res.status === 200) {
            return res.data;
        }
        throw new Error("Product was not able to be fetched.");
    } catch (error: any) {
        console.error("PRODUCTS/GET:", error.message);
    }
};
