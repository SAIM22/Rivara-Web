import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative h-16 flex items-center">
              <div className="relative">
                <Link to="/" className="flex items-center gap-2">
                  <span className="font-orbitron text-2xl md:text-4xl font-medium tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                    RIVARA
                  </span>
                  <span className="text-blue-400 text-lg md:text-[2.2rem] tracking-wider uppercase font-light drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    Consulting
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <ScrollLink 
                to="services" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                Services
              </ScrollLink>
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}