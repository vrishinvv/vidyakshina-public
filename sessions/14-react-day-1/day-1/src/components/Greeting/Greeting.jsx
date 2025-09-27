import styles from './Greeting.module.css';

export default function Greeting(props) {
  // const name = propsssss.name
  const {
    name, 
    age
  } = props
  
  return <p className={styles.greeting}>Hello, {name} and you are {age} years old!</p>;
}
