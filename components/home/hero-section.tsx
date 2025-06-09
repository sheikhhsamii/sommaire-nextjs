import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center py-16 max-w-7xl">
      <div className="">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-red-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="px-6 py-2 relative text-base font-medium bg-white rounded-full transition-colors duration-200"
          >
            <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600">Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center">
        Transform PDFs into concise summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <Button
        variant="link"
        className="text-white mt-6 rounded-full text-base px-6 py-6 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-bold hover:no-underline shadow-lg transition-all duration-300"
      >
        <Link href={"/#pricing"} className="flex gap-2 items-center">
          <span>Try Sommaire</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
