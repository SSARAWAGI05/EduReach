import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Login: React.FC = () => {
  const navigate = useNavigate(); // ✅ NEW: for redirecting after login

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event !== 'SIGNED_IN' || !session?.user) return;

      const provider = session.user.app_metadata?.provider ?? 'password';

      if (provider === 'google') {
        const { error: upsertError } = await supabase
          .from('users')
          .upsert(
            {
              id: session.user.id,
              email: session.user.email,
              is_active: true,
            },
            { onConflict: 'id' }
          );
        if (upsertError) console.error('Google upsert failed:', upsertError.message);
      } else {
        const { error: updateError } = await supabase
          .from('users')
          .update({ is_active: true })
          .eq('id', session.user.id);
        if (updateError) console.error('Update is_active failed:', updateError.message);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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
      }
    }

    setError('');
    alert('Logged in successfully!');

    navigate('/dashboard'); // ✅ RESTORED: navigate to dashboard after login
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://ofxinmglsqsbyzsiofcy.supabase.co/auth/v1/callback',
      },
    });
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6 transition-all duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Login to FutureBoard 🚀
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-blue-500 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-blue-500 hover:text-blue-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="accent-blue-600"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition"
          >
            Sign In
          </button>

          <div className="flex items-center gap-3 text-gray-400 text-sm justify-center">
            <div className="h-px bg-gray-300 flex-1" />
            OR
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="currentColor"
            >
              <path d="M488 261.8c0-17.8..." />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            disabled
            className="w-full py-2 text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed"
          >
            GitHub (coming soon)
          </button>
        </form>
      </div>
    </div>
  );



};

export default Login;
