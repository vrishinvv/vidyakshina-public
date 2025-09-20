import styles from './Greeting.module.css';

export default function Greeting({ name = 'friend' }) {
  return <p className={styles.greeting}>Hello, {name}!</p>;
}
