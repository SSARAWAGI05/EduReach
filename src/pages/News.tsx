import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "New AI-Powered Course Recommendations Now Available",
      summary: "We've launched an intelligent course recommendation system that analyzes your learning patterns and suggests personalized courses.",
      content: "Our new AI system uses machine learning to understand your learning preferences and recommend courses that align with your goals and interests.",
      date: "2024-01-18",
      time: "10:00 AM",
      category: "Product Update",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Leading Tech Companies for Internship Programs",
      summary: "We're excited to announce partnerships with Google, Microsoft, and Amazon to provide internship opportunities for our students.",
      content: "This partnership will provide direct pathways to internships and full-time positions at these industry-leading companies.",
      date: "2024-01-15",
      time: "2:30 PM",
      category: "Partnership",
      featured: false
    },
    {
      id: 3,
      title: "New Mobile App Launch - Learn Anywhere, Anytime",
      summary: "Our new mobile application is now available on both iOS and Android platforms, featuring offline learning capabilities.",
      content: "The app includes all course materials, interactive quizzes, and progress tracking, allowing you to learn on the go.",
      date: "2024-01-12",
      time: "9:00 AM",
      category: "Product Launch",
      featured: false
    },
    {
      id: 4,
      title: "Scholarship Program for Underrepresented Students",
      summary: "We're launching a $1 million scholarship program to support underrepresented students in technology and data science.",
      content: "Applications are now open for our scholarship program that will provide free access to premium courses and mentorship.",
      date: "2024-01-10",
      time: "11:15 AM",
      category: "Scholarship",
      featured: false
    },
    {
      id: 5,
      title: "Extended Reality (XR) Learning Experiences Coming Soon",
      summary: "We're developing immersive VR and AR learning experiences for select courses, starting with our programming bootcamps.",
      content: "These XR experiences will provide hands-on coding practice in virtual environments and 3D data visualization.",
      date: "2024-01-08",
      time: "3:45 PM",
      category: "Innovation",
      featured: false
    },
    {
      id: 6,
      title: "New Language Support: Courses Now Available in Spanish and French",
      summary: "We're expanding our global reach with course translations and native language support for Spanish and French learners.",
      content: "Over 50 of our most popular courses are now available with subtitles and course materials in Spanish and French.",
      date: "2024-01-05",
      time: "1:20 PM",
      category: "Accessibility",
      featured: false
    }
  ];

  const categoryColors = {
    'Product Update': 'bg-blue-100 text-blue-800',
    'Partnership': 'bg-green-100 text-green-800',
    'Product Launch': 'bg-purple-100 text-purple-800',
    'Scholarship': 'bg-yellow-100 text-yellow-800',
    'Innovation': 'bg-pink-100 text-pink-800',
    'Accessibility': 'bg-indigo-100 text-indigo-800'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-600">Stay up to date with our latest announcements and developments</p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
              <span className="ml-4 text-sm opacity-90">
                {newsItems[0].category}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{newsItems[0].title}</h2>
            <p className="text-xl mb-6 opacity-90">{newsItems[0].summary}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    {new Date(newsItems[0].date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{newsItems[0].time}</span>
                </div>
              </div>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-colors flex items-center">
                Read More
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
                  Read Full Story
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;