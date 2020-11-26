import React from 'react'

export const NewsList = () => {
    return<>
        <input type="text" placeholder="Search"/>
        <div className="news">
            <div className="card">
                <div className="card__name"></div>
                <div className="card__date"></div>
                <div className="card__text"></div>
            </div>
        </div>
    </>
}