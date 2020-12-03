import React from 'react'
import Popup from 'reactjs-popup'
import { LoginForm } from '../Login/LoginForm'
import './PoPup.css'

export const PoPup = () => (
<Popup 
        trigger={ <li>Вход/Выход</li> } 
        >
        <LoginForm/>
    </Popup>

  )