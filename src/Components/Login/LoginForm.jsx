import React, { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

const [name, setName] = useState('')
const [pass, setPass] = useState('')

    const prevDef = e => {
        e.preventDefault()
    }


    return <>
        <div className="wrapper">
        <form>
        <div className="group">      
            <input 
            type="text" 
            required
            />
            <span className="bar"></span>
            <label>Имя</label>
        </div>
        <div className="group">      
            <input 
            type="password" 
            required 
            />
            <span className="bar"></span>
            <label>Пароль</label>
        </div>
        <button 
        onClick={prevDef}
        >
            Click
        </button>
        </form>
        </div>
    </>
}