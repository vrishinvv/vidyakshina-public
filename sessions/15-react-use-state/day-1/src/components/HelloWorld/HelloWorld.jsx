import styles from './HelloWorld.module.css'

export default function HelloWorld(props){
    const a = 1
    const b = 2
    return <div className={styles.bordered_box}>
        Hello world! {a + b}
    </div>
}