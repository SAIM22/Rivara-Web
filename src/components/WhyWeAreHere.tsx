import React from 'react';
import { Lightbulb, Heart, Target, Zap } from 'lucide-react';

export default function WhyWeAreHere() {
  const sections = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Why We're Here",
      description: "We saw a gap in AI consulting: clients deserve solutions that truly drive impact. With proven expertise in high-stakes sectors, we know how to harness AI's transformative potential to solve real challenges."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Our Vision",
      description: "Industries should operate smarter, not harder. We create AI that takes on repetitive tasks, freeing your team to focus on what matters most. Our approach is practical, seamless, and purpose-driven."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Promise",
      description: "Your goals are our priority. We believe in transparent communication, strategic insights, and solutions that create lasting value. With us, you gain a partner dedicated to your success."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "The Impact We Create",
      description: "Our AI solutions don't just automate; they elevate. We help organizations become more efficient, resilient, and future-ready, equipping you with tools to achieve real, measurable progress."
    }
  ];

  return (
    <section id="why-we-are-here" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're Here</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-slate-700/30 p-6 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-500 mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 