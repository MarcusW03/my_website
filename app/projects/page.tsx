import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { title: "Undergraduate Research at Temple University", description: "Research on xAI and HCI conducted at Temple University", image: "", 
      date: "June 2024 - Present",
      details: "PUBLICATION - Albatool Wazzan, Marcus Wright, Stephen MacNeil, and Richard Souvenir (2025). Evaluating the \
              \n Impact of AI-Generated Visual Explanations on Decision-Making for Image Matching. 'In press', 30th International \
              \n Conference on Intelligent User Interfaces (IUI '25), ACM. \
              \n\n Conducted research for the NSF REU Site for Pervasive Computing at Temple University, within the Vision, Imaging, \
              \n and Data Analysis Research (VIDAR) Lab under Dr. Richard Souvenir's mentorship. \
              \n\n Focused on evaluating AI explanations, analyzing their impact on improving human interaction and decision-making \
              \n with AI systems. Gained experience with Human-Computer Interaction, and Explainable AI (xAI) systems. \
              \n\n Integrated AI explanation methods into a Deep Similarity Machine Learning Model and added to a web-based \
              \n frontend to facilitate participant interaction with the AI explanations. Conducted a user study with modified frontend.",  
      doi: "" },
    { title: "Machine Learning Project", description: "Group Project for CS66: Machine Learning at Swarthmore College", image: "", 
      date: "October 2024 - December 2024",
      details: "Designed and implemented advanced imputation strategies \
              (mean/mode, predictive modeling, hybrid approach), \n \
              handled outliers, and applied feature scaling to optimize model inputs. \
              \n\n Reduced multicollinearity through \
              correlation analysis, transformed cyclical variables with sine-cosine encoding, \n and mapped spatial \
              data using latitude-longitude to enhance model interpretability. \
              \n\n Evaluated multiple preprocessing pipelines \
              across KNN, Logistic Regression, Decision Trees, and Random Forests, \n using statistical validation (ANOVA, Kruskal-Wallis) \
              to assess their effect on predictive accuracy (~84-85%)",
      github: "https://github.com/MarcusW03/machine_learning_project",
      },
    { title: "Project for OwlHacks Hackathon", description: "Project for Temple University's Annual OwlHacks Hackathon", image: "", 
      date: "October 2024",
      details: "Built a comprehensive learning website designed to help first-generation, low-income students understand \n and \
              navigate the world of credit cards. The platform offers a series of educational modules, each covering \n key aspects of \
              credit. \n\n Integrated an AI Chatbot, designed to assist users by answering more detailed questions. Designed built-in \n \
              content moderation for the chatbot by altering model context.", 
      github: "https://github.com/MarcusW03/owlhacks_project_2024" },
    { title: "This Website!", description: "My Personal Website built using Next.js and Tailwind CSS", image: "", 
      date: "February 2025",
      details: "This personal website is a fully responsive and visually engaging platform built with Next.js and Tailwind CSS, \
                \n designed to showcase projects, provide seamless navigation, and enhance user interaction. It features a dynamic \
                \n project portfolio with smooth hover effects that reveal additional details, a sleek and fixed background for a polished \
                \n aesthetic, and an intuitive contact form integrated with Slack webhooks for instant message delivery. The website is \
                \n structured for scalability, with a modern navbar and footer, ensuring a professional yet personal touch. Designed with \
                \n accessibility in mind, it offers a clean and modern color palette, a fluid layout, and interactive elements that enhance \
                \nthe browsing experience.", 
      github: "https://github.com/MarcusW03/my_website" }
  ];

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
  
  return (
    <div className="flex flex-col text-white">
      <Navbar />
      <main className="min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-4xl title font-bold text-center text-white mb-6">My Projects</h1>
        <div className="grid projects grid-cols-1 place-items-center gap-10">
          {projects.map((project, index) => (
            <section id={project.title} key={index} className="group project border-2 border-transparent hover:border-blue-400 bg-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-1000 hover:scale-105">
              <div className="p-4">
                { Github(project.github) }
                { DOI(project.doi) }
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className=" text-gray-600 mt-2">{project.description}</p>
                <p className=" text-gray-600 mt-2">{project.date}</p>
              </div>
              <div className="pl-5 pb-0 group-hover:pb-5 shadow-lg rounded-lg overflow-hidden transform transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:max-h-70 max-h-0">
                <p className="text-sm text-gray-800" style={{ whiteSpace: 'pre-line' }}>{project.details}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


// <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-40 object-cover" /> 
// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
