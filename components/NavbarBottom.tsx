import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { phoneImg } from "../public/assets/images";

const NavbarBottom = () => {
    return (
        <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
            <div>
                <div className="">
                    <Image
                        src={phoneImg}
                        width={50}
                        height={50}
                        alt="Phone Img"
                        className="bg-blue-500 w-6"
                    />
                    <p>Give us a call!</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default NavbarBottom;
