import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    // <section className="py-16 bg-linear-to-r from-slate-900 to-rose-800">
    <section className="py-16 bg-linear-to-r from-rose-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Documents?
          </h2>
          <p className="mt-4 text-lg text-rose-100">
            Join thousands of users who save time with AI-powered summaries
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="default"
              className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-6 py-3"
            >
              <Link href="/#pricing" className="flex items-center gap-2">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="default"
              className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-6 py-3"
            >
              <Link href="/signup" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 