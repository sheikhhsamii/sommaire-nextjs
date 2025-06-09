"use client";
import { ChevronLeft, ChevronRight, CircleDotDashed } from "lucide-react";
import React, { useState } from "react";

const DemoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const demoContent = [
    {
      title: "Quick Overview",
      icon: (
        <CircleDotDashed className="flex-shrink-0 w-5 h-5 text-rose-500 mt-1" />
      ),
      description:
        "Comprehensive Next.js 15 course covering everything from fundamentals to advanced deployment strategies.",
    },
    {
      title: "Key Concepts",
      icon: (
        <CircleDotDashed className="flex-shrink-0 w-5 h-5 text-rose-500 mt-1" />
      ),
      description:
        "Explore core Next.js concepts like server-side rendering, static site generation, and API routes.",
    },
    {
      title: "Project Setup",
      icon: (
        <CircleDotDashed className="flex-shrink-0 w-5 h-5 text-rose-500 mt-1" />
      ),
      description:
        "Learn to set up your Next.js development environment and structure your projects effectively.",
    },
    {
      title: "Data Fetching",
      icon: (
        <CircleDotDashed className="flex-shrink-0 w-5 h-5 text-rose-500 mt-1" />
      ),
      description:
        "Master various data fetching strategies including getServerSideProps, getStaticProps, and client-side fetching.",
    },
    {
      title: "Deployment",
      icon: (
        <CircleDotDashed className="flex-shrink-0 w-5 h-5 text-rose-500 mt-1" />
      ),
      description:
        "Deploy your Next.js applications to Vercel and other platforms with confidence.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? demoContent.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === demoContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background blur effect - this would typically be a more complex CSS or image asset */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <CircleDotDashed className="w-8 h-8 text-rose-500" />{" "}
          {/* Placeholder for Sommaire logo */}
          <h3 className="font-bold text-3xl max-w-3xl mx-auto px-4 sm:px-6 text-gray-900">
            Watch how Sommaire transforms{" "}
            <span className="text-rose-600">this Next.js course PDF</span> into
            an easy-to-read summary!
          </h3>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 pt-10">
            {/* Progress indicators at the top */}
            <div className="absolute top-0 left-0 w-full flex space-x-1 p-4">
              {demoContent.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full ${
                    i === activeIndex
                      ? "w-1/4 bg-rose-500"
                      : "w-1/6 bg-rose-100"
                  }`}
                ></div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-2xl text-gray-900 mb-4">
                {demoContent[activeIndex].title}
              </h4>
              <div className="flex items-start space-x-3 text-gray-700">
                {demoContent[activeIndex].icon}
                <p className="text-lg leading-relaxed min-h-96">
                  {demoContent[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Pagination dots and navigation arrows */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-rose-500 text-white shadow-md hover:bg-rose-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {demoContent.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full ${
                      i === activeIndex ? "bg-rose-500" : "bg-rose-200"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-rose-500 text-white shadow-md hover:bg-rose-600 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
