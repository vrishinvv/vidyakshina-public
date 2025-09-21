import styles from './Greeting.module.css';

export default function Greeting(props) {
  return <p className={styles.greeting}>Hello, {props.name}!</p>;
}
