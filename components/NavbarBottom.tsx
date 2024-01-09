import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { phoneImg } from "../public/assets/images";
import Link from "next/link";

const NavbarBottom = () => {
    return (
        <div className="max-w-container mx-auto py-2 px-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 py-1">
                <div className="flex items-center gap-2">
                    <Image
                        src={phoneImg}
                        width={10}
                        height={50}
                        alt="Phone Img"
                        className="bg-blue-500 w-6"
                    />
                    <p className="text-xs md:text-[16px]">Give us a call!</p>
                    <FiChevronDown />
                    <span className="w-[1px] h-4 bg-white inline-flex ml-2"></span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineLocationOn />
                    <p className="text-xs">Santa Ana, 92704</p>
                    <FaPlaceOfWorship />
                    <p className="text-xs">Santa Ana Supercenter</p>
                </div>
            </div>

            <ul className="flex justify-between md:items-center gap-4 pt-2">
                <Link className="border-2 border-slate-700 px-4 py-1 rounded-md md:border-0" href="/deals">
                    <li className="subNavbarHover">Deals</li>
                </Link>
                <Link className="border-2 border-slate-700 px-4 py-1 rounded-md md:border-0" href="/about">
                    <li className="subNavbarHover">About</li>
                </Link>
                <Link className="border-2 border-slate-700 px-4 py-1 rounded-md md:border-0" href="/">
                    <li className="subNavbarHover">Home</li>
                </Link>
            </ul>
        </div>
    );
};

export default NavbarBottom;
