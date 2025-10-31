import Image from "next/image";
import {metadata as service} from "@/app/layout";
import {CiGlobe, CiSearch} from "react-icons/ci";
import {VscGraph, VscSymbolColor} from "react-icons/vsc";
import {IoShareSocialOutline} from "react-icons/io5";
import {RiAdvertisementFill} from "react-icons/ri";

const OurServicesSection = () => {
    const servicesData = [{
        icon: <CiSearch/>,
        title: "SEO Optimization",
        description: "Boost your search rankings with our advanced SEO" + " strategies. We optimize every aspect of your online" + " presence for maximum visibility."
    }, {
        icon: <VscSymbolColor/>,
        title: "Brand Design",
        description: "Create a memorable brand identity that resonates with" +
            " your audience. From logos to complete visual systems, we bring" +
            " your vision to the life."
    }, {
        icon: <IoShareSocialOutline/>,
        title: "Social media",
        description: "Engage your audience across all social platforms with compelling content and strategic campaigns that drive real results."
    }, {
        icon: <RiAdvertisementFill/>,
        title: "Paid Advertising",
        description: "Maximize your ROl with targeted advertising campaigns" +
            " across Google, Facebook, and other premium platforms."
    }, {
        icon: <CiGlobe/>,
        title: "Web Development",
        description: "Build stunning, high-performance websites that convert" +
            " visitors into customers. Modern design meets powerful functionality."
    }, {
        icon: <VscGraph/>,
        title: "Analytics & Insights",
        description: "Make data-driven decisions with comprehensive" +
            " analytics and reporting. Track performance and optimize for continuous growth."
    }]
    return (<div className="bg-gray-50 py-20">
        <div className="text-center">
            <h1 className="text-5xl font-bold">
                Our <span className="animate-gradient">Services</span>
            </h1>
            <div className="w-24 h-1 animate-border mx-auto my-4"></div>
            <p className="text-xl my-4">
                Comprehensive digital marketing solutions designed to
                elevate your brand <br/> and drive meaningful engagement
                with your audience.
            </p>
        </div>

        <div className="grid grid-cols-3 gap-20 mt-16 px-42">
            {servicesData.map((service, index) => (
                <div className="space-y-4" key={index}>
                    <div
                        className="h-12 w-12 rounded-xl animate-gradient-background text-white text-2xl px-3 py-3 ">{service.icon}</div>
                    <h1 className="text-2xl font-bold">{service.title}</h1>
                    <p className="tracking-wider">
                        {service.description}
                    </p>
                </div>))}
        </div>
    </div>);
};

export default OurServicesSection;
