import styles from './PrimaryButton.module.css';

export default function PrimaryButton(props) {
  const {children, ...restOfprops} = props; // children is created for you by react automatically
  
  return (
    <>
    <button className={styles.btn} type="button" {...restOfprops}>
      {children}
    </button>
    </>

  );
}
