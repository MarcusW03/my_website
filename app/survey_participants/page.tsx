"use client";
import { useState } from "react";
import { participants, type Participant } from "./participants"

export default function SurveyParticipantsPage() {
   
  return (
    <div className="flex flex-col text-white">
      <main className="min-h-screen container mx-auto px-4 py-10">
        <h1 className="text-4xl my-[50px] font-bold text-center text-white drop-shadow-lg">Thanks for Filling Out My Survey!</h1>
        <div className="grid min-h-[60vh] grid-cols-1 place-items-center gap-10">
          {participants.map((participant) => (
            <Survey_Participant key={participant.name} participant={participant} />
          ))}
        </div>
      </main>
    </div>
  );
}

function Survey_Participant({ participant }: { participant: Participant }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id={participant.name} 
      className="group mx-auto w-full md:w-[60vw] border-2 border-transparent hover:border-blue-400 bg-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-700 hover:scale-105"
    >
      <div 
        className="p-4 cursor-pointer md:cursor-default" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* { Github(project.github) }
        { DOI(project.doi) } */}
        <h2 className="pr-8 text-2xl font-semibold text-gray-800">{participant.name}</h2>
        <p className="text-gray-600 mt-2">{participant.winner ? "Winner!" : ""}</p>
      </div>

      <div 
        className={`pl-5 pr-10 pb-0 shadow-lg rounded-lg overflow-hidden transform transition-all ease-in-out duration-1000 
          ${isExpanded ? "max-h-fit opacity-100 pb-5" : "max-h-0 opacity-0"} 
          md:group-hover:max-h-fit md:group-hover:opacity-100 md:group-hover:pb-5`}
      >
        <p className="text-sm text-gray-800" style={{ whiteSpace: 'pre-line' }}>
          {participant.message}
        </p>
      </div>
    </section>
  );
}