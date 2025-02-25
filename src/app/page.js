'use client'
import { Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-950 to-purple-900 text-white flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Logo/Company Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-1 text-white">
            VELVORA
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-widest mb-8 text-purple-200">
            TECHNOLOGIES
          </p>
          
          {/* Coming Soon Message */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-purple-400 mr-3 opacity-50"></div>
              <p className="text-base md:text-lg font-medium tracking-wider text-purple-200">COMING SOON</p>
              <div className="h-px w-8 bg-purple-400 ml-3 opacity-50"></div>
            </div>
            
            <h2 className="text-xl md:text-3xl font-medium mb-3 leading-tight">
              We're crafting something <span className="text-indigo-300">innovative</span>
            </h2>
            
            <p className="text-base max-w-2xl mx-auto text-purple-100 mb-6 leading-relaxed">
              Our team is working hard to bring you our new website. Meanwhile, connect with us on our social media channels to stay updated.
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-5 mb-4">
            <a 
              href="https://velvoratech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-medium tracking-wide">Instagram</span>
            </a>
            
            <a 
              href="https://velvoratech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-medium tracking-wide">LinkedIn</span>
            </a>
          </div>
        </div>
      </main>
      
      <footer className="py-4 text-sm text-center font-light tracking-wide text-purple-300/60">
        &copy; {new Date().getFullYear()} Velvora Technologies. All rights reserved.
      </footer>
    </div>
  );
}