import Greeting from '../Greeting/Greeting';
import styles from './UserCard.module.css';

export default function UserCard(props) {
  return (
    <div className={styles.card}>
        <div className={styles.name}>
            {props.name} 
        </div>
        <div className={styles.role}>
            {props.role}
        </div>
        <Greeting name={props.name}></Greeting>
    </div>
  );
}
