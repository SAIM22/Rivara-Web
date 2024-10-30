import React from 'react';
import { Target, Rocket, Cpu, BarChart3, Settings, GraduationCap, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI Strategy & Roadmap",
      description: "Develop comprehensive AI strategies aligned with your business objectives and create detailed implementation roadmaps."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "AI Pilot Testing",
      description: "Validate AI solutions through controlled pilot programs, ensuring effectiveness before full-scale deployment."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Implementation",
      description: "End-to-end AI solution deployment, including integration with existing systems and staff training."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI Results as a Service",
      description: "Ongoing AI solution management and optimization to ensure continuous improvement and ROI."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Automation Building",
      description: "Development of automated workflows and AI agents to streamline your business processes and enhance operational efficiency."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "AI Training",
      description: "Comprehensive workshops and training programs on AI tools including Generative AI, coupled with thorough training needs assessment."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Business Transformation",
      description: "Strategic integration of AI technologies to drive organizational change and put AI at the heart of your business transformation."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-700/30 p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}