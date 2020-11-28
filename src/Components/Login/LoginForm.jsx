import React, { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

const [userName, setUserName] = useState('')
const [userPass, setUserPass] = useState('')


const submitHandler = e => {
    e.preventDefault()
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
        >
            Войти
        </button>
        </form>
        </div>
    </>
}