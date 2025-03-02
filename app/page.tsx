import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FixedBackground from "./fixed_background";
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
      <FixedBackground />
      <Navbar />
      <section id="home" className=" page flex-grow container mx-auto px-4 text-center flex flex-col items-center justify-center z-1">
        <h1 className={`${moon_dance.className} text-8xl font-extrabold mt-10 drop-shadow-lg`}>Marcus Wright</h1>
        <p className="pt-10 mt-4 text-md opacity-100">Aspiring Software Engineer, AI/ML Engineer, Researcher</p>
        <div className="pt-10 mt-6">
          <a href="/projects" className="bg-gray-500 text-gray-200 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-400 duration-600">My Projects</a>
        </div>
      </section>
      <section id="about" className="page flex-grow container mx-auto px-4 text-center flex flex-col items-center justify-center z-1">
        <h1 className="text-4xl font-bold mt-10 drop-shadow-lg"></h1>
        <div className="flex-grow container mx-auto px-4 text-center flex flex-col items-center justify-center z-1">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-2">

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

            <div className="bg-gray-300 rounded-2xl shadow-lg p-8 flex flex-col min-w-150">
              <h2 className="text-3xl font-bold text-gray-800 place-self-start">About Marcus</h2>
              <div className="pt-5 flex flex-col items-center justify-center">
                <p className="text-gray-700 text-md mt-4">
                   Marcus Wright is a senior at <a className="text-gray-900 hover:text-blue-700" href="https://www.swarthmore.edu/" target="_blank">Swarthmore College</a>, 
                   majoring in Computer Science with a minor in Philosophy.
                </p> 
                <p className="text-gray-700 text-md mt-4"> 
                In Summer 2024, Marcus participated in the REU Program for Pervasive Computing at Temple University&apos;s 
                VIDAR Lab, where he made significant research contributions, earning second authorship on a <Link className="text-gray-900 hover:text-blue-700" href="/projects">paper</Link> now 
                in press for the 30th Annual ACM Conference on Intelligent User Interfaces. He will also help present 
                this work at the conference and has continued his research with VIDAR Lab beyond the program&apos;s conclusion.
                 Additionally, after the program&apos;s conclusion, he has continued to work in the VIDAR Lab as a Full-Stack 
                 Software Engineer on TraffickCam, a reverse image search system designed to combat human trafficking.
                </p>
                <p className="text-gray-700 text-md mt-4">
                Beyond academics, Marcus has embraced teamwork through various group projects, strengthening his ability 
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
        </div>
      </section>
      <Footer />
    </div>
  );
}