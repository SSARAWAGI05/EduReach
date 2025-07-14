import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import LiveClass from './pages/LiveClass';
import AIHub from './pages/AIHub';
import Blogs from './pages/Blogs';
import News from './pages/News';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Dashboard from './pages/Dashboard';
import AskMentor from './pages/AskMentor';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ NEW import

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/live-class" element={<LiveClass />} />
          <Route path="/ai-hub" element={<AIHub />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* ✅ PROTECTED ROUTE */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/ask-mentor" element={<AskMentor />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
