import React from 'react'
import { connect } from 'react-redux'
import './News.css'

export const CreateNews = () => {

    const submitHadl = e => {
        e.preventDefault()
    }

    return <>
        <form className='form' onSubmit={submitHadl}>
            <div className="title">
                <input type="text" placeholder="Title"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="news"></textarea>
                <button>post news</button>
            </div>

        </form>
    </>
}