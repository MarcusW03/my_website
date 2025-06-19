import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image"
import { Moon_Dance } from "next/font/google";
import Link from 'next/link'

const moon_dance = Moon_Dance({
  subsets: ['latin'],
  weight: "400",
  display: "swap", 
});

export default function Home() {
  return (
    <div className="bg-fixed bg-cover flex flex-col bg-black text-gray-200">
      <Navbar />
      <section id="home" className=" page flex-grow container mx-auto px-4 text-center flex flex-col items-center justify-center z-1">
        <h1 className={`${moon_dance.className} text-8xl font-extrabold mt-10 drop-shadow-lg`}>Marcus Wright</h1>
        <p className="pt-10 mt-4 text-md opacity-100">Aspiring Software Engineer, AI/ML Engineer, Researcher</p>
        <div className="pt-10 mt-6">
          <a href="/projects" className="bg-gray-500 text-gray-200 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-400 duration-600">My Projects</a>
        </div>
      </section>
      <section id="about" className="page flex-grow container mx-auto px-6 py-12 text-center flex flex-col items-center justify-center z-1">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-2">

            <div className="flex justify-center items-center min-h-150">
              <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg duration-800 hover:scale-105">
                <Image 
                  src="/personal_picture.jpg" 
                  alt="Marcus Wright presenting" 
                  width={400}
                  height={1000}
                />
              </div>
            </div>

            <div className="bg-gray-300 rounded-2xl shadow-lg p-8 flex flex-col min-h-150">
              <h2 className="text-3xl font-bold text-gray-800 place-self-start">About Marcus</h2>
              <div className="pt-5 flex flex-col items-center justify-center">
                <p className="text-gray-700 text-md mt-4">
                   Marcus Wright recently graduated from <a className="text-gray-900 hover:text-blue-700" href="https://www.swarthmore.edu/" target="_blank">Swarthmore College</a>, 
                   recieving a Bachelor&apos;s of Arts (BA) in Computer Science with a Minor in Philosophy.
                </p> 
                <p className="text-gray-700 text-md mt-4"> 
                In Summer 2024, Marcus participated in the REU Program for Pervasive Computing at Temple University&apos;s 
                VIDAR Lab where he made significant research contributions, earning second authorship on their <Link className="text-gray-900 hover:text-blue-700" href="/projects">paper</Link>. 
                He helped to present this work at the 30th International Conference for Intelligent User Interfaces, and has 
                continued his research with VIDAR Lab beyond the program&apos;s conclusion. 
                </p>
                <p className="text-gray-700 text-md mt-4">
                Additionally, he has continued to work in the VIDAR Lab as a Full-Stack Developer on TraffickCam, 
                a reverse image search system designed to combat human trafficking. Marcus has made significant contributions
                to both the backend and frontend of the TraffickCam platform, including a complete overhaul and refactoring of the 
                entire search functionality. 
                </p>
                <p className="text-gray-700 text-md mt-4">
                Beyond academics, Marcus has embraced teamwork through various group projects and programs, strengthening his ability 
                to collaborate effectively. He has also held multiple leadership roles, including President of Swarthmore 
                Coed Club Volleyball and Student Board Member on The Advisory Council to the CS Department (ACCS).
                </p>
                <p className="text-gray-700 text-md mt-4">
                Driven by curiosity and a passion for impactful work, Marcus hopes to build a career that fosters both 
                continuous learning and meaningful contributions. 
                  </p>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  );
}