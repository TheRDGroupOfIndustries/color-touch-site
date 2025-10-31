import Image from "next/image";
import {MdOutlineLocationOn, MdOutlineMail} from "react-icons/md";
import {IoCallOutline} from "react-icons/io5";
import {Button} from "@/components/ui/button";

const GetInTouchSection = () => {
    const touchData = [
        {
            title: "Visit Our Office",
            description: "123 Creative Street, Design District, NY 10001",
            icon: <MdOutlineLocationOn/>
        },
        {
            title: "Call Us",
            description: "+1(555) 123-4567",
            icon: <IoCallOutline/>
        },
        {
            title: "Email Us",
            description: "hello@colortouch.agency",
            icon: <MdOutlineMail/>
        },
    ]
    return (
        <div className="bg-white py-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold">
                    Get In <span className="animate-gradient">Touch</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4"></div>
                <p className="text-xl my-4">
                    Ready to add color to your digital presence? Let's discuss
                    how we can help <br/>
                    your brand shine in the digital landscape.
                </p>
            </div>

            <div className="flex gap-20 mt-16 px-28">
                <div className="w-1/2 h-96 space-y-4">
                    <h1 className="text-3xl font-bold">Let's Start Something
                        Amazing</h1>
                    <div className="space-y-3 mt-6">
                        {touchData.map((data, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div
                                    className="h-12 w-12 p-3 text-2xl text-white rounded-full animate-gradient-background">{data.icon}</div>
                                <div className=" font-medium">
                                    <p>{data.title}</p>
                                    <p className="text-sm text-gray-500">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form
                    className="w-1/2 h-96 space-y-4 rounded-lg">
                    <div className="flex ">
                        <div className="w-1/2 ">
                            <label className="block">First Name</label>
                            <input type="text" className=" px-8 py-2 "/>
                        </div>
                        <div className="w-1/2 ">
                            <label className="block">Last Name</label>
                            <input type="text" className=" px-8 py-2 "/>
                        </div>

                    </div>
                    <div className="w-full ">
                        <label className="block">Email Address</label>
                        <input type="text"
                               className=" px-8 py-2 w-full  "/>
                    </div>
                    <div className="w-full ">
                        <label className="block">Company</label>
                        <input type="text"
                               className=" w-full  px-8 py-2 "/>
                    </div>
                    <div className="w-full ">
                        <label className="block">Message</label>
                        <textarea
                            className=" px-8  w-full py-2 h-20 "></textarea>
                    </div>
                    <Button className="w-full  animate-gradient-background">Send Message</Button>
                </form>
            </div>
        </div>);
};

export default GetInTouchSection
