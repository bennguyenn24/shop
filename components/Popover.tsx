import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

export default function Popover({ initialText, title, description }) {
    return (
        <div className="group relative">
            <p className="flex gap-2 items-center text-sm text-slate-600 cursor-pointer group-hover:text-slate-900">
                {initialText}{" "}
                <BsQuestionCircle className="group-hover:text-slate-900 cursor-pointer" />
            </p>
            <div className="hidden group-hover:flex flex-col gap-2 absolute bg-slate-800 text-white rounded-md p-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
