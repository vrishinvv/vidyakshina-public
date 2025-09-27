import styles from '@/components/LoginForm/LoginForm.module.css';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import Link from 'next/link';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

export default function LoginForm(props) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Sign In</h2>
        <input className={styles.input} placeholder="Username" />
        <input className={styles.input} placeholder="Password" type="password" />
        <PrimaryButton name="vrishin" age="24" school="PS">
          Sign InNNNNNNN
          <div> hello</div>
        </PrimaryButton>
        <SecondaryButton>Register</SecondaryButton>
        {/* <p className={styles.helper}>
          No account? <Link href="/concepts/auth/register">Register</Link>
        </p> */}
      </div>
    </div>
  );
}
