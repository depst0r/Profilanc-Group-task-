import React from 'react'

export const NewsItem = ({ news }) => {
    console.log('newsItems', news);
    return<>
    <div className="news">
        <div className="card">
            <div className="card__name"></div>
            <div className="card__date">27.11.2020</div>
            <div className="card__text">jkdddddddd</div>
        </div>
    </div>
    </>
}