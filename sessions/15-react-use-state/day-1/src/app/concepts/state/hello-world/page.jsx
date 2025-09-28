import HelloWorld from '@/components/HelloWorld/HelloWorld';
import styles from './styles.module.css';

export default function Page() {
    return (
        <div className={styles.wrap}>
            <HelloWorld></HelloWorld>
        </div>
    );
}
