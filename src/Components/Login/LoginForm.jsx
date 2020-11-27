import React from 'react'
import './LoginForm.css'

export const LoginForm = () => {

    return <>
        <div className="wrapper">
        <form>
        <div class="group">      
            <input type="text" required />
            <span class="bar"></span>
            <label>Имя</label>
        </div>
        <div class="group">      
            <input type="password" required />
            <span class="bar"></span>
            <label>Пароль</label>
        </div>
        <button>Click</button>
        </form>
        </div>
    </>
}