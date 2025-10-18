'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '@/components/LoginForm/LoginForm.module.css';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e?.preventDefault();

    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }

    setLoading(true);

    try {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        { username, password },
        {
          withCredentials: true
        }
      );

      console.log(result);
      const userId = result.data.user_id;
 
      sessionStorage.setItem('user_id', userId);

      router.push('/speedtype/typing');

      

    } catch (err) {
      let msg = 'Login failed.';
      if (err.response) {
        msg = err.response.data?.message || msg;
      }
      alert(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Sign In</h2>

        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </PrimaryButton>
        </form>

        <SecondaryButton
          disabled={loading}
          onClick={() => router.push('/auth/register')}
        >
          Register
        </SecondaryButton>
      </div>
    </div>
  );
}