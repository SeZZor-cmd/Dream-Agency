import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from"@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import AboutUs from "@/components/AboutUs";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <WhatWeDo/>
        <AboutUs/>
        <RecentWork/>
        <Testimonials/>
        <Footer/>
    </>
  );
}
