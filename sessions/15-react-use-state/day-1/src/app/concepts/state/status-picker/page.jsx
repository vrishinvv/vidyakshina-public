'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Page() {
  const [status, setStatus] = useState('Offline');

  function setOnline() { setStatus('Online'); }
  function setAway() { setStatus('Away'); }
  function setDnd() { setStatus('Do Not Disturb'); }
  function reset() { setStatus('Offline'); }

  return (
    <div className={styles.wrap}>
      <h2>Status Picker (no prev value)</h2>
      <p className={styles.current}>Current: <strong>{status}</strong></p>
      <div className={styles.row}>
        <button onClick={setOnline}>Online</button>
        <button onClick={setAway}>Away</button>
        <button onClick={setDnd}>DND</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
