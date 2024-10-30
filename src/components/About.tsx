import React from 'react';
import { Bot, Network } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Rivara Consulting</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-700/30 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Products Division</h3>
            </div>
            <p className="text-gray-300">
              Our products division focuses on developing cutting-edge AI-powered applications designed for wide adoption. We create scalable solutions that transform how businesses operate, making AI accessible and practical for organizations of all sizes.
            </p>
          </div>
          
          <div className="bg-slate-700/30 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Network className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Services Division</h3>
            </div>
            <p className="text-gray-300">
              Our services division provides expert consulting to both public and private sectors. We specialize in research and AI implementation, helping organizations navigate their digital transformation journey with confidence and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}