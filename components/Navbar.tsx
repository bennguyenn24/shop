import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="w-full bg-gray-900 text-white">
            <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2">
                {/* Logo */}
                <div className="h-12 px-5 rounded-full bg-transparent flex items-center gap-2 cursor-pointer">
                    <Image src={logo} className="w-24 mb-4 mt-4" alt="logo" unoptimized/>
                </div>

                {/* Departments*/}
                <div className="navBarHover">
                    <div className="w-4 grid grid-cols-2 gap-[1px]">
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                    </div>
                    <p className="font-semibold hover:bg-gray-600 duration-300">Departments</p>
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
                        <p className="font-semibold hover:bg-gray-600 duration-300">Services</p>
                    </div>
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
            </div>
        </div>
    );
};

export default Navbar;
