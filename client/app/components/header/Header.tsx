"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  iconButtonStyles,
  navigationLinkActiveStyles,
  navigationLinkInactiveStyles,
  mobileMenuLinkActiveStyles,
  mobileMenuLinkInactiveStyles,
} from "./Header.styles";

const navigationLinks = [
  { href: "/recommended", label: "Recommended" },
  { href: "/categories", label: "Categories" },
  { href: "/favourites", label: "Favourites" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-3 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cineluxLogo.png"
            alt="CineNexus Logo"
            width={40}
            height={40}
            className="rounded-full border-2 border-white md:w-12 md:h-12"
          />
          <h1 className="text-lg md:text-xl font-semibold">CineNexus</h1>
        </Link>

        <nav className="hidden md:flex gap-4 lg:gap-6">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm lg:text-base ${
                  isActive
                    ? navigationLinkActiveStyles
                    : navigationLinkInactiveStyles
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            className={`md:hidden ${iconButtonStyles}`}
            aria-label="Search"
          >
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </button>
          <div className="hidden md:flex items-center gap-0">
            <input
              type="text"
              className="bg-white text-black px-3 py-1 text-sm outline-none w-32 lg:w-auto"
              placeholder=""
            />
            <button className="bg-gray-700 text-white px-3 py-1 text-sm hover:bg-gray-600 transition-colors">
              Find
            </button>
          </div>
          <Link
            href="/login"
            className={iconButtonStyles}
            aria-label="User profile"
          >
            <Image src="/icons/user.svg" alt="User" width={20} height={20} />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 pb-2 border-t border-gray-700 pt-4">
          <nav className="flex flex-col gap-3">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors py-2 px-2 rounded ${
                    isActive
                      ? mobileMenuLinkActiveStyles
                      : mobileMenuLinkInactiveStyles
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
