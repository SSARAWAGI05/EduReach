import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Calendar, Clock, Users, Video, Play } from 'lucide-react';

const LiveClass: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [nextClass, setNextClass] = useState<any | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // ✅ Get user session and extract email
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
        error
      } = await supabase.auth.getSession();

      if (session?.user?.email) {
        setUserEmail(session.user.email); // ✅ email is guaranteed to be string
      } else {
        setUserEmail(null); // Optional fallback
      }
    };

    getUser();
  }, []);


  // ✅ Fetch the earliest upcoming class for the student
  useEffect(() => {
    if (!userEmail) return;

    const fetchStudentClass = async () => {
      const { data, error } = await supabase
        .from('live_classes')
        .select('*')
        .eq('student_email', userEmail)
        .gte('class_date', new Date().toISOString().split('T')[0])
        .order('class_date', { ascending: true })
        .order('class_time', { ascending: true });

      if (error) {
        console.error('Error fetching class:', error);
        return;
      }

      if (data && data.length > 0) {
        setNextClass(data[0]);
      }
    };

    fetchStudentClass();
  }, [userEmail]);

  // ✅ Timer to countdown to class
  useEffect(() => {
    if (!nextClass) return;

    const calculateTimeLeft = () => {
      const classDateTime = new Date(`${nextClass.class_date}T${nextClass.class_time}`);
      const now = new Date();
      const difference = classDateTime.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [nextClass]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Classes</h1>
          <p className="text-xl text-gray-600">Join interactive sessions with expert instructors</p>
        </div>

        {/* ✅ Show only if user is logged in and a class is found */}
        {userEmail && nextClass && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Next Live Class</h2>
                <h3 className="text-2xl font-semibold mb-2">{nextClass.title}</h3>
                <p className="text-lg mb-4">with {nextClass.instructor}</p>

                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(nextClass.class_date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{nextClass.class_time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>1 student (you)</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                  <p className="text-sm mb-2">Starts in:</p>
                  <div className="flex space-x-4">
                    {(['days', 'hours', 'minutes', 'seconds'] as const).map((key) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold">{timeLeft[key]}</div>
                        <div className="text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join button */}
                {nextClass.link && (
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
                )}
              </div>

              <div>
                <img
                  src={nextClass.image || 'https://via.placeholder.com/600x400?text=Live+Class'}
                  alt="Live Class"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* ✅ Not logged in */}
        {!userEmail && (
          <div className="text-center text-red-600 text-lg font-semibold mb-10">
            Please log in to see your upcoming classes.
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClass;
