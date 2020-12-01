import React, { useState } from 'react'
import { addNews } from '../../Redux/Actions/actions'

export const CreateNews = () => {

const [title, setTitle] = useState()
const [text, setText] = useState()
   
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
                    addNews(
                        {
                            id: Date.now(),
                            date: new Date().toLocaleDateString(),
                            title: title,
                            text: text
                        }
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


