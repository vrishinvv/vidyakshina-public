import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/concepts/auth/login" className={styles.link}>Login</Link>
        <Link href="/concepts/auth/register" className={styles.link}>Register</Link>
        <span className={styles.sep}>|</span>
        <Link href="/concepts/state/counter-basics" className={styles.link}>Counter</Link>
        <Link href="/concepts/state/live-preview" className={styles.link}>Live Preview</Link>
        <Link href="/concepts/state/status-picker" className={styles.link}>Status Picker</Link>
        <Link href="/concepts/state/valid-email" className={styles.link}>Valid Email</Link>
      </nav>
    </header>
  );
}
