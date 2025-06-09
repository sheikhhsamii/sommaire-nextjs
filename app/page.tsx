import React from "react";
import MainLayout from "@/layout/main";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorks from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";
import BgGradient from "@/components/common/BgGradient";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative w-full">
        <BgGradient>
          <HeroSection />
          <DemoSection />
        </BgGradient>
          <HowItWorks />
          <PricingSection />
        <CTASection />
      </div>
    </MainLayout>
  );
}
