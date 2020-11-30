import React from 'react'
import { useSelector } from 'react-redux'
import CreateNews from './CreateNews'
import './News.css'


const NewsList = () => {
    const news = useSelector(state => state.news)
    return<>
        <input type="text" placeholder="Search" className='ser'/>
        <CreateNews />
        <div className="news">
            <div className="card">
                <div className="card__name">News</div>
                <div className="card__date">27.11.2020</div>
                <div className="card__text">jkdddddddd</div>
            </div>
        </div>
    </>
}

export default NewsList