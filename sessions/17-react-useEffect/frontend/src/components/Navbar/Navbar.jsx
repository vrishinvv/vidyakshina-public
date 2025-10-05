import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/concepts/use-effect-mount" className={styles.link}>useEffect Mount</Link>
        <Link href="/concepts/use-effect-deps" className={styles.link}>useEffect Deps</Link>
        <Link href="/concepts/use-effect-timers" className={styles.link}>useEffect Timers</Link>
        <Link href="/concepts/use-effect-onload" className={styles.link}>useEffect OnLoad</Link>
      </nav>
    </header>
  );
}
