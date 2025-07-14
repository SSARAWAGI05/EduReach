import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Brain, Calendar, Edit, Sparkles } from 'lucide-react';

const AIToolsPreview: React.FC = () => {
  const tools = [
    {
      name: "ChatWithDoc",
      description: "Ask questions about your documents and get instant answers",
      icon: MessageSquare,
      color: "bg-blue-500"
    },
    {
      name: "Summarizer",
      description: "Quickly summarize long texts and documents",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      name: "Quiz Generator",
      description: "Create interactive quizzes from any content",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      name: "Study Plan Generator",
      description: "Get personalized study plans based on your goals",
      icon: Calendar,
      color: "bg-orange-500"
    },
    {
      name: "AI Humanizer",
      description: "Make AI-generated content sound more natural",
      icon: Edit,
      color: "bg-pink-500"
    },
    {
      name: "Smart Notes",
      description: "AI-powered note-taking and organization",
      icon: Sparkles,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Learning Tools - Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your learning experience with our cutting-edge AI tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <tool.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Try Now →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/ai-hub"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Explore All AI Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIToolsPreview;