import React, { ReactNode } from "react";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
