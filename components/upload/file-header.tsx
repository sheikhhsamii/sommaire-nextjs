import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

const FileHeader = () => {
  return (
    <>
      <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-red-500 to-rose-800 animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="px-6 py-2 relative text-base font-medium bg-white rounded-full transition-colors duration-200"
        >
          <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
          <p className="text-base text-rose-600">
            {" "}
            AI-Powered Content Creation
          </p>
        </Badge>
      </div>
      <h1 className="text-4xl font-bold text-center my-4">
        Start Uploading Your PDFs
      </h1>
      <p className="text-lg text-center mb-8">
        Upload your PDF and let our AI do the magic! ✨
      </p>{" "}
    </>
  );
};

export default FileHeader;
