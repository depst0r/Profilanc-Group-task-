import React, { useState  } from 'react'
import './LoginForm.css'

export const LoginForm = () => {
    const [auth, setAuth] = useState(false)

    return <>
        <div className="wrapper">
            <div className="form">
            <form>
        <div className="form__login">
            <label>Авторизация</label>
            <input type="text"/>
        </div>
        <div className="form__password">
            <label>Пароль</label>
            <input type="pass"/>
        </div>
            <button className="form__btn">Вход</button>
        </form>
            </div>
        </div>
    </>
}