import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { loginUser } from '../reducers/user';
import './styles/tailwind.css';
import Home from '../components/Home';


function login() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false)

    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if (isSignIn) {
            handleSignIn()
        }
    }, [])

    const handleSignIn = () => {
        setIsSignIn(false)
    }

    Modal.setAppElement('body')

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const handleRegister = async (username, email, password) => {
        try {
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            }

            const response = await fetch('http://localhost:3000/users/signup', config)
            const data = response.json

            if (data.result) {
                dispatch(loginUser({ username, email, token: data.token }))
            }
        } catch (error) {
            console.error({ message: error.message })
        }
    }

    const handleLogin = async (identifier, password) => {
        try {
            setIsSignIn(false)
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, password })
            }

            const response = await fetch('http://localhost:3000/users/signin', config)
            const data = response.json

            if (data.result) {
                dispatch(loginUser({ token: data.token, username: data.username }))
            }
        } catch (error) {
            console.error({ message: error.message })
        }
    }

    return (

        <>
            <div className={styles.loginBody}>

                <div className={styles.loginContainer}>

                    <img className={styles.logo} src='placeholer' />

                </div>
                <div className={styles.container}>

                    <h1 className={styles.title}><p>Join FreeBandz today, nigga !</p></h1>

                    <h2 className={styles.subTitle}>Fuck is you waiting on, nigga ?</h2>

                    <button className={styles.button} onClick={() => { setIsSignIn(false); openModal() }}>Register</button>

                    <h2 className={styles.subTitle}>I'm butta cuuuuuum</h2>

                    <button className={styles.button} onClick={() => { setIsSignIn(true); openModal() }}>Login</button>

                    <Home />

                </div>


            </div>
        </>

    );
}



export default login;
