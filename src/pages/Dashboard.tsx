import React, { useState } from 'react';
import { BookOpen, Award, Calendar, FileText, BarChart3, Clock, CheckCircle, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 65,
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300",
      nextLesson: "React Hooks Deep Dive",
      timeLeft: "2 weeks"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Dr. Michael Chen",
      progress: 30,
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=300",
      nextLesson: "Python for Data Analysis",
      timeLeft: "1 month"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Thompson",
      progress: 90,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300",
      nextLesson: "Final Project Review",
      timeLeft: "3 days"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      issueDate: "2024-01-15",
      score: 95
    },
    {
      id: 2,
      title: "HTML & CSS Mastery",
      issueDate: "2024-01-10",
      score: 88
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      date: "2024-01-20",
      time: "14:00"
    },
    {
      id: 2,
      title: "Python Data Structures",
      instructor: "Dr. Michael Chen",
      date: "2024-01-22",
      time: "10:00"
    }
  ];

  const recentNotes = [
    {
      id: 1,
      title: "React Components Best Practices",
      date: "2024-01-18",
      course: "Web Development"
    },
    {
      id: 2,
      title: "Machine Learning Algorithms",
      date: "2024-01-17",
      course: "Data Science"
    }
  ];

  const tabs = [
    { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress Tracker', icon: BarChart3 },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'schedule', label: 'Live Class Schedule', icon: Calendar },
    { id: 'notes', label: 'Notes', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Kashvi!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">3</h3>
                <p className="text-gray-600">Active Courses</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">2</h3>
                <p className="text-gray-600">Certificates</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">24h</h3>
                <p className="text-gray-600">Learning Time</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">4.8</h3>
                <p className="text-gray-600">Avg. Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'courses' && (
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <p className="text-gray-600 mb-2">by {course.instructor}</p>
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Next: {course.nextLesson}</p>
                            <p className="text-sm text-gray-500">Time remaining: {course.timeLeft}</p>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Progress</h3>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id}>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="font-medium text-gray-900">{course.title}</span>
                          <span className="text-gray-600">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Streak</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                    <p className="text-gray-600">Days in a row</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                        <p className="text-gray-600">Issued on {new Date(cert.issueDate).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">Score: {cert.score}%</p>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Live Classes</h3>
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{class_.title}</h4>
                        <p className="text-gray-600">with {class_.instructor}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(class_.date).toLocaleDateString()} at {class_.time}
                        </p>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Join Class
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Notes</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Create Note
                  </button>
                </div>
                {recentNotes.map((note) => (
                  <div key={note.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{note.title}</h4>
                        <p className="text-gray-600">{note.course}</p>
                        <p className="text-sm text-gray-500">
                          Created on {new Date(note.date).toLocaleDateString()}
                        </p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;