import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`hover:text-zinc-600 transition ${
          isActive ? "text-rose-500" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
};
