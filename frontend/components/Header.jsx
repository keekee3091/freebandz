import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/user';
import { Popover } from 'react-tiny-popover';
import Router, { useRouter } from 'next/router'
import { useState } from 'react';

function Header() {

    const [popoverContentOpen, setPopoverContentOpen] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const router = useRouter()
    const isLogged = user.token != null


    const logout = () => {
        dispatch(logoutUser());
        router.push('/')
    }

    const popoverContent = (
        <div className={styles.popoverContainer}>
            <div className={styles.popoverLink}>
                <Link href='/personnal'>Your profile</Link>
            </div>
            <div className={styles.popoverDisconnect}>
                <div onClick={() => { logout(); setPopoverContentOpen(false) }}>Disconnect</div>
            </div>
        </div>
    )

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
                <h1>Finance Manager</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <Link className={styles.navItem} href='/'>Home</Link>
                </ul>
            </nav>
            <div className={styles.loginButtons}>
                {
                    !isLogged ?
                        <button className={styles.loginButton} onClick={() => router.push('/login')}>
                            Login
                        </button>
                        :
                        <>
                            <Popover
                                isOpen={popoverContentOpen}
                                positions={['bottom']}
                                content={popoverContent}
                            >
                                <div className={styles.profile}></div>
                            </Popover>
                        </>
                }
            </div>
        </header >
    );
}

export default Header;
