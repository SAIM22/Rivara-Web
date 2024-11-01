import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
              <span className="ml-2 text-lg md:text-xl font-bold">Rivara</span>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              Leading the transformation of global industries through AI innovation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#home" className="text-sm md:text-base text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-sm md:text-base text-gray-400 hover:text-blue-500">About</a></li>
              <li><a href="#services" className="text-sm md:text-base text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#contact" className="text-sm md:text-base text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Services</h3>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="text-sm md:text-base text-gray-400 hover:text-blue-500">AI Strategy</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-400 hover:text-blue-500">Pilot Testing</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-400 hover:text-blue-500">Implementation</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-400 hover:text-blue-500">AI Results</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Contact</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-400">sales@rivaraconsulting.co.uk</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base text-gray-400">&copy; {new Date().getFullYear()} Rivara Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}