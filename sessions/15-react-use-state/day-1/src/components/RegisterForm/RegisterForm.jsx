import styles from '@/components/RegisterForm/RegisterForm.module.css';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Register</h2>
        <input className={styles.input} placeholder="Username" />
        <input className={styles.input} placeholder="Password" type="password" />
        <PrimaryButton>Create Account</PrimaryButton>
        <p className={styles.helper}>
          Already have an account? <Link href="/concepts/auth/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
