import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import CartDisplay from "./CartDisplay";
import { UserButton, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import SearchInput from "./SearchInput";
import { getProducts } from "@/helpers/getProducts";

const Navbar = async () => {
    const user = (await currentUser()) as User;
    const products = (await getProducts()) as Product[];

    return (
        <div className="w-full bg-gray-900 text-white top-0 sticky z-50">
            <div className="w-full h-full border-b-[1px] border-b-white">
                <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2 justify-between">
                    {/* Logo */}
                    <Link className="flex gap-1 items-center" href="/">
                        <div className="h-12 rounded-full bg-transparent flex items-center justify-between gap-2 cursor-pointer">
                            <Image
                                src={logo}
                                className="w-16 md:w-20 mb-4 mt-4"
                                alt="logo"
                                unoptimized
                            />
                        </div>
                        <div className="text-xl font-semibold tracking-tight">
                            Steakhouse Society
                        </div>
                    </Link>

                    {/* Departments*/}
                    <div className="navBarHover">
                        <div className="w-4 grid grid-cols-2 gap-[1px]">
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        </div>
                        <p className="font-semibold hover:bg-gray-600 duration-300">
                            Departments
                        </p>
                    </div>

                    {/* Services*/}
                    <div className="navBarHover">
                        <div className="w-4 grid grid-cols-2 gap-[1px]">
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        </div>
                        <p className="font-semibold hover:bg-gray-600 duration-300">
                            Services
                        </p>
                    </div>

                    {/* Search Input*/}
                    <SearchInput
                        isHiddenWhenOnMobileDevice={true}
                        products={products}
                    />

                    <div className="navBarHover hover:bg-gray-600 duration-300">
                        <AiOutlineHeart />
                        <div>
                            <h2 className="font-semibold">My Items</h2>
                        </div>
                    </div>

                    <div className="navBarHover hover:bg-gray-600 duration-300">
                        {!user ? (
                            <Link className="flex gap-1" href="/sign-in">
                                <AiOutlineUser className="text-lg" />
                                <div>
                                    <h2 className="font-semibold">Account</h2>
                                </div>
                            </Link>
                        ) : (
                            <div className="flex gap-2 items-center">
                                <UserButton />
                                <div>
                                    <h2 className="font-semibold">Account</h2>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* <button
                            className="md:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {" "}
                            <GiHamburgerMenu />
                        </button> */}

                        {/* Cart */}

                        <CartDisplay />
                    </div>
                </div>
            </div>

            {/* Alt Search bar for mobile */}
            <div className="lg:hidden">
                <SearchInput products={products} />
            </div>

            <NavbarBottom />
        </div>
    );
};

export default Navbar;
