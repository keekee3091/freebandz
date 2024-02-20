// SignIn.jsx
import styles from '../styles/SignIn.module.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

function SignIn({ isOpen, closeModal, handleSignIn }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn(identifier, password);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email or Username"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className={styles.inputField} // Apply the class here
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputField} // Apply the class here
                />
                <button type="submit" className={styles.button}>Sign In</button>
            </form>
        </Modal>
    );
}

export default SignIn;
