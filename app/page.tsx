import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import { getProducts } from "@/helpers/getProducts";
import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({
    subsets:['latin'],
    variable: '--font-rokkitt',
})

export default async function Home() {
    const products = (await getProducts()) as Product[]

    return (
        <>
        <main className={`${rokkitt.variable} font-serif`}>
            <div className="herosection">
                <div className="max-w-contentContainer mx-auto bg-white">
                    <HeroSection />
                    <Products products={products} />
                </div>
            </div>
            </main>
        </>
    );
}
