import React from 'react';
import styles from '../styles/Home.module.css'; // Import your CSS module

function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Welcome to Your Micro SaaS Finance Manager</h1>
      <p className={styles.description}>Track your finances easily with our intuitive platform.</p>
      <div className={styles.ctaButtons}>
        <button className={styles.primaryButton}>Sign Up</button>
        <button className={styles.secondaryButton}>Learn More</button>
      </div>
    </div>
  );
}

export default Banner;
