import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Welcome to Your Micro SaaS Finance Manager</h1>
      <p className={styles.description}>Track your finances easily with our intuitive platform.</p>
      <div className={styles.ctaButtons}>
        <Link href='/login'>
          <a className={`${styles.primaryButton} ${styles.signupButton}`}>Sign Up</a>
        </Link>
        <button className={styles.secondaryButton}>Learn More</button>
      </div>
    </div>
  );
}

export default Banner;
