import React from "react";
import MainLayout from "@/layout/main";
import BgGradient from "@/components/common/BgGradient";
import FileUpload from "@/components/upload/file-upload";

export default function UploadPage() {
  return (
    <MainLayout>
      <BgGradient>
        <FileUpload />
      </BgGradient>
    </MainLayout>
  );
}
