import React from 'react'
import './LoginForm.css'

export const LoginForm = () => {


const loginHandler = () => {

}

const submitHandler = e => {
    e.preventDefault()
}

const errorMesage = () => {

}

    return <>
        <div className="wrapper">
        <form onSubmit={submitHandler}>
        <div className="group">      
            <input 
            type="text" 
            required
            />
            <span className="bar"></span>
            <label>Login</label>
        </div>
        <div className="group">      
            <input 
            type="password" 
            required 
            />
            <span className="bar"></span>
            <label>Password</label>
        </div>
        <button 
        onClick={loginHandler}
        >
            Войти
        </button>
        </form>
        </div>
    </>
}