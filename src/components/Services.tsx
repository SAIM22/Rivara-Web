import { Target, Rocket, Cpu, BarChart3, Settings, GraduationCap, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business objectives and create detailed implementation roadmaps."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Validate AI solutions through controlled pilot programmes, ensuring effectiveness before full-scale deployment."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Machine Learning",
      description: "End-to-end AI solution deployment, including integration with existing systems and staff training."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI Implementation",
      description: "Ongoing AI solution management and optimisation to ensure continuous improvement and ROI."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Automation Building",
      description: "Development of automated workflows and AI agents to streamline your business processes and enhance operational efficiency."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "AI Training",
      description: "Comprehensive workshops and training programmes on AI tools including Generative AI, coupled with thorough training needs assessment."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Business Transformation",
      description: "Strategic integration of AI technologies to drive organisational change and put AI at the heart of your business transformation."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col gap-6 max-w-6xl mx-auto px-2 md:px-4">
          {/* Top row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-700/30 p-4 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 break-words">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-3/4 mx-auto">
            {services.slice(4, 7).map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-700/30 p-4 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 break-words">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
