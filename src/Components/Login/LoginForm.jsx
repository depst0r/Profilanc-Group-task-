import React, { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

const [userName, setUserName] = useState('')
const [userPass, setUserPass] = useState('')
const [validate, setValidate] = useState(Boolean)


const submitHandler = e => {
    e.preventDefault()
}



const btnHandle = () => {
    if ((userName === 'admin' && userPass === 'admin') || (userName === 'user' && userPass === 'user')) {
        setValidate(true)
    } else {
        setValidate(false)
    }

    validate ? console.log(true) : console.log(false)
}

    return <>
        <div className="wrapper">
        <form onSubmit={submitHandler}>
        <div className="group">
        <label>Login</label>      
            <input
            className="form-control" 
            type="text" 
            onChange={e => setUserName(e.target.value)}
            value={userName}
            required
            />
            <span className="bar"></span>
        </div>
        <div className="group">
        <label className="mt-2">Password</label>      
            <input 
            className="form-control"
            type="password" 
            onChange={e => setUserPass(e.target.value)}
            value={userPass}
            required 
            />
            <span className="bar"></span>
        </div>
        <button 
        className="btn btn-primary col mt-4"
        onClick={btnHandle}
        >
            Войти
        </button>
        </form>
        </div>
    </>
}