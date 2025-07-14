import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Video, Play } from 'lucide-react';

const LiveClass: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const nextClass = {
    title: "Macroeconomics",
    instructor: "Rishika Sarawagi",
    date: "2025-08-20",
    time: "14:00",
    duration: "2 hours",
    participants: 156,
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://meet.google.com/kya-jnti-sog" // ✅ Your actual Google Meet link
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const classDateTime = new Date(`${nextClass.date} ${nextClass.time}`);
      const now = new Date();
      const difference = classDateTime.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingClasses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      instructor: "Mike Chen",
      date: "2024-01-22",
      time: "10:00",
      duration: "90 minutes",
      participants: 89
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      instructor: "Emma Davis",
      date: "2024-01-23",
      time: "16:00",
      duration: "2 hours",
      participants: 124
    },
    {
      id: 3,
      title: "UI/UX Design Workshop",
      instructor: "Alex Rivera",
      date: "2024-01-24",
      time: "13:00",
      duration: "3 hours",
      participants: 67
    }
  ];

  const pastClasses = [
    {
      id: 1,
      title: "Node.js Backend Development",
      instructor: "Robert Kim",
      date: "2024-01-15",
      recording: true
    },
    {
      id: 2,
      title: "React State Management",
      instructor: "Lisa Anderson",
      date: "2024-01-12",
      recording: true
    },
    {
      id: 3,
      title: "Database Design Principles",
      instructor: "Tom Wilson",
      date: "2024-01-10",
      recording: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Classes</h1>
          <p className="text-xl text-gray-600">Join interactive sessions with expert instructors</p>
        </div>

        {/* Next Live Class */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Next Live Class</h2>
              <h3 className="text-2xl font-semibold mb-2">{nextClass.title}</h3>
              <p className="text-lg mb-4">with {nextClass.instructor}</p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(nextClass.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{nextClass.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{nextClass.participants} enrolled</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                <p className="text-sm mb-2">Starts in:</p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Join Class Button with Link */}
              <a
                href={nextClass.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  <Video className="h-5 w-5 mr-2" />
                  Join Class
                </button>
              </a>
            </div>

            <div>
              <img
                src={nextClass.image}
                alt="Live Class"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map((class_) => (
              <div key={class_.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{class_.title}</h3>
                <p className="text-gray-600 mb-4">with {class_.instructor}</p>

                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(class_.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{class_.time} ({class_.duration})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{class_.participants} enrolled</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Classes Archive */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Classes Archive</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {pastClasses.map((class_) => (
                <div key={class_.id} className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{class_.title}</h3>
                    <p className="text-gray-600">with {class_.instructor}</p>
                    <p className="text-sm text-gray-500">{new Date(class_.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {class_.recording && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Recording Available
                      </span>
                    )}
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Recording
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
