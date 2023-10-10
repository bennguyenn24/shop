"use client";

import Link from "next/link";
import navIcon1 from "../../public/navIcon1.svg";
import navIcon2 from "../../public/navIcon2.svg";
import navIcon3 from "../../public/navIcon3.svg";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="p-8 bg-gray-900 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <section className="mb-5">
                            <h4 className="text-2xl font-semibold pb-4">
                                FIND OUR RESTAURANTS
                            </h4>
                            <p>
                                <strong>123 Addy Way, Notacity, 98765 </strong>
                                <br /> <strong>(123) 456-7890</strong>
                            </p>
                        </section>
                        <section className="md:px-6 mb-5">
                            <h4 className="text-xl font-semibold mb-4 pr-2">
                                WORKING HOURS
                            </h4>
                            <p>
                                MONDAY THROUGH FRIDAY <br /> 9:00 - 24:00 <br />
                                SATURDAY & SUNDAY <br />
                                12:00 - 21:00
                            </p>
                        </section>
                        <section className="mb-5">
                            <h4>
                                <strong>USEFUL LINKS</strong>
                            </h4>
                            <ul>
                                <li className="pt-4 pb-2 hover:text-blue-400">
                                    <Link href="/" target="_blank">
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-2 hover:text-blue-400">
                                    <Link href="/about" target="_blank">
                                        About Us
                                    </Link>
                                </li>
                                <li className="pb-2 hover:text-blue-400">
                                    <Link href="/services" target="_blank">
                                        Services
                                    </Link>
                                </li>
                                <li className="pb-2 hover:text-blue-400">
                                    <Link href="/terms" target="_blank">
                                        Terms of Services
                                    </Link>
                                </li>
                                <li className="pb-2 hover:text-blue-400">
                                    <Link href="/privacy" target="_blank">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h4 className="pb-4">Join Our Newsletter</h4>
                            <p className="text-gray-400 pb-2">
                                Join 35,000+ others to never miss our exclusive
                                drops again!
                            </p>
                            <form className="w-full flex flex-row flex-wrap pt-2 pb-2 gap-2">
                                <input
                                    type="text"
                                    className="text-gray-500 w-full sm:w-44 p-2 focus:border-blue-500"
                                    name=""
                                    id=""
                                    placeholder="Your email address"
                                />
                                <button className="p-2 w-full md:w-[100px] bg-blue-500 hover:text-blue-400">
                                    Subscribe
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <div
                className="w-full bg-gray-900 text-white px-18
                px-10"
            >
                <div>
                    <div className="text-center pb-2">
                        Copyright 2023. All Right Reserved
                    </div>
                </div>
                <div>
                    <Link
                        href="https://github.com/bennguyenn24"
                        target="_blank"
                    ></Link>
                    <Link
                        href="https://www.linkedin.com/in/bennguyen24/"
                        target="_blank"
                    ></Link>
                    <Link
                        href="mailto:bennguyenn24@gmail.com"
                        target="_blank"
                    ></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;