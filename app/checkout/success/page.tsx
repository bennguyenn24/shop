"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const generateRandomConfirmationNumber = () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabc0123456789abcdefghijklmnopqrstuvwxy";
    const length = 6;
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIdx);
    }

    return result;
};

const SuccessPage = () => {
    const [confirmationNumber, setConfirmationNumber] = useState("");

    useEffect(() => {
        const newConfirmationNumber = generateRandomConfirmationNumber();
        setConfirmationNumber(newConfirmationNumber);
    }, []);

    return (
        <div className="flex justify-center items-center mt-28">
            <div className="border p-6 text-center rounded-md shadow-[5px_5px_rgba(0,_0,_400,_0.1),_10px_10px_rgba(0,_98,_80,_0.1),_15px_15px_rgba(0,_23,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_20px_20px_rgba(0,_198,_90,_0.05)]">
                <h1 className="text-2xl font-bold mb-4">
                    Thank you for your order!
                </h1>
                <p className="text-lg">
                    Your confirmation number is: {confirmationNumber}
                </p>
                <Link href="/">
                    <button className="mt-4 p-2 rounded-md w-44 text-white bg-gray-900 hover:bg-gray-400">
                        Click here to continue shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
