'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const valid = email.includes('@');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        value={email}
        onChange={handleChange}
        placeholder="Email address"
        type="email"
      />
      <div className={styles.actions}>
        <button className={styles.button} disabled={!valid}>Continue</button>
      </div>
    </div>
  );
}
