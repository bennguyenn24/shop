'use client'
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full bg-gray-900 text-white top-0 sticky z-50">
            <div className="w-full h-full border-b-[1px] border-b-white">
                <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2">
                    {/* Logo */}
                    <Link href="/">
                        <div className="h-12 px-5 rounded-full bg-transparent flex items-center justify-between gap-2 cursor-pointer">
                            <Image
                                src={logo}
                                className="w-24 mb-4 mt-4"
                                alt="logo"
                                unoptimized
                            />
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
                    <div>
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
                    </div>

                    {/* Search Input*/}
                    <div className="h-10 flex flex-1 relative">
                        <input
                            className="h-full w-full rounded-full px-4 text-black outline-none border-[1px] border-transparent
                    focus-visible:black duration-200"
                            type="text"
                            placeholder="Search our collection"
                        />
                        <span className="absolute w-8 h-8 rounded-full flex items-center justify-center bg-blue text-black top-1 right-1">
                            <IoSearchOutline />
                        </span>
                    </div>
                    <div className="navBarHover hover:bg-gray-600 duration-300">
                        <AiOutlineHeart />
                        <div>
                            <h2 className="font-semibold">My Items</h2>
                        </div>
                    </div>
                    <div className="navBarHover hover:bg-gray-600 duration-300">
                        <AiOutlineUser className="text-lg" />
                        <div>
                            <p className="text-xs">Sign In</p>
                            <h2 className="font-semibold">Account</h2>
                        </div>
                    </div>
                    {/* Cart */}
                    <Link href="/cart">
                        <div className="flex flex-col justify-center items-center mt-2 gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-gray-600 duration-300 relative">
                            <BsCart2 className="text-2xl" />
                            <p>$0.00</p>
                            <span className="absolute w-4 h-4 bg-blue text-black top-0 right-3 rounded-full flex items-center justify-center text-xs">
                                0
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <NavbarBottom />
        </div>
    );
};

export default Navbar;
