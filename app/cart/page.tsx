import React from "react";


const page = () => {
    return (
        <div className="w-full px-2 py-2 flex flex-col items-center">
            <h1 className="text-lg font-extrabold py-2 mb-2 border-b border-gray-600">
                Shopping Cart
            </h1>
            <div className=" w-full h-full flex md:flex-row flex-col ">
                <div className=":w-8/12 w-full py-4 flex flex-wrap">Here are your items</div>
                <div id="cart" className="lg:w-4/12 w-full py-4 px-2 text-bold">Order Summary</div>
            </div>
        </div>
    );
};

export default page;
