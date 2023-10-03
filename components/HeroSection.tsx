"use client";
import SimpleSlider from "./SimpleSlider";

const HeroSection = () => {
    return (
        <div className="w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]">
            <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
                <SimpleSlider />
            </div>
            <div className="w-1/3 border-[1px] border-gray-400 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between"></div>
        </div>
    );
};

export default HeroSection;
