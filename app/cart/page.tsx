import React from "react";

const page = () => {
    return (
        <div>
            <div className="flex items-center">
                <div className="border-b border-gray-400 flex-grow"></div>
                <span className="mx-3 text-gray-500">Cart</span>
                <div className="border-b border-gray-400 flex-grow"></div>
            </div>
            <div className="flex">
                    <div className="w-2/3 px-8 py-12 max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold mb-8">
                            Cart
                            <span className="text-lightText font-normal">
                                Hello
                            </span>
                        </h1>
                        {/* Cart Products Go here */}
                        <div className=""></div>
                    </div>
                    <div className="  w-1/3 px-8 py-12 mt-22 border-[1px] border-gray-900 rounded-md">
                        Philip
                    </div>
                </div>
            </div>
    );
};

export default page;
