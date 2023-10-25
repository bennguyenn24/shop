import axios from "axios";
import products from "@/data/products.json"

export const getProducts = async () => {
    try {
       // const res = await axios.get(`${process.env.HOST_URL}/api/products`);

        const productsData = products

        return productsData
    } catch (error: any) {
        console.error("PRODUCTS/GET:", error.message);
    }
};
