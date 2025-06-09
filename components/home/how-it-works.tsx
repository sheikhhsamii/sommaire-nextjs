import React from "react";
import { Upload, FileText, Brain, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-rose-600" />,
      title: "Upload your PDF",
      description: "Simply drag and drop your PDF document or click to upload"
    },
    {
      icon: <Brain className="w-10 h-10 text-rose-600" />,
      title: "AI Analysis",
      description: "Our advanced AI processes and analyzes your document instantly"
    },
    {
      icon: <FileText className="w-10 h-10 text-rose-600 rotate-180" />,
      title: "Get Summary",
      description: "Receive a clear, concise summary of your document"
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Transform any PDF into an easy-to-digest
            <br className="hidden sm:inline" /> summary in three simple steps
          </h2>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="relative flex flex-col items-center p-8 bg-rose-50 rounded-2xl border-2 border-transparent hover:ring-2 hover:ring-rose-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-lg bg-white shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-gray-600 max-w-xs">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-10 h-10 text-rose-300 md:rotate-0 rotate-90" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 