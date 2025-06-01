import React from "react";
import HeroSection from "@/components/home/hero-section";
import MainLayout from "@/layout/main";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative w-full">
        <HeroSection />
        {/* <DemoSection />  */}
        {/* <HowItWorks /> */}
        {/* <PricingSection />  */}
        {/* <CTASection /> */}
      </div>
    </MainLayout>
  );
}
