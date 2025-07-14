import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { supabase } from '../supabaseClient'; // 👈 Ensure this is set up correctly
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate(); // ✅ NEW: for redirecting after register
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Step 1: Sign up the user
  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (signUpError) {
    alert(signUpError.message);
    return;
  }

  // Step 2: Insert user details into your `users` table
  const { user } = authData;
  if (user) {
    const { error: insertError } = await supabase
      .from('users')
      .insert([
        {
          id: user.id, // Link to auth.users
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          is_active: true, // optional default
          created_at: new Date().toISOString(), // optional if you want to prefill
        }
      ]);

    if (insertError) {
      alert('Account created, but failed to save user info.');
      console.error(insertError);
    } else {
      alert('Account created! Please check your email for confirmation.');
    }
  }
  navigate('/login');
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://ofxinmglsqsbyzsiofcy.supabase.co/auth/v1/callback', // ✅ adjust if needed
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center px-4 py-12">
      <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6 transition-all duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Create your account 🧑‍🚀</h2>
          <p className="mt-2 text-sm text-gray-500">
            Already registered?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-blue-500 hover:text-blue-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="new-password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-blue-500 hover:text-blue-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 accent-blue-600"
              required
            />
            I agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition"
          >
            Create Account
          </button>

          <div className="flex items-center gap-3 text-gray-400 text-sm justify-center">
            <div className="h-px bg-gray-300 flex-1" />
            OR
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );

};

export default Register;