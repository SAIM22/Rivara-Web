import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
                <span className="text-[28px] font-light tracking-[0.3em] font-['Montserrat']">
                  <span className="text-white">RIVARA</span>
                </span>
                <div className="absolute -top-3 left-[calc(33.33%)] right-[calc(50%)] flex justify-center overflow-visible">
                  <div className="w-full h-6 border-t-[2.5px] border-blue-400 rounded-t-full transform -translate-y-1 opacity-90"></div>
                </div>
                <div className="-mt-2 ml-[calc(33.33%)]">
                  <span className="text-[9px] text-blue-400 tracking-[0.4em] font-['Montserrat'] font-light uppercase">CONSULTING</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
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