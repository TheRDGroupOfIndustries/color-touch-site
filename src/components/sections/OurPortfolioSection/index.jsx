import Image from "next/image";

const OurPortfolioSection = () => {

    return (<div className="bg-white py-20">
        <div className="text-center">
            <h1 className="text-5xl font-bold">
                Our <span className="animate-gradient">Portfolio</span>
            </h1>
            <div className="w-24 h-1 animate-border mx-auto my-4"></div>
            <p className="text-xl my-4 ">
                Explore our successful projects and see how we've helped brands
                achieve <br/> remarkable digital transformation
            </p>
            <div className="grid grid-cols-3 items-center justify-center gap-y-5 gap-x-10 px-42">
                <Image src="/images/1-new.jpeg" alt="1.jpeg" height={100}
                       width={100} className="w-96 h-52 rounded-xl"/>
                <Image src="/images/2.jpg" alt="1.jpeg" height={100}
                       width={100} className="w-96 h-52 rounded-xl "/>
                <Image src="/images/3.jpeg" alt="1.jpeg" height={100}
                       width={100} className="w-96 h-52 rounded-xl"/>
                <Image src="/images/4.jpg" alt="1.jpeg"
                       height={100} width={100} className="w-96 h-52 rounded-xl"/>
                <Image src="/images/5.jpeg" alt="1.jpeg" height={100}
                       width={100} className="w-96 h-52 rounded-xl"/>
                <Image src="/images/6.jpeg" alt="1.jpeg" height={100}
                       width={100} className="w-96 h-52 rounded-xl"/>
            </div>
        </div>


    </div>);
};

export default OurPortfolioSection
