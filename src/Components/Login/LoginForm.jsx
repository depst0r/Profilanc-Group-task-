import React, { useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { pass, name} from '../../Redux/Actions/actions'
import './LoginForm.css'

const LoginForm = () => {

const inputRef = useRef(null)

const handler = useCallback(() => {
    name(inputRef.current.value)
}, [inputRef, name])


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
            ref={inputRef}
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
        onClick={handler}
        >
            Войти
        </button>
        </form>
        </div>
    </>
}

const mapStateToProps = state => ({
    name: state.name
})

const mapDispatchToProps = {
    name
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm)