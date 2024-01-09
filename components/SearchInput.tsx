"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputParams {
    products: Product[];
    isHiddenWhenOnMobileDevice?: boolean;
}

const SearchInput = ({ products, isHiddenWhenOnMobileDevice }: SearchInputParams) => {
    // Form Handling

    // 1. Manage state using useState hook
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const router = useRouter();

    // Whenever search term updates, we run filter and this updates filteredProducts
    useEffect(() => {
        filterProductsBySearchTerm();
    }, [searchTerm]);

    // 2. Link input state to input element
    // -> value is an attribute on the input element we can use to link state to element
    // -> Create a function to handle the change (onChange attribute)
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    const filterProductsBySearchTerm = () => {
        if (searchTerm.trim() === "") {
            setFilteredProducts([]);
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                )
            );
        }
    };

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // take our search term and push to search page with appropriate search term
        const trimmedSearchTerm = searchTerm.trim();

        if (trimmedSearchTerm === "") {
            toast.error("Cannot search without a search term");
            return;
        } else {
            router.push(`/product/search/${trimmedSearchTerm}`);
            clearSearch();
        }
    };

    return (
        <div className={isHiddenWhenOnMobileDevice ? "hidden md:flex" : "px-4 py-2"}>
            <div className="flex flex-1 relative flex-col gap-2 lg:flex-row lg:items-center">
                <form
                    onSubmit={handleSearch}
                    className="w-full lg:w-auto relative"
                >
                    <input
                        className="w-full h-10 lg:w-64 rounded-sm md:rounded-full px-4 text-black outline-none border-[1px] border-transparent
        focus-visible:black duration-200"
                        type="text"
                        placeholder="Search our collection"
                        onChange={handleChangeSearch}
                        value={searchTerm}
                    />

                    <button
                        aria-label={`Search`}
                        type="submit"
                        className="absolute w-8 h-8 rounded-full flex items-center justify-center bg-blue text-black top-1 right-1"
                    >
                        <IoSearchOutline />
                    </button>
                </form>

                {/* Searchbar Dropdown Container*/}
                <ul className="bg-slate-900 w-full text-sm absolute top-11 lg:w-auto lg:ml-4">
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <Link
                                href={`/product/${product.id}`}
                                onClick={clearSearch}
                                className="flex gap-2 border-b-2 border-slate-600 items-center hover:bg-slate-800 duration-300"
                            >
                                <div className="relative w-[50px] h-[50px]">
                                    <Image
                                        className="object-cover"
                                        src={product.imgUrl}
                                        alt={product.name}
                                        fill
                                    />
                                </div>
                                <p>{product.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchInput;
