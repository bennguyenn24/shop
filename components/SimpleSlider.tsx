import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
    heroImg,
    sliderImgOne,
    sliderImgTwo,
    sliderImgThree,
    sliderImgFour,
    sliderImgFive,
} from "@/public/assets/images";

interface Props {}

export default class SimpleSlider extends Component<Props> {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div>
                <Slider {...settings}>
                    <div className="w-full h-[410px] relative">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={sliderImgOne}
                            alt="Snow Crab"
                            priority
                        />
                        <div className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white">
                            <h1 className="text-extrabold text-xl">Explore our collection</h1>
                            <p className="text-sm leading-5">New equisite tasting</p>
                            <button className="bg-white text-black text-sm font-semibold rounded-lg w-24 cursor-pointer h-8 border-[1px] border-black">Shop now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
