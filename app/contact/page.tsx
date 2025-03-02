'use client';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FixedBackground from "../fixed_background";
import Image from "next/image";
import { handleSubmit } from "../actions";
import linkedIn from '../../public/LI-Logo.png'

export default function Contact() {
    
    return (
      <div className="flex flex-col text-white">
        <Navbar />
        <section id="contact" className="pt-20 page flex items-center justify-center text-white px-6 z-1">
            <div className="max-w-4xl w-full bg-gray-800 opacity-90 rounded-2xl shadow-lg p-8 md:p-12">

            <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-gray-300 text-center mb-8">Feel free to reach out via the form below or connect with me on social media.</p>
    
            <form action={handleSubmit} className="space-y-6" id="form">
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                <input 
                    type="text"
                    id="form_name"
                    name="name"
                    placeholder="John Doe" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                <input 
                    type="email" 
                    id="form_email"
                    name="email"
                    placeholder="your@email.com" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea 
                    placeholder="Write your message here..." 
                    id="form_message"
                    name="message"
                    rows={5}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
                </div>
    
                <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg shadow-md"
                >
                Send Message
                </button>
            </form>
            </div>
            
        </section>
        
        <section id="links" className="pt-5 flex items-center justify-center text-white px-6 z-1">
            <div className="max-w-4xl w-full bg-gray-800 opacity-90 rounded-2xl shadow-lg p-8 md:p-12">
            
            <h2 className="text-2xl font-bold text-center mb-6">Reach Me at:</h2>
                <div className="pt-5 flex items-center justify-center space-x-20 mt-8">
                    <div className="grid flex grid-cols-1 place-items-center justify-center gap-2">
                        <a className="hover:text-blue-400 hover:scale-105 duration-500" href="mailto:bwright1@swarthmore.edu">bwright1@swarthmore.edu</a>
                        <a className="hover:text-blue-400 hover:scale-105 duration-500" href="mailto:marcus03wright@icloud.com">marcus03wright@icloud.com</a>
                    </div>
                    <a className="hover:text-blue-400 hover:scale-105 duration-500" href="tel:+18305540614">(830) 554-0614</a>
                    <a href="https://www.linkedin.com/in/marcus-wright-523830297" target="_blank" className="text-gray-400 max-w-50 hover:scale-105 duration-500 transition">
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
        <Footer />
    </div>
    );
}
    