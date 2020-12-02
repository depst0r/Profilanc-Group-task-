import React from 'react'
import Popup from 'reactjs-popup'
import { LoginForm } from '../Login/LoginForm'

export const PoPup = () => (
    <Popup 
    trigger={ <li>Вход/Выход</li>} 
    position="absolut">
      <div>
        <LoginForm/>
      </div>
    </Popup>
  )