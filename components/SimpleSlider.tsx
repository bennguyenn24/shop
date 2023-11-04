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
import BannerText from "./BannerText";
import SamplePreviousArrow from "./SamplePreviousArrow"
import SampleNextArrow from "./SampleNextArrow"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {}

export default class SimpleSlider extends Component<Props> {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePreviousArrow />,
            initialSlide: 0,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
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
                        <BannerText
                            className="absolute w-60 h-full top-5 left-4 flex flex-col gap-3 text-white"
                            title="Explore our collection"
                            description="New Equisite Tastings"
                            btnText="Shop now"
                        />
                    </div>
                    <div className="w-full h-[410px] relative">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={sliderImgTwo}
                            alt="Steaks"
                        />
                    </div>
                    <div className="w-full h-[410px] relative">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={sliderImgThree}
                            alt="Ribeye"
                        />
                    </div>
                    <div className="w-full h-[410px] relative">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={sliderImgFour}
                            alt="Snow Crab"
                            priority
                        />
                    </div>
                    <div className="w-full h-[410px] relative">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={sliderImgFive}
                            alt="Snow Crab"
                            priority
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
