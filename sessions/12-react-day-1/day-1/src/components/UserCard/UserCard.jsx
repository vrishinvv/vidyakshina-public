import styles from './UserCard.module.css';

export default function UserCard({ name, role }) {
  return (
    <div className={styles.card}>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.role}>
            {role}
        </div>
    </div>
  );
}
