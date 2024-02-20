import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/Signup.module.css';

function SignUp({ isOpen, closeModal, handleSignUp }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp(username, email, password);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField} // Apply the class here
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField} // Apply the class here
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputField} // Apply the class here
                />
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
        </Modal>
    );
}

export default SignUp;
