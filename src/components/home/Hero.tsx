import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kickstart Your
              <span className="text-blue-600"> Learning Adventure</span>
              <br />
              With Rishika!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of curious minds. Learn smarter, not harder, with fun, hands-on guidance and AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Start Learning Now
              </Link>
              <Link
                to="/live-class"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">50,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">200+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-600">4.9 Rating</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://i.postimg.cc/5yyd0y52/0-F708217-3-D0-B-45-ED-9-FED-E38288541250.jpg"
                alt="Students learning"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hey, I’m Rishika — here to turn your ‘I don’t get it’ into ‘nailed it!’</h3>
              <p className="text-gray-600">Let’s make learning fun, practical, and something you actually look forward to!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;