import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out our service",
      features: [
        "5 PDF summaries per month",
        "Basic summary format",
        "Standard processing speed",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "19",
      description: "Best for regular users",
      features: [
        "50 PDF summaries per month",
        "Advanced summary format",
        "Priority processing",
        "Priority email support",
        "Custom summary length",
        "Export to multiple formats"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Unlimited PDF summaries",
        "Custom summary format",
        "Instant processing",
        "24/7 priority support",
        "Team collaboration",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section className="py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-lg ${
                plan.popular ? "ring-2 ring-rose-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-rose-500 mt-1 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <Button
                  className={`w-full ${plan.popular ? "bg-rose-600 hover:bg-rose-700" : "bg-gray-900 hover:bg-gray-800"} rounded-full`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 