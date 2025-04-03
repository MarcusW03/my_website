"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { projects } from "./projects"

export default function Projects() {
   
  return (
    <div className="flex flex-col text-white">
      <Navbar />
      <main className="min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-4xl title font-bold text-center text-white mb-6">My Projects</h1>
        <div className="grid projects grid-cols-1 place-items-center gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Github(github: string | undefined) {
  if (github) {
    return (<a className="absolute top-3 right-3" href={github} target="_blank">
        <Image
          src="/github-mark.svg"
          alt="Github Logo"
          width={30}
          height={30}
        />
      </a>)
  }
  else {
    return ""
  }
} 

function DOI(doi: string | undefined) {
  if (doi) {
    return (<a className="absolute top-3 right-3" href={doi} target="_blank">
        <Image
          src="/doi.svg"
          alt="DOI Logo"
          width={30}
          height={30}
        />
      </a>)
  }
  else {
    return ""
  }
}

function ProjectCard({ project }: {project:any}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id={project.title} 
      className="group project border-2 border-transparent hover:border-blue-400 bg-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-700 hover:scale-105"
    >
      <div 
        className="p-4 cursor-pointer md:cursor-default" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        { Github(project.github) }
        { DOI(project.doi) }
        <h2 className="pr-8 text-2xl font-semibold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <p className="text-gray-600 mt-2">{project.date}</p>
      </div>

      <div 
        className={`pl-5 pr-10 pb-0 shadow-lg rounded-lg overflow-hidden transform transition-all ease-in-out duration-700 
          ${isExpanded ? "max-h-fit opacity-100 pb-5" : "max-h-0 opacity-0"} 
          md:group-hover:max-h-fit md:group-hover:opacity-100 md:group-hover:pb-5`}
      >
        <p className="text-sm text-gray-800" style={{ whiteSpace: 'pre-line' }}>
          {project.details}
        </p>
      </div>
    </section>
  );
}