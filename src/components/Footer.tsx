import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Rivara</span>
            </div>
            <p className="text-gray-400">
              Leading the transformation of global industries through AI innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">AI Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Pilot Testing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Implementation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">AI Results</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ashadur@rivaraconsulting.co.uk</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rivara Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}