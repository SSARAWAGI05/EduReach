import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import AIToolsPreview from '../components/home/AIToolsPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogHighlights from '../components/home/BlogHighlights';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <AIToolsPreview />
      <TestimonialsSection />
      <BlogHighlights />
      <Newsletter />
    </div>
  );
};

export default Home;