"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./navlink";
import { FileTextIcon, MenuIcon, XIcon } from "lucide-react";
import { navItems } from "@/lib/constants";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const IsLoggedIn = false;
  return (
    <nav className="container mx-auto p-4 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/" className="flex gap-1 items-center group">
        <FileTextIcon className="transition-all ease-in-out group-hover:rotate-12" />
        <div className="transition-all font-bold group-hover:text-zinc-600">
          Sommaire
        </div>
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6">
          {navItems
            .filter(item => IsLoggedIn || item.href !== '/dashboard')
            .map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {IsLoggedIn ? (
          <>
            <Link href={"/login"} onClick={closeMenu}>
              Upload PDF
            </Link>
            <div>PRO</div>
            <Button>Sign Out</Button>
          </>
        ) : (
          <Link href={"/login"} onClick={closeMenu}>
            Sign In
          </Link>
        )}
      </div>
      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden">
        <button className="bg-transparent" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navItems
              .filter(item => IsLoggedIn || item.href !== "/dashboard")
              .map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={closeMenu}
                />
              ))}
            <li>
              <Link href={"/login"} onClick={closeMenu}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
