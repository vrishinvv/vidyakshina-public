import styles from './page.module.css' // notice how all css files are captures as a JS object

export default function Page() {
  const name = "Asha";
  const n = 2, m = 3;

  const iCanStoreHTMLinVariables = <p className={styles.note}>Vidyakshina - entering react :0</p> // this works!

  return (
    <div>
        {/* notice how we use "className" to attach css styling to tags */} 
        <h2 className={styles.title}>JSX demo</h2>
        {/* notice how opening curly brackets will let us enter js mode */}
        <p>Hi, {name}! {n} + {m} = {n + m}</p>
        <p>{m > n ? "m is greater" : "n is greater or equal"}</p>
        {iCanStoreHTMLinVariables}
    </div>
  );
}
