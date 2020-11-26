import React, { useState  } from 'react'

export const LoginForm = () => {
    const [auth, setAuth] = useState(false)

    return <>
        <form>
    <div>
        <label>Авторизация</label>
        <input type="text"/>
    </div>
    <div>
        <label>Пароль</label>
        <input type="pass"/>
    </div>
        <button>Вход</button>
        </form>
    </>
}