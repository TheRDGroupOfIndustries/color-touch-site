import Image from "next/image";
import {Button} from "@/components/ui/button";

export const HeroSection = () => {
    return (
        <div>
            <Image src="/images/hero-banner.jpeg" alt="hero-banner" height="100"
                   width="100"
                   className=" w-screen h-[700px] opacity-20"/>
            <div className="absolute top-56 left-32 w-[45%] space-y-8 ">
                <h1 className="text-7xl leading-20 font-bold">We Add <span
                    className="animate-gradient">Color</span> to Your <span className="animate-gradient">Digital Presence</span>
                </h1>
                <p className="text-xl">Transform your brand with our creative digital marketing   <br/>
                    solutions. We blend strategy with artistry to deliver
                    exceptional <br/>results.</p>
                <div className="space-x-2">
                    <Button className="px-8 py-6 bg-white text-black text-lg animate-border">Let's Grow Together</Button>
                    <Button className="px-8 py-6 text-lg">Get Free Audit</Button>
                </div>
            </div>
        </div>
    );
};
