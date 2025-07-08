import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 6;

  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Software Engineer at Google",
      company: "Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "This platform completely transformed my career. The courses are comprehensive, the instructors are top-notch, and the AI tools helped me learn faster than I ever thought possible. I landed my dream job at Google just 8 months after starting!",
      rating: 5,
      course: "Complete Web Development Bootcamp"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Data Scientist at Microsoft",
      company: "Microsoft",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The live classes and mentor support made all the difference. I went from complete beginner to landing a data science role at Microsoft. The personalized study plans kept me motivated throughout my journey.",
      rating: 5,
      course: "Data Science and Machine Learning"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Marketing Director",
      company: "Startup Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Exceptional quality content and amazing community. The AI-powered study plans and interactive elements made learning engaging. I've applied these skills to grow my startup's user base by 300%.",
      rating: 5,
      course: "Digital Marketing Masterclass"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "UX Designer at Apple",
      company: "Apple",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The design courses here are incredibly thorough and practical. I learned industry-standard tools and techniques that directly helped me transition into UX design. Now I'm designing products used by millions!",
      rating: 5,
      course: "UI/UX Design Fundamentals"
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Full Stack Developer",
      company: "Tech Startup",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The hands-on projects and real-world applications made all the difference. I built a portfolio that impressed employers and secured multiple job offers. The instructors were always available to help.",
      rating: 5,
      course: "Full Stack Development"
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Business Analyst",
      company: "Fortune 500 Company",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The business courses provided practical skills I use daily. The case studies and interactive elements helped me understand complex concepts. I got promoted within 6 months of completing the program.",
      rating: 5,
      course: "Business Strategy and Analytics"
    },
    {
      id: 7,
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The cloud computing and DevOps courses were exactly what I needed to advance my career. The practical labs and real-world scenarios prepared me for the challenges I face at Amazon every day.",
      rating: 5,
      course: "Cloud Computing & DevOps"
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Product Manager",
      company: "Netflix",
      image: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The product management course gave me frameworks and tools I use every day. The instructor's industry experience and practical examples helped me transition from engineering to product management at Netflix.",
      rating: 5,
      course: "Product Management Essentials"
    },
    {
      id: 9,
      name: "Robert Martinez",
      role: "Cybersecurity Specialist",
      company: "Government Agency",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The cybersecurity curriculum is comprehensive and up-to-date with current threats. The hands-on labs and simulations provided real-world experience that prepared me for my government security role.",
      rating: 5,
      course: "Cybersecurity Fundamentals"
    }
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers and achieved their dreams through our platform
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-6">
              <Quote className="h-12 w-12 text-white opacity-50 mr-4" />
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
              "This platform completely transformed my career. The courses are comprehensive, 
              the instructors are top-notch, and the AI tools helped me learn faster than I ever thought possible."
            </blockquote>
            <div className="flex items-center">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold text-xl">{testimonials[0].name}</p>
                <p className="text-lg opacity-90">{testimonials[0].role}</p>
                <p className="text-sm opacity-75">{testimonials[0].company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-blue-600 font-medium">Course: {testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <button
            onClick={prevPage}
            className="bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">
              Real results from real students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Career Advancement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
              <p className="text-gray-600">Salary Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6 months</div>
              <p className="text-gray-600">Average Time to New Role</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;