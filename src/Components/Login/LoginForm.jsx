import React from 'react'
import { connect } from 'react-redux'
import { NAME, PASS } from '../../Redux/Actions/actions'
import './LoginForm.css'

const LoginForm = () => {

const loginHandler = e => {
    if (e.target.value === 'Admin' || e.target.value === 'User') {
        console.log('true');
    } else {
        console.log(false);
    }
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
            onChange={loginHandler}
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



export default LoginForm