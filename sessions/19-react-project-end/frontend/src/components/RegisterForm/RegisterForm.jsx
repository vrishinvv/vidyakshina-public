'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '@/components/RegisterForm/RegisterForm.module.css';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import Link from 'next/link';

export default function RegisterForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e?.preventDefault();

    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('https://vidyakshina-public-gules.vercel.app/register', {
        username,
        password,
      },
      {
          withCredentials: true
      });
      // After successful registration redirect to login
      router.push('/auth/login');
    } catch (err) {
      let msg = 'Registration failed.';
      if (err.response) {
        msg =
          err.response.data?.message ||
          err.response.data?.error ||
          msg;
      }
      alert(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className={styles.input}
            placeholder="Username"
            value={username}
            disabled={loading}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
            <input
              className={styles.input}
              placeholder="Password"
              type="password"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Account'}
          </PrimaryButton>
        </form>
        <p className={styles.helper}>
          Already have an account?{' '}
          <Link href="/auth/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}