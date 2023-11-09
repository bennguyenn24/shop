"use client";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import { useState } from "react";
import CartDisplay from "./CartDisplay";
import { SignIn, UserButton } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";

interface NavbarProps {
    user: User;
}

const Navbar = ({ user }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-gray-900 text-white top-0 sticky z-50">
            <div className="w-full h-full border-b-[1px] border-b-white">
                <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2 justify-between">
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
                    <div className="h-10 flex-1 relative hidden md:flex">
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
                        <button
                            className="md:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {" "}
                            <GiHamburgerMenu />
                        </button>

                        {/* Cart */}

                        <CartDisplay />
                    </div>
                </div>
            </div>

            {/* Alt Search bar for mobile */}
            <div className="h-10 flex flex-1 relative md:hidden">
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

            <NavbarBottom />
        </div>
    );
};

export default Navbar;
