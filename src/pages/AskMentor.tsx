import React, { useState } from 'react';
import { Send, Search, Clock, ThumbsUp, MessageCircle, User, Filter } from 'lucide-react';

const AskMentor: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'career', name: 'Career Advice' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'general', name: 'General' }
  ];

  const questions = [
    {
      id: 1,
      title: "How do I transition from frontend to full-stack development?",
      content: "I've been working as a frontend developer for 2 years and want to expand my skills to become a full-stack developer. What backend technologies should I learn first?",
      author: "John Smith",
      category: "programming",
      timestamp: "2 hours ago",
      likes: 15,
      replies: 8,
      answered: true,
      tags: ["JavaScript", "Backend", "Career"]
    },
    {
      id: 2,
      title: "Best practices for machine learning model deployment?",
      content: "I've trained several ML models but struggling with deployment. What are the industry best practices for deploying ML models in production?",
      author: "Sarah Johnson",
      category: "data-science",
      timestamp: "5 hours ago",
      likes: 23,
      replies: 12,
      answered: true,
      tags: ["Machine Learning", "Deployment", "MLOps"]
    },
    {
      id: 3,
      title: "How to negotiate salary for a remote position?",
      content: "I'm interviewing for a remote software engineer position. How should I approach salary negotiation when the company is in a different location?",
      author: "Mike Chen",
      category: "career",
      timestamp: "1 day ago",
      likes: 31,
      replies: 18,
      answered: false,
      tags: ["Salary", "Negotiation", "Remote Work"]
    },
    {
      id: 4,
      title: "UI/UX design trends for 2024?",
      content: "What are the emerging UI/UX design trends I should be aware of in 2024? I want to keep my designs current and competitive.",
      author: "Lisa Davis",
      category: "design",
      timestamp: "2 days ago",
      likes: 19,
      replies: 7,
      answered: true,
      tags: ["UI/UX", "Design Trends", "2024"]
    },
    {
      id: 5,
      title: "Starting a tech startup - what to focus on first?",
      content: "I have an idea for a tech startup but don't know where to start. Should I focus on building the product first or validating the market?",
      author: "Alex Rivera",
      category: "business",
      timestamp: "3 days ago",
      likes: 27,
      replies: 15,
      answered: false,
      tags: ["Startup", "Business", "Product Development"]
    },
    {
      id: 6,
      title: "How to handle imposter syndrome as a junior developer?",
      content: "I'm a junior developer and constantly feel like I don't know enough. How do I overcome imposter syndrome and build confidence?",
      author: "Emma Wilson",
      category: "career",
      timestamp: "1 week ago",
      likes: 42,
      replies: 25,
      answered: true,
      tags: ["Imposter Syndrome", "Junior Developer", "Career"]
    }
  ];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || question.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      // Handle question submission
      console.log('New question:', newQuestion);
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ask a Mentor</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert advice from industry professionals. Ask questions, share knowledge, and learn from the community.
          </p>
        </div>

        {/* Question Submission Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ask Your Question</h2>
          <form onSubmit={handleSubmitQuestion}>
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to ask?
              </label>
              <textarea
                id="question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your question in detail..."
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Category</option>
                {categories.slice(1).map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Add tags (comma separated)"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Question
            </button>
          </form>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mr-4">{question.title}</h3>
                    {question.answered && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Answered
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{question.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {question.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{question.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{question.timestamp}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">{question.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{question.replies}</span>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No questions found matching your criteria.</p>
          </div>
        )}

        {/* Community Guidelines */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📝 Asking Questions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Be specific and provide context</li>
                <li>• Search existing questions first</li>
                <li>• Use relevant tags</li>
                <li>• Include your current level/experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">💬 Answering Questions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Provide helpful and accurate information</li>
                <li>• Share your experience and insights</li>
                <li>• Be respectful and constructive</li>
                <li>• Include resources when possible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskMentor;