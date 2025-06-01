import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default AuthLayout;
