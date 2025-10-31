import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div
            className="px-28 h-96 bg-[#101725] pt-14">
            <div className=" flex justify-between gap-20">

            <div className="w-1/4">
                <h2 className="animate-gradient text-2xl font-bold">ColorTouch</h2>
                <p className="text-gray-400 mt-4 ">Adding color to your digital
                    presence with creative marketing
                    solutions that drive real results.</p>
            </div>
            <div  className="w-1/4">
                <h2 className="text-white text-xl">Services</h2>
                <ul className="text-gray-400 mt-4">
                    <li>SEO Optimization</li>
                    <li> Brand Design</li>
                    <li> Social Media</li>
                    <li> Paid Advertising</li>
                </ul>
            </div>
            <div  className="w-1/4">
                <h2 className="text-white text-xl">Company</h2>
                <ul className="text-gray-400 mt-4">
                    <li>About Us</li>
                    <li> Our Team</li>
                    <li> Careers</li>
                    <li> Contact</li>
                </ul>
            </div>
            <div  className="w-1/4">
                <h2 className="text-white text-xl">Follow Us</h2>
                 <div className="flex gap-2 mt-4">
                     <div className="bg-[#1E2835] h-12 w-12 text-xl p-3 text-white rounded-full"><FaFacebookF /></div>
                     <div className="bg-[#1E2835] h-12 w-12 text-xl p-3 text-white rounded-full"> <FaTwitter /></div>
                     <div className="bg-[#1E2835] h-12 w-12 text-xl p-3 text-white rounded-full"><FaInstagram /></div>
                     <div className="bg-[#1E2835] h-12 w-12 text-xl p-3 text-white rounded-full"><FaLinkedinIn /></div>
                 </div>
            </div>
            </div>
            <p className="text-center text-gray-400 mt-20">2025 ColorTouch Digital Marketing Agency. All rights reserved.</p>
        </div>
    );
};

export default Footer;
