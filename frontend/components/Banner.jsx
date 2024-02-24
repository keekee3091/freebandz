import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Banner() {
  const user = useSelector(state => state.user);
  const router = useRouter();
  const isLogged = user.token != null;

  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Welcome to Your Micro SaaS Finance Manager</h1>
      <p className={styles.description}>Track your finances easily with our intuitive platform.</p>
      <div className={styles.ctaButtons}>
        <Link href='/'>
          <a className={styles.learnMoreButton}>Learn More</a>
        </Link>
        {!isLogged ? (
          <button className={styles.learnMoreButton} onClick={() => router.push('/login')}>
            Login
          </button>
        ) : (
          <Link href='/personal'>
            <a className={styles.profileButton}>Your Profile</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Banner;
