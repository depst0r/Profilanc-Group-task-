import React from 'react'
import  './header.css'
import { Link } from 'react-router-dom'
import {PoPup} from '../../Components/PoPup/PoPup'

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
            <PoPup/>
        </ul>
    </header>
    </>
}