"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-opacity-90 backdrop-blur-md shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center md:justify-center justify-between px-6">

        <div className="hidden md:flex space-x-20 text-lg text-gray-400">
          <Link href="/#home" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/#about" className="hover:text-blue-500 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-500 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-16 bg-gray-100 shadow-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-4 px-6 space-y-4">
          <Link href="/#home" className="block text-gray-600 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#about" className="block text-gray-600 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="block text-gray-600 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}