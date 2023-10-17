import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import { getProducts } from "@/helpers/getProducts";

export default async function Home() {
    const products = await getProducts();

    return (
        <>
            <main className="herosection">
                <div className="max-w-contentContainer mx-auto bg-white">
                    <HeroSection />
                    <Products products={products} />
                </div>
            </main>
        </>
    );
} 