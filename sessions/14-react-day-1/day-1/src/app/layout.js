import Link from 'next/link';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/" className={`${styles.link} ${styles.home}`}>
              Home
            </Link>
            <Link href="/concepts/what-is-jsx" className={styles.link}>
              What is JSX
            </Link>
            <Link href="/concepts/hello" className={styles.link}>
              Hello
            </Link>
            <Link href="/concepts/many-instances" className={styles.link}>
              Component × Many
            </Link>
            <Link href="/concepts/prop-basics" className={styles.link}>
              Props Basic
            </Link>
            <Link href="/concepts/parent-child" className={styles.link}>
              Parent → Child
            </Link>
            <Link href="/concepts/props-children" className={styles.link}>
              props.children
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
