import styles from './SecondaryButton.module.css';

export default function SecondaryButton({ children, ...restProps }) {
  return (
    <button className={styles.btn} type="button" {...restProps}>
      {children}
    </button>
  );
}
