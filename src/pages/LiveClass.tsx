import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Calendar, Clock, Users, Video } from 'lucide-react';

const LiveClass: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [nextClass, setNextClass] = useState<any | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [notes, setNotes] = useState<any[]>([]);
  const [selectedNoteUrl, setSelectedNoteUrl] = useState<string | null>(null);
  const notesRef = useRef<HTMLDivElement | null>(null); // ⬅️ For scroll

  // ✅ Get user session
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();

      setUserEmail(session?.user?.email ?? null);
    };

    getUser();
  }, []);

  // ✅ Fetch next class
  useEffect(() => {
    if (!userEmail) return;

    const fetchClass = async () => {
      const { data, error } = await supabase
        .from('live_classes')
        .select('*')
        .eq('student_email', userEmail)
        .gte('class_date', new Date().toISOString().split('T')[0])
        .order('class_date', { ascending: true })
        .order('class_time', { ascending: true });

      if (!error && data && data.length > 0) {
        setNextClass(data[0]);
      }
    };

    fetchClass();
  }, [userEmail]);

  // ✅ Countdown
  useEffect(() => {
    if (!nextClass) return;

    const calculateTimeLeft = () => {
      const classDateTime = new Date(`${nextClass.class_date}T${nextClass.class_time}`);
      const now = new Date();
      const diff = classDateTime.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [nextClass]);

  // ✅ Fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
        .from('class_notes')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (!error) setNotes(data);
    };

    fetchNotes();
  }, []);

  // ✅ Auto-scroll when closing preview
  const handleClosePreview = () => {
    setSelectedNoteUrl(null);
    if (notesRef.current) {
      notesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Classes</h1>
          <p className="text-xl text-gray-600">Join interactive sessions with expert instructors</p>
        </div>

        {/* ✅ Show class details */}
        {userEmail && nextClass && (
          <>
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
                      <span>Only you enrolled</span>
                    </div>
                  </div>

                  {/* ✅ Countdown */}
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                    <p className="text-sm mb-2">Starts in:</p>
                    <div className="flex space-x-4">
                      {(['days', 'hours', 'minutes', 'seconds'] as const).map((key) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold">{timeLeft[key]}</div>
                          <div className="text-sm capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ✅ Join class */}
                  {nextClass.link &&
                    timeLeft.days === 0 &&
                    timeLeft.hours === 0 &&
                    timeLeft.minutes <= 5 && (
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

            {/* ✅ Notes Section */}
            <div
              className="bg-white rounded-xl shadow-md p-6 mt-10 scroll-mt-20"
              ref={notesRef}
              id="notes"
            >
              <h2 className="text-2xl font-bold mb-4">Class Notes</h2>

              {notes.length > 0 ? (
                <ul className="space-y-3">
                  {notes.map((note) => (
                    <li key={note.id} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-800">{note.title}</span>
                      <div className="space-x-4">
                        <button
                          onClick={() => setSelectedNoteUrl(note.file_url)}
                          className="text-green-600 underline hover:text-green-800"
                        >
                          Preview
                        </button>
                        <a
                          href={note.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Notes will appear here once uploaded.</p>
              )}
            </div>

            {/* ✅ PDF Preview Section with animation & close */}
            {selectedNoteUrl && (
              <div className="mt-10 animate-fade-in transition-opacity duration-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Preview:</h3>
                  <button
                    onClick={handleClosePreview}
                    className="text-sm text-red-600 underline hover:text-red-800"
                  >
                    Close Preview
                  </button>
                </div>
                <div className="w-full h-[600px] border rounded-lg overflow-hidden">
                  <iframe
                    src={selectedNoteUrl}
                    title="PDF Preview"
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            )}
          </>
        )}

        {!userEmail && (
          <div className="text-center text-red-600 text-lg font-semibold mb-10">
            Please log in to see your upcoming classes.
          </div>
        )}
      </div>

      {/* ✅ Simple fade-in animation via Tailwind */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default LiveClass;
