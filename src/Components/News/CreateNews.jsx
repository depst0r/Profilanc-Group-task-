import React, { useState } from 'react'
import { addNews } from '../../Redux/Actions/actions'
import { useDispatch } from 'react-redux'

export const CreateNews = () => {

const [title, setTitle] = useState()
const [text, setText] = useState()
const dispatch = useDispatch()
   
    return <>
        <div>
            <div className="row m-2">
                <input 
                type="Text"
                className="col form-control" 
                placeholder="title"
                onSubmit={e => setTitle(e.target.value)}
                value={title}
                />
                <input 
                type="text"
                className="col form-control" 
                placeholder="Text"
                onSubmit={e => setText(e.target.value)}
                value={text}
                />
                <button 
                onClick={() => {
                    dispatch(
                        addNews(
                            {
                                id: Date.now(),
                                date: new Date().toLocaleDateString(),
                                title: title,
                                text: text,
                                compoleted: false 
                            }
                        )
                    )
                    setTitle('')
                    setText('')
                }}
                className="col btn btn-primary mx-2">
                    Post News
                </button>
            </div>
        </div>
</>
}


