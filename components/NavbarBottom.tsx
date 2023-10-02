import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { phoneImg } from "../public/assets/images";

const NavbarBottom = () => {
    return (
        <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Image
                        src={phoneImg}
                        width={10}
                        height={50}
                        alt="Phone Img"
                        className="bg-blue-500 w-6"
                    />
                    <p>Give us a call!</p>
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
            <ul className="flex items-center gap-4">
                <li className="subNavbarHover">Deals</li>
                <li className="subNavbarHover">About</li>
                <li className="subNav">Home</li>
            </ul>
        </div>
    );
};

export default NavbarBottom;
