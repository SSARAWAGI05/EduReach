import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Rishika Sarawagi",
      role: "CEO & Founder",
      image: "https://i.postimg.cc/QdVgvj6M/6-DCBE6-DE-4-E97-4-A55-9590-E6-FC193-A52-FE.jpg",
      bio: "Former Consultant at Mastercard with 7+ years of experience in the education industry"
    },
    {
    name: "Shubam Sarawagi",
    role: "Head of AI & Development",
    image: "https://i.postimg.cc/3rgtZr65/IMG-3756.jpg",
    bio: "Software Developer, Website Manager & AI/ML Engineer"
  },
  {
    name: "Pooja Sarawagi",
    role: "Mentor & Strategy Consultant",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Passionate Motivator, Trusted Consultant & Strategic Guide"
  },
  {
    name: "Praveen Kumar Sarawagi",
    role: "Chief Financial Advisor",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Finance Expert, Consultant & Advisor"
  }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Lear With Rishika! was founded with a mission to democratize quality education"
    },
    {
      year: "2021",
      title: "First 1000 Students",
      description: "Reached our first milestone of 1000 active students"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched our first AI-powered learning tools"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to serve students in over 50 countries"
    },
    {
      year: "2024",
      title: "50,000+ Students",
      description: "Celebrating our growing community of learners worldwide"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Students",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      value: "200+",
      label: "Expert Instructors",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      value: "95%",
      label: "Completion Rate",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Learn with Rishika!</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Through innovative technology and expert instruction, we're transforming how people learn and grow.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that education is the key to unlocking human potential. Our platform combines 
                  cutting-edge technology with proven pedagogical methods to create learning experiences 
                  that are engaging, effective, and accessible to learners worldwide.
                </p>
                <p className="text-lg text-gray-600">
                  Through personalized learning paths, AI-powered tools, and expert mentorship, we're 
                  helping millions of students achieve their educational and career goals.
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students learning"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Our diverse team of experts is passionate about education and technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to global education platform
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for the highest quality in everything we create and deliver.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">Education should be available to everyone, regardless of background or location.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously explore new technologies to enhance the learning experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;