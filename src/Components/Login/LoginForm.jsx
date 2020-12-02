import React, { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

const [userName, setUserName] = useState('')
const [userPass, setUserPass] = useState('')


const submitHandler = e => {
    e.preventDefault()
}


const btnHandle = () => {
    if ((userName === 'admin' && userPass === 'admin') || (userName === 'user' && userPass === 'user')) {
        console.log('true')
    } else {
        console.log(false);
    }
}

    return <>
        <div className="wrapper">
        <form onSubmit={submitHandler}>
        <div className="group">      
            <input 
            type="text" 
            onChange={e => setUserName(e.target.value)}
            value={userName}
            required
            />
            <span className="bar"></span>
            <label>Login</label>
        </div>
        <div className="group">      
            <input 
            type="password" 
            onChange={e => setUserPass(e.target.value)}
            value={userPass}
            required 
            />
            <span className="bar"></span>
            <label>Password</label>
        </div>
        <button 
        onClick={btnHandle}
        >
            Войти
        </button>
        </form>
        </div>
    </>
}