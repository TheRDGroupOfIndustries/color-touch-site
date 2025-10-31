import {HeroSection} from "@/components/sections/HeroSection";
import AboutColorTouchSection
    from "@/components/sections/AboutColorTouchSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import OurPortfolioSection from "@/components/sections/OurPortfolioSection";
import ClientTestimonialsSection
    from "@/components/sections/ClientTestimonialsSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return <section>
        <HeroSection/>
        <AboutColorTouchSection/>
        <OurServicesSection/>
        <OurPortfolioSection/>
        <ClientTestimonialsSection/>
        <GetInTouchSection/>
        <Footer/>
    </section>
}
