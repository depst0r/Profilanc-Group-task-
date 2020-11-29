import React from 'react'
import { connect } from 'react-redux'

export const NewsList = () => {
    return<>
        <input type="text" placeholder="Search"/>
        <div className="news">
            <div className="card">
                <div className="card__name">News</div>
                <div className="card__date">27.11.2020</div>
                <div className="card__text">jkdddddddd</div>
            </div>
        </div>
    </>
}