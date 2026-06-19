"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-md shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center justify-end px-6">
        <Link
          href="/contact"
          className="text-sm text-gray-300 hover:text-blue-400 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
