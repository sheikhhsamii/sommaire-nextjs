"use client";

import React, { ReactNode } from "react";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  const { isLoaded, userId } = useAuth();
  console.log(userId, "userId")

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return <RedirectToSignIn />;
  }

  return <div>{children}</div>;
};

export default AuthLayout;
