import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const insertUserIfNew = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        console.error('User fetch failed:', error?.message);
        return;
      }

      const { id, email, user_metadata } = user;
      const fullName = user_metadata?.full_name || '';
      const firstName = fullName.split(' ')[0];
      const lastName = fullName.split(' ').slice(1).join(' ') || '';

      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('id', id)
        .single();

      if (!existingUser) {
        const { error: insertError } = await supabase.from('users').insert([
          {
            id,
            first_name: firstName,
            last_name: lastName,
            mail_id: email,
          },
        ]);

        if (insertError) {
          console.error('Insert user failed:', insertError.message);
        }
      }

      navigate('/dashboard'); // Change to your landing page
    };

    insertUserIfNew();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-700">
      Redirecting...
    </div>
  );
};

export default OAuthCallback;
