"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if click is outside
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            // Close mobile menu if click is outside
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        "Digital Strategy",
        "Search Engine Optimization",
        "Social Media Marketing",
        "PPC & Media Buying",
        "Website Designing",
        "Influencer Marketing",
        "Content Marketing",
        "Creative Designs",
    ];

    return (
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm mt-2 rounded-t-xl px-4 lg:px-28 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="font-bold text-2xl lg:text-4xl text-transparent bg-clip-text animate-gradient">
                Color Touch
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-10">
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>

                {/* Dropdown Section */}
                <li className="relative" ref={dropdownRef}>
                    <p
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer rounded-lg px-5 py-2.5 text-center inline-flex items-center hover:text-blue-600 transition-colors"
                    >
                        Services
                        <FaAngleDown className={`mt-1 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </p>

                    {isOpen && (
                        <div className="absolute left-0 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-60 dark:bg-gray-700">
                            <ul className="p-4 space-y-2 text-gray-700">
                                {services.map((service, index) => (
                                    <li
                                        key={index}
                                        className="block px-4 py-2 hover-animated-bg transition-all duration-300 cursor-pointer rounded-md text-gray-800 hover:text-blue-600"
                                    >
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>

                <li className="hover:text-blue-600 transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Testimonials</li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden mobile-menu-button p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mx-2 border-t"
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Home
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            About
                        </li>

                        {/* Mobile Dropdown Section */}
                        <li className="relative">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                                <span className="hover:text-blue-600 transition-colors">Services</span>
                                <FaAngleDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isOpen && (
                                <div className="mt-2 bg-gray-50 rounded-lg p-2 space-y-2">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="block py-2 px-6 transition-all duration-300 cursor-pointer rounded-md text-gray-700 hover:text-blue-600 hover:bg-white"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Portfolio
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Testimonials
                        </li>
                        <li className="hover:text-blue-600 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-50">
                            Contact
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
