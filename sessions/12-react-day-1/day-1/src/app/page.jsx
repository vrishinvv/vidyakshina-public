import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>React Day-1 (Next.js App Router)</h1>
      <p className={styles.lead}>Click a link in the navbar or pick one here:</p>
      <ul className={styles.list}>
        <li><Link href="/concepts/hello">Hello</Link></li>
        <li><Link href="/concepts/many-instances">Component × Many</Link></li>
        <li><Link href="/concepts/prop-basics">Prop Basics</Link></li>
        <li><Link href="/concepts/parent-child">Parent → Child</Link></li>
        <li><Link href="/concepts/props-children">props.children</Link></li>
      </ul>
      <p className={styles.note}>All demos are simple function components (no hooks yet).</p>
    </div>
  );
}


/*
1. explain folder strcuture
2. explain what is jsx 
3. explain how css is added 
4. explain how we enter js mode

8. what is component
9. component names should be in caps
10. what are props, custom props

5. explain page.js
6. explain layout
7. explain routing in next 

*/

