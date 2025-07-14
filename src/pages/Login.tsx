import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [profile, setProfile] = useState<any>(null);

  /* ------------------------------------------------------------- *
   * 1️⃣  Global auth‑state listener → sets is_active = true
   * ------------------------------------------------------------- */
  useEffect(() => {
    // We subscribe once; the callback fires on every auth change
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const { error: updateError } = await supabase
          .from('users')
          .update({ is_active: true })
          .eq('id', session.user.id);

        if (updateError) {
          console.error('Failed to set is_active → TRUE:', updateError.message);
        }
      }
    });

    // Cleanup to avoid memory leaks
    return () => subscription.unsubscribe();
  }, []);

  /* ------------------------------------------------------------- *
   * 2️⃣  Local handlers
   * ------------------------------------------------------------- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    const { data: authData, error: signInError } =
      await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
      return;
    }

    // 🔄  The auth listener will now set is_active for us.
    //     We can still load the user profile here.
    const user = authData?.user;
    if (user) {
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        setError('Login successful, but failed to load profile.');
        console.error(profileError.message);
      } else {
        setProfile(profileData);
        console.log('User profile:', profileData);
      }
    }

    setError('');
    alert('Logged in successfully!');
    // navigate('/dashboard', { state: { profile } });
  };

  const handleGoogleLogin = async () => {
    // After the OAuth flow, Supabase restores the session,
    // emits SIGNED_IN, and the listener updates is_active.
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://ofxinmglsqsbyzsiofcy.supabase.co/auth/v1/callback',
      },
    });

    if (error) setError(error.message);
  };

  /* ------------------------------------------------------------- *
   * 3️⃣  UI
   * ------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Email */}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Errors */}
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Sign‑in button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>

          {/* OAuth buttons */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  fill="currentColor"
                >
                  <path d="M488 261.8c0-17.8-1.6-35.1-4.6-51.8H249v98h134.4c-5.8 31.1-23.2 57.5-49.5 75.1v62.4h79.8c46.8-43.2 74.3-107 74.3-183.7z" />
                  <path d="M249 480c66.6 0 122.5-22 163.3-59.6l-79.8-62.4c-22 15.1-50.2 24-83.5 24-64.1 0-118.4-43.2-137.9-101.3H29.2v63.7C69.6 426.4 152.9 480 249 480z" />
                  <path d="M111.1 280.7c-10.2-30.1-10.2-62.4 0-92.5V124.5H29.2c-30 60.1-30 132.9 0 193l81.9-63.8z" />
                  <path d="M249 97.7c35.7-.5 69.6 12.7 95.7 36.9l71.5-71.5C371.5 26.8 311.4 0 249 0c-96.1 0-179.4 53.6-219.8 139.2l81.9 63.7c19.5-58.1 73.8-101.3 137.9-101.3z" />
                </svg>
              </button>

              {/* GitHub placeholder */}
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                disabled
              >
                <span className="sr-only">Sign in with GitHub</span>
                GitHub (coming soon)
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
