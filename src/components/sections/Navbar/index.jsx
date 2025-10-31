"use client";

import {useState} from "react";
import {FaAngleDown} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<div
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm mt-2  rounded-t-xl px-28 py-3 flex items-center justify-between">
        <div
            className="font-bold text-4xl  text-transparent bg-clip-text animate-gradient"
        >Color Touch
        </div>

        <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>About</li>

            {/* Dropdown Section */}
            <li className="relative">
                <p
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer rounded-lg px-5 py-2.5 text-center inline-flex items-center "
                >
                    Services
                    <FaAngleDown className="mt-1 ml-1"/>
                </p>

                {isOpen && (<div
                    className="absolute left-0 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-60 dark:bg-gray-700">
                    <ul className="p-4 space-y-2 text-gray-700">
                        {[
                            "Digital Strategy",
                            "Search Engine Optimization",
                            "Social Media Marketing",
                            "PPC & Media Buying",
                            "Website Designing",
                            "Influencer Marketing",
                            "Content Marketing",
                            "Creative Designs",
                        ].map((service, index) => (
                            <li
                                key={index}
                                className="block px-4 py-2 hover-animated-bg transition-all duration-300 cursor-pointer rounded-md text-gray-800"
                            >
                                {service}
                            </li>
                        ))}
                    </ul>

                </div>)}
            </li>

            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
    </div>);
};

export default Navbar;
