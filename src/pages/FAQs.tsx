import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const FAQs: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          id: 1,
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click the 'Register' button in the top right corner, fill out the form with your details, and verify your email address. You'll have immediate access to our free courses and can upgrade to premium features anytime."
        },
        {
          id: 2,
          question: "What courses are available for beginners?",
          answer: "We offer a wide range of beginner-friendly courses including Web Development Fundamentals, Data Science Basics, Digital Marketing 101, and UI/UX Design Principles. All beginner courses are clearly marked and include step-by-step guidance."
        },
        {
          id: 3,
          question: "How do I navigate the learning platform?",
          answer: "Our platform is designed to be intuitive. After logging in, you'll find your dashboard with enrolled courses, progress tracking, and recommendations. Use the main navigation to explore courses, attend live classes, and access AI tools."
        }
      ]
    },
    {
      category: "Courses & Content",
      questions: [
        {
          id: 4,
          question: "How long do I have access to a course?",
          answer: "Once you enroll in a course, you have lifetime access to the content. This includes all video lessons, materials, and future updates. You can learn at your own pace and revisit content whenever needed."
        },
        {
          id: 5,
          question: "Are there prerequisites for advanced courses?",
          answer: "Yes, some advanced courses have prerequisites listed in the course description. We recommend completing foundational courses first or having equivalent experience. Each course page clearly outlines required knowledge."
        },
        {
          id: 6,
          question: "Can I download course materials?",
          answer: "Yes! Most course materials including PDFs, code files, and resources are downloadable. Video content is available for offline viewing through our mobile app with a premium subscription."
        }
      ]
    },
    {
      category: "Live Classes",
      questions: [
        {
          id: 7,
          question: "How do live classes work?",
          answer: "Live classes are interactive sessions with expert instructors. You'll receive a calendar invitation and can join through your browser or mobile app. Classes include Q&A sessions, and recordings are available for review."
        },
        {
          id: 8,
          question: "What if I miss a live class?",
          answer: "No worries! All live classes are recorded and available in your dashboard within 24 hours. You can also ask questions in the class discussion forum, and instructors regularly respond to student queries."
        },
        {
          id: 9,
          question: "Can I interact with instructors during live classes?",
          answer: "Absolutely! Live classes feature real-time Q&A, polls, and chat functionality. You can ask questions, participate in discussions, and get immediate feedback from instructors and fellow students."
        }
      ]
    },
    {
      category: "AI Tools",
      questions: [
        {
          id: 10,
          question: "How do the AI learning tools work?",
          answer: "Our AI tools use advanced machine learning to enhance your learning experience. ChatWithDoc analyzes your documents, the Quiz Generator creates personalized tests, and the Study Plan Generator creates custom learning paths based on your goals and progress."
        },
        {
          id: 11,
          question: "Are the AI tools included with my subscription?",
          answer: "Basic AI tools are included with premium subscriptions. Advanced features like unlimited document analysis and custom study plans require our Pro subscription. Free users get limited access to try the tools."
        },
        {
          id: 12,
          question: "How accurate are the AI-generated quizzes and summaries?",
          answer: "Our AI tools maintain high accuracy through continuous learning and expert validation. Quiz questions are generated based on key concepts, and summaries capture essential information. We also provide feedback mechanisms to improve accuracy."
        }
      ]
    },
    {
      category: "Certificates & Progress",
      questions: [
        {
          id: 13,
          question: "Do I receive certificates upon completion?",
          answer: "Yes! You'll receive a digital certificate upon completing courses with a passing grade. Certificates include your name, course title, completion date, and can be shared on LinkedIn or downloaded as PDF."
        },
        {
          id: 14,
          question: "Are certificates recognized by employers?",
          answer: "Our certificates are recognized by many employers in the tech industry. We partner with leading companies for our curriculum development, and many students have successfully used our certificates in job applications."
        },
        {
          id: 15,
          question: "How is progress tracked?",
          answer: "Progress is automatically tracked as you complete lessons, quizzes, and assignments. Your dashboard shows completion percentages, time spent learning, and achievements. You can also see detailed analytics of your learning journey."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          id: 16,
          question: "What browsers are supported?",
          answer: "Our platform works best on Chrome, Firefox, Safari, and Edge (latest versions). We recommend using Chrome for the best experience with video playback and interactive features."
        },
        {
          id: 17,
          question: "I'm having trouble with video playback. What should I do?",
          answer: "Try refreshing your browser, clearing cache, or switching to a different browser. Ensure you have a stable internet connection. If issues persist, contact our support team with details about your browser and device."
        },
        {
          id: 18,
          question: "Is there a mobile app?",
          answer: "Yes! Our mobile app is available for iOS and Android devices. You can download courses for offline viewing, participate in live classes, and access all platform features on the go."
        }
      ]
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform and courses
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="flex items-center justify-between w-full text-left focus:outline-none"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(faq.id) ? (
                        <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(faq.id) && (
                      <div className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Contact Support
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors">
              Join Community Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;