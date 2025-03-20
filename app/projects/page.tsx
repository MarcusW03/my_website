"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { title: "Undergraduate Research at Temple University", description: "Research on xAI and HCI conducted at Temple University", image: "", 
      date: "June 2024 - Present",
      details: "PUBLICATION - Albatool Wazzan, Marcus Wright, Stephen MacNeil, and Richard Souvenir (2025). Evaluating the \
               Impact of AI-Generated Visual Explanations on Decision-Making for Image Matching. 'In press', 30th International \
               Conference on Intelligent User Interfaces (IUI '25), ACM. \
              \n\n Conducted research for the NSF REU Site for Pervasive Computing at Temple University, within the Vision, Imaging, \
               and Data Analysis Research (VIDAR) Lab under Dr. Richard Souvenir's mentorship. \
              \n\n Focused on evaluating AI explanations, analyzing their impact on improving human interaction and decision-making \
               with AI systems. Gained experience with Human-Computer Interaction, and Explainable AI (xAI) systems. \
              \n\n Integrated AI explanation methods into a Deep Similarity Machine Learning Model and added to a web-based \
               frontend to facilitate participant interaction with the AI explanations. Conducted a user study with modified frontend.",  
      doi: "https://doi.org/10.1145/3708359.3712121" },
    { title: "Machine Learning Project", description: "Group Project for CS66: Machine Learning at Swarthmore College", image: "", 
      date: "October 2024 - December 2024",
      details: "Designed and implemented advanced imputation strategies \
              (mean/mode, predictive modeling, hybrid approach),  \
              handled outliers, and applied feature scaling to optimize model inputs. \
              \n\n Reduced multicollinearity through \
              correlation analysis, transformed cyclical variables with sine-cosine encoding, and mapped spatial \
              data using latitude-longitude to enhance model interpretability. \
              \n\n Evaluated multiple preprocessing pipelines \
              across KNN, Logistic Regression, Decision Trees, and Random Forests,  using statistical validation (ANOVA, Kruskal-Wallis) \
              to assess their effect on predictive accuracy (~84-85%)",
      github: "https://github.com/MarcusW03/machine_learning_project",
      },
    { title: "Project for OwlHacks Hackathon", description: "Project for Temple University's Annual OwlHacks Hackathon", image: "", 
      date: "October 2024",
      details: "Built a comprehensive learning website designed to help first-generation, low-income students understand and \
              navigate the world of credit cards. The platform offers a series of educational modules, each covering key aspects of \
              credit. \n\n Integrated an AI Chatbot, designed to assist users by answering more detailed questions. Designed built-in \
              content moderation for the chatbot by altering model context.", 
      github: "https://github.com/MarcusW03/owlhacks_project_2024" },
    { title: "This Website!", description: "My Personal Website built using Next.js and Tailwind CSS", image: "", 
      date: "February 2025",
      details: "This personal website is a fully responsive and visually engaging platform built with Next.js and Tailwind CSS, \
                 designed to showcase projects, provide seamless navigation, and enhance user interaction. It features a dynamic \
                 project portfolio with smooth hover effects that reveal additional details, a sleek and fixed background for a polished \
                 aesthetic, and an intuitive contact form integrated with Slack webhooks for instant message delivery. The website is \
                 structured for scalability, with a modern navbar and footer, ensuring a professional yet personal touch. Designed with \
                 accessibility in mind, it offers a clean and modern color palette, a fluid layout, and interactive elements that enhance \
                 the browsing experience.", 
      github: "https://github.com/MarcusW03/my_website" }
  ]; 
  
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