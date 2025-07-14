import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false); // close mobile menu if open
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Live Class', href: '/live-class' },
    { name: 'AI Hub', href: '/ai-hub' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed z-50 top-14 left-6 right-6 rounded-full shadow-xl transition-all duration-300 ${
        isScrolled ? 'bg-gray-100 bg-opacity-90 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">EduVibe</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-gray-900 p-2 rounded-md"
                >
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                {!user ? (
                  <div className="flex items-center px-3 space-x-3">
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-gray-900 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-3">
                    <Link
                      to="/dashboard"
                      className="text-gray-700 hover:text-gray-900 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-800 text-base font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
