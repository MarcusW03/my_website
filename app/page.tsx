import { Moon_Dance } from "next/font/google";
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const moon_dance = Moon_Dance({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-gray-900/85 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-6 text-white">

          <div className="text-center">
            <h1 className={`${moon_dance.className} text-6xl drop-shadow-lg`}>Marcus Wright</h1>
            <p className="mt-2 text-gray-300 text-sm tracking-widest uppercase">Software Engineer</p>
          </div>

          <div className="w-full border-t border-gray-700" />

          <div className="w-full flex flex-col gap-3">
            <a
              href="mailto:marcus03wright@icloud.com"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm"
            >
              <Mail size={18} className="shrink-0 text-blue-400" />
              <span>marcus03wright@icloud.com</span>
            </a>

            <a
              href="tel:+18305540614"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm"
            >
              <Phone size={18} className="shrink-0 text-blue-400" />
              <span>(830) 554-0614</span>
            </a>

            <a
              href="https://www.linkedin.com/in/marcus-wright-523830297"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm"
            >
              <Linkedin size={18} className="shrink-0 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/MarcusW03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm"
            >
              <Github size={18} className="shrink-0 text-blue-400" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="w-full border-t border-gray-700" />

          <Link
            href="/contact"
            className="w-full text-center bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </div>
  );
}

