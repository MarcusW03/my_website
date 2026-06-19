'use client';

import Image from "next/image";
import { useActionState } from "react";
import { handleSubmit } from "../actions";
import linkedIn from '../../public/LI-Logo.png'

export default function Contact() {
    const [state, action, isPending] = useActionState(handleSubmit, { status: 'idle' as const });

    return (
      <div className="flex flex-col text-white">
        <section id="contact" className="pt-20 min-h-[95vh] flex items-center justify-center text-white px-6 relative z-10">
            <div className="max-w-4xl w-full bg-gray-800 opacity-90 rounded-2xl shadow-lg p-8 md:p-12">

            <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-gray-300 text-center mb-8">Feel free to reach out via the form below or connect with me on social media.</p>

            {state.status === 'success' && (
              <p className="text-green-400 text-center mb-4">Message sent successfully!</p>
            )}
            {state.status === 'error' && (
              <p className="text-red-400 text-center mb-4">{state.message}</p>
            )}

            <form action={action} className="space-y-6" id="form">
                <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                <input 
                    id="email"
                    type="email" 
                    name="email"
                    required
                    placeholder="your@email.com" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea 
                    id="message"
                    name="message"
                    required
                    placeholder="Write your message here..." 
                    rows={5}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
                </div>
    
                <button 
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {isPending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            </div>
            
        </section>
        
        <section id="links" className="pt-5 flex items-center justify-center text-white px-6 z-1">
            <div className="max-w-4xl w-full bg-gray-800 opacity-90 rounded-2xl shadow-lg p-8 md:p-12">
            
            <h2 className="text-2xl font-bold text-center mb-6">Reach Me at:</h2>
                <div className="grid flex grid-cols-1 md:grid-cols-3 items-center justify-center text-center gap-x-20 gap-y-5">
                    <div className="grid flex grid-cols-1 place-items-center justify-center gap-1">
                        <a className="hover:text-blue-400 hover:scale-105 duration-500" href="mailto:marcus03wright@icloud.com">marcus03wright@icloud.com</a>
                    </div>
                    <a className="hover:text-blue-400 hover:scale-105 duration-500" href="tel:+18305540614">(830) 554-0614</a>
                    <a href="https://www.linkedin.com/in/marcus-wright-523830297" target="_blank" className="place-self-center text-gray-400 max-w-50 hover:scale-105 duration-500 transition">
                    <Image
                        src={linkedIn}
                        alt="LinkedIn Logo"
                        width={2212}
                        height={540}
                        />
                    </a>
                </div>
            </div>
        </section>
    </div>
    );
}
