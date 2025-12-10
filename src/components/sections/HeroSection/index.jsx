import Image from "next/image";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex flex-col" id="home">
            
            {/* Background Image */}
            <Image
                src="/images/hero-banner.jpeg"
                alt="hero-banner"
                fill
                className="opacity-20 object-cover"
                priority
            />

            {/* Content */}

            <div className="relative z-10 w-full pt-18 ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-40">
                    <div className="w-full lg:w-[60%] space-y-5 sm:space-y-8 lg:space-y-8">
                        
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                            We Add <span className="text-transparent bg-clip-text animate-gradient">Color to</span> Your <span className="animate-gradient">Digital</span>
                            <span className="text-transparent bg-clip-text animate-gradient block mt-2"> Presence</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl">
                            Transform your brand with our creative digital marketing solutions.
                            We blend strategy with artistry to deliver exceptional results.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <Button
                                size="lg"
                                className="px-8 py-6 bg-white text-black text-lg font-semibold border-2 border-teal-400 hover:bg-gray-50 transition-all duration-200 rounded-lg"
                            >
                                Let's Grow Together
                            </Button>
                            <Button
                                size="lg"
                                className="px-8 py-6 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-all duration-200 rounded-lg"
                            >
                                Get Free Audit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
