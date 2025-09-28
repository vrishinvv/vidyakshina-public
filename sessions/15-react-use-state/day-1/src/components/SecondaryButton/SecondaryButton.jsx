import styles from './SecondaryButton.module.css';

export default function SecondaryButton({ children, ...props }) {
  return (
    <button className={styles.btn} type="button" {...props}>
      {restOfProps.text}
      {children}
    </button>
  );
}
