'use client'
import { useEffect } from "react";
import Hero from "./components/Hero";
import MyNavbar from "./components/MyNavbar";
import ExploreFeatures from "./components/ExploreFeatures";
import PanoramaSlider from "./components/PanoramaSlider";
import OptionChain from "./components/OptionChain";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import FreeTrial from "./components/FreeTrial";
import Footer from "./components/Footer";


export default function Home() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <div>
      <MyNavbar />
      <Hero />
      <ExploreFeatures />
      <PanoramaSlider />
      <OptionChain />
      <Banner />
      <Testimonials />
      <Plans />
      <FAQ />
      <FreeTrial />
      <Footer />
    </div>
  );
}
