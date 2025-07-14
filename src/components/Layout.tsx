import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowWelcome(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 👋 Welcome Notch — only show on homepage and when at top */}
      {isHomePage && showWelcome && (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-[9999] bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full shadow-lg text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/50 border border-yellow-300">
          👋 Welcome 
        </div>
      )}

      <Header />

      <main className="pt-32 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
