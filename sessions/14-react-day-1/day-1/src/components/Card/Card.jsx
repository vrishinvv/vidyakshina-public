import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}> 
        <h3 className={styles.title}>
            {props.title}
        </h3>
        <div className={styles.body}>
            {props.children}
        </div>
    </div>
  );
}
