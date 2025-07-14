import React from 'react';
import { MessageSquare, FileText, Brain, Calendar, Edit, Sparkles, Zap, Target } from 'lucide-react';

const AIHub: React.FC = () => {
  const tools = [
    {
      id: 1,
      name: "ChatWithDoc",
      description: "Upload documents and have intelligent conversations about their content. Ask questions, get summaries, and extract key information.",
      icon: MessageSquare,
      color: "bg-blue-500",
      features: ["PDF Support", "Real-time Q&A", "Multi-language"],
      popular: true
    },
    {
      id: 2,
      name: "Summarizer",
      description: "Quickly summarize long texts, articles, and documents. Perfect for research and study preparation.",
      icon: FileText,
      color: "bg-green-500",
      features: ["Smart Extraction", "Key Points", "Multiple Formats"],
      popular: false
    },
    {
      id: 3,
      name: "Quiz Generator",
      description: "Create interactive quizzes from any content. Perfect for testing knowledge and exam preparation.",
      icon: Brain,
      color: "bg-purple-500",
      features: ["Auto-generation", "Multiple Choice", "Custom Difficulty"],
      popular: true
    },
    {
      id: 4,
      name: "Study Plan Generator",
      description: "Get personalized study plans based on your goals, timeline, and learning preferences.",
      icon: Calendar,
      color: "bg-orange-500",
      features: ["Goal Setting", "Timeline Planning", "Progress Tracking"],
      popular: false
    },
    {
      id: 5,
      name: "AI Humanizer",
      description: "Make AI-generated content sound more natural and human-like. Perfect for essays and creative writing.",
      icon: Edit,
      color: "bg-pink-500",
      features: ["Natural Language", "Style Adaptation", "Tone Adjustment"],
      popular: false
    },
    {
      id: 6,
      name: "Smart Notes",
      description: "AI-powered note-taking that organizes, categorizes, and connects your learning materials automatically.",
      icon: Sparkles,
      color: "bg-indigo-500",
      features: ["Auto-organization", "Smart Linking", "Voice Notes"],
      popular: false
    },
    {
      id: 7,
      name: "Concept Mapper",
      description: "Visualize complex topics and create mind maps automatically from your study materials.",
      icon: Zap,
      color: "bg-yellow-500",
      features: ["Visual Learning", "Auto-mapping", "Export Options"],
      popular: false
    },
    {
      id: 8,
      name: "Goal Tracker",
      description: "Set learning goals and track your progress with AI-powered insights and recommendations.",
      icon: Target,
      color: "bg-red-500",
      features: ["Goal Setting", "Progress Analytics", "Recommendations"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Learning Hub - Coming Soon!</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supercharge your learning with our collection of AI-powered tools designed to enhance your educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {tool.popular && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-gray-700">Features:</p>
                  <ul className="text-sm text-gray-600">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                  Use Tool
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How Our AI Tools Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Tool</h3>
              <p className="text-gray-600">Select the AI tool that best fits your learning needs from our comprehensive collection.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Input Your Content</h3>
              <p className="text-gray-600">Upload documents, paste text, or provide the information you want to work with.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get AI-Powered Results</h3>
              <p className="text-gray-600">Receive intelligent, personalized results that enhance your learning experience.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our AI Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get results in seconds, not hours</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Highly Accurate</h3>
              <p className="text-gray-600">AI-powered precision you can trust</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is protected and private</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Learning</h3>
              <p className="text-gray-600">Continuously improving with usage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHub;