import Image from "next/image";

const AboutColorTouchSection = () => {
    return (
        <div className="bg-white py-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold">
                    About <span className="animate-gradient">ColorTouch</span>
                </h1>
                <div className="w-24 h-1 animate-border mx-auto my-4"></div>
                <p className="text-xl my-4">
                    We're a passionate team of digital artists and marketing
                    strategists who <br/> believe every
                    brand deserves to shine in the digital landscape.
                </p>
            </div>

            <div className="flex gap-20 mt-16 px-28">
                <div className="w-1/2 h-96 space-y-4">
                    <h1 className="text-3xl font-bold">Our Creative Journey</h1>
                    <p className="text-xl">
                        Founded in 2020, ColorTouch emerged from a simple
                        belief: digital marketing should be as
                        vibrant and dynamic as the brands we represent. We've
                        helped over 500 companies transform
                        their online presence through innovative strategies and
                        creative excellence.
                    </p>

                    <div className="space-y-3 mt-6">
                        {[
                            "Creative Excellence",
                            "Data-Driven Results",
                            "Client Success Focus",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span
                                    className="h-6 w-6 rounded-full animate-gradient-background"></span>
                                <p className="text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Image className="w-1/2 h-96"
                       src="/images/office-img.jpg" height="100" width="100"
                       alt="office img"/>
            </div>
        </div>
    );
};

export default AboutColorTouchSection;
