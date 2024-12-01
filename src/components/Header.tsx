import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold mb-4 md:mb-0"><i>SW</i></h1>
          <div className="flex gap-4">
            <a href="tel:+918884520740" className="hover:text-blue-300 flex items-center gap-2">
              <Phone size={20} />
              <span>+91 8884520740</span>
            </a>
            <a href="mailto:satwikwalke79224@gmail.com" className="hover:text-blue-300 flex items-center gap-2">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/SatwikWalke" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 flex items-center gap-2">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/satwik-walke-63a1b92a7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 flex items-center gap-2">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}