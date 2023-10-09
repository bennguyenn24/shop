import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

interface Props {
    productsData: Product;
}

export default function Home({ productsData }: Props) {
    console.log(productsData);
    return (
        <>
            <main className="herosection">
                <div className="max-w-contentContainer mx-auto bg-white">
                    <HeroSection />
                    <Products productData={productsData} />
                </div>
            </main>
        </>
    );
}

/* FETCHING PRODUCTS DATA ON SERVER SIDE*/

export const getProducts = async () => {
  const productsData = await (
   await fetch("http://localhost:3000/api/products")
   ).json();
    return {
      Props: {productsData},
    }
}
