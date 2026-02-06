"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/recommended", label: "Recommended" },
    { href: "/categories", label: "Categories" },
    { href: "/favourites", label: "Favourites" },
  ];

  return (
    <header className="bg-black text-white py-3 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cineluxLogo.png"
            alt="CineNexus Logo"
            width={48}
            height={48}
            className="rounded-full border-3 border-white"
          />
          <h1 className="text-xl font-semibold">CineNexus</h1>
        </Link>

        <nav className="flex gap-6">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0">
            <input
              type="text"
              className="bg-white text-black px-3 py-1 text-sm outline-none"
              placeholder=""
            />
            <button className="bg-gray-700 text-white px-3 py-1 text-sm hover:bg-gray-600 transition-colors">
              Find
            </button>
          </div>

          <Link
            href="/profile"
            className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
