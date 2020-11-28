import React from 'react'

export const CreateNews = () => {

    const submitHadl = e => {
        e.preventDefault()
    }

    return <>
        <form onSubmit={submitHadl}>
            <div className="title">
                <input type="text" placeholder="Title"/>
                <input type="date"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="news"></textarea>
            </div>

        </form>
    </>
}