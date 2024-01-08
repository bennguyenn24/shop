"use client";

import SimpleSlider from "./SimpleSlider";
import { heroImg } from "@/public/assets/images";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="w-full bg-white px-4 py-4 flex flex-col lg:flex-row gap-4 border-b-[1px]">
            <div className="w-full lg:w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
                <SimpleSlider />
            </div>
            <div className="w-full lg:w-1/3 border-[1px] border-gray-400 rounded-lg shadow-bannerShadow p-4 pt-2 flex flex-col justify-between">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-black">
                        Exclusive Pick of the Day
                    </h2>
                    <p className="text-zinc-600 underline underline-offset-2 mb-6">
                        {" "}
                        View our collection
                    </p>
                </div>

                <Image
                    className="w-full h-32 lg:h-full object-cover rounded-lg"
                    src={heroImg}
                    alt="Hero Img"
                />
            </div>
        </div>
    );
};

export default HeroSection;
