import React, { useState  } from 'react'
import './LoginForm.css'

export const LoginForm = () => {
    const [auth, setAuth] = useState(false)

    return <>
<form>
   <div class="group">      
      <input type="text" required />
      <span class="bar"></span>
      <label>Имя</label>
   </div>
   <div class="group">      
      <input type="text" required />
      <span class="bar"></span>
      <label>Email</label>
   </div>
</form>
    </>
}