import React, { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

const [userName, setUserName] = useState('Гость')
const [userPass, setUserPass] = useState('')


const submitHandler = e => {
    e.preventDefault()
}


const validate = () => {
    
}

    return <>
        <div className="wrapper">
        <form onSubmit={submitHandler}>
        <div className="group">      
            <input 
            type="text" 
            onBlur={e => setUserName(e.target.value)}
            value={userName}
            required
            />
            <span className="bar"></span>
            <label>Login</label>
        </div>
        <div className="group">      
            <input 
            type="password" 
            onBlur={e => setUserPass(e.target.value)}
            value={userPass}
            required 
            />
            <span className="bar"></span>
            <label>Password</label>
        </div>
        <button 
        >
            Войти
        </button>
        </form>
        </div>
    </>
}