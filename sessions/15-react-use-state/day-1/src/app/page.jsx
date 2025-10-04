import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Session 3</h1>
      <ul className={styles.list}>
        <li><Link href="/concepts/state/hello-world">helloWorld</Link></li>
        <li><Link href="/concepts/state/status-picker">status picker</Link></li>
        <li><Link href="/concepts/auth/login">login</Link></li>
      </ul>
    </main>
  );
}

/*
<li><Link href="/concepts/auth/login">Login</Link></li>
        <li><Link href="/concepts/auth/register">Register</Link></li>
        <li><Link href="/concepts/state/counter-basics">Counter</Link></li>
        <li><Link href="/concepts/state/live-preview">Live Preview</Link></li>
        <li><Link href="/concepts/state/status-picker">Status Picker</Link></li>
        <li><Link href="/concepts/state/valid-email" className={styles.link}>Valid Email</Link></li> 
- last class recap
- talk about children concept from last class
- start with designing login/register template -->> let them think and design the page
- useState file 1, file 2

*/
