import React from 'react'
import  './header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return <>
    <header>
        <ul>
            <Link to='/'>
                <li>Главная</li>
            </Link>
            <Link to='/news'>
                <li>Новости</li>
            </Link>
            <li>Вход/Выход</li>
        </ul>
    </header>
    </>
}