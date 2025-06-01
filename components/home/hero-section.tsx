import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div>
        <Badge className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-rose-600 animate-pulse" />
          <p>Powered by AI</p>
        </Badge>
        <h1>Transform PDFs into concise summaries</h1>
        <h2>Get a beautiful summary reel of the document in seconds.</h2>
        <Button>Try Sommaire</Button>
      </div>
    </section>
  );
};

export default HeroSection;
