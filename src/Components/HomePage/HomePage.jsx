import React from 'react'
import { useSelector } from 'react-redux'

export const HomePage = () => {
    const state = useSelector(state => state.users)

    const name = state.map(res => res.userName)
    
    return <>
        <h1>Привет {name} </h1>
    </>
}