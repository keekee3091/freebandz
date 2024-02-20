import React from 'react';
import styles from '../styles/Header.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/user';

function Header() {

    const user = useSelector(state => state.user.value)
    const isLogged = user.token != null

    const logout = () => {
        useDispatch(l)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
                <h1>Finance Manager</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">Home</a></li>
                    <li className={styles.navItem}><a href="/about">About</a></li>
                    <li className={styles.navItem}><a href="/services">Services</a></li>
                    <li className={styles.navItem}><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.loginButtons}>
                <button className={styles.loginButton}>Register</button>
                <button className={styles.loginButton}>Login</button>
            </div>
        </header>
    );
}

export default Header;
