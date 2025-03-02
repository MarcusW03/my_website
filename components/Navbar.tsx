import Link from 'next/link'

export default function Navbar() {
    return (
      <nav className="fixed w-full transparent py-4 z-50">
        <div className="container mx-auto flex items-center justify-center px-4">
          
          <div className="space-x-30 text-lg text-gray-500">
            <Link href="/#home" className="hover:text-blue-400">Home</Link>
            <Link href="/#about" scroll={true} className="hover:text-blue-400">About</Link>
            <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }