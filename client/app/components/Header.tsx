"use client";

import Link from "next/link";
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
        {/* Left: App Branding */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-xl font-bold">C</span>
          </div>
          <h1 className="text-xl font-semibold">CineNexus</h1>
        </Link>

        {/* Center: Main Navigation */}
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
          {/* Search and profile will go here */}
        </div>
      </div>
    </header>
  );
}
