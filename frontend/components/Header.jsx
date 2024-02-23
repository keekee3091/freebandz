import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Popover } from 'react-tiny-popover';

function Header() {
    const user = useSelector(state => state.user);
    const isLogged = user.token != null;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
                <h1>Finance Manager</h1>
            </div>
            <LoggedInProfile isLogged={isLogged} />
        </header>
    );
}

function LoggedInProfile({ isLogged }) {
    const popoverContent = (
        <div className={styles.popoverContainer}>
            <div className={styles.popoverLink}>
                <Link href='/personal'>
                    <a>Your Profile</a>
                </Link>
            </div>
            <div className={styles.popoverDisconnect}>
                <div onClick={() => console.log("Disconnect")}>Disconnect</div>
            </div>
        </div>
    );

    return (
        <>
            {isLogged && (
                <Popover
                    isOpen={true}
                    positions={['bottom']}
                    content={popoverContent}
                >
                    <button className={styles.profileButton}>
                        <img src="/profile-icon.png" alt="Profile" />
                    </button>
                </Popover>
            )}
        </>
    );
}

export default Header;
