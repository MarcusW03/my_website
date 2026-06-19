'use client';

import Link from "next/link";
import { useActionState } from "react";
import { handleSubmit } from "../actions";

export default function Contact() {
    const [state, action, isPending] = useActionState(handleSubmit, { status: 'idle' as const });

    return (
      <div className="flex flex-col text-white">
        <section id="contact" className="min-h-screen flex items-center justify-center text-white px-6 py-10 z-1">
            <div className="max-w-4xl w-full bg-gray-800 opacity-90 rounded-2xl shadow-lg p-8 md:p-12">

            <Link href="/" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors duration-200">
              ← Back
            </Link>

            <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-gray-300 text-center mb-8">Send me a message and I&apos;ll get back to you.</p>

            {state.status === 'success' && (
              <p className="text-green-400 text-center mb-4">Message sent successfully!</p>
            )}
            {state.status === 'error' && (
              <p className="text-red-400 text-center mb-4">{state.message}</p>
            )}

            <form action={action} className="space-y-6" id="form">
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                <input 
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="your@email.com" 
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
    
                <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea 
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
    </div>
    );
}
