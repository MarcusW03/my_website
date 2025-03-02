export default function Footer() {
    return (
      <footer className="text-gray-100 z-1 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Marcus Wright. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/marcus-wright-523830297" className="text-gray-100 hover:text-blue-400" target="_blank">LinkedIn</a>
            <a href="https://github.com/MarcusW03" className="text-gray-100 hover:text-blue-400" target="_blank">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }