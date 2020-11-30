import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../../Redux/Actions/actions'
import './News.css'

export const CreateNews = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    return <>
        <input type="text" placeholder="Search" className='ser'/>
        <input 
        type="text" 
        placeholder="News-Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="News-Text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button onClick={() => {
            dispatch(
                addNews(
                    {
                        id: Date.now(),
                        title: title,
                        text: text
                    }
                )
            )
            setTitle('')
            setText('')
        }}>Post News</button>
    </>
}


