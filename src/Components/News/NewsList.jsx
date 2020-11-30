import React from 'react'
import { useSelector } from 'react-redux'
import './News.css'
import { NewsItem } from './NewsItem'


const NewsList = () => {
    const oneNews = useSelector(state => state)
    return<>
        {/* <input type="text" placeholder="Search" className='ser'/>
        <CreateNews /> */}
        <div>
            {oneNews.news.map((news, index) => {
              return  <div className="news">
              <div className="card" key={index}>
            <div className="card__name">{news.title}</div>
            <div className="card__date">{news.date}</div>
            <div className="card__text">{news.text}</div>
              </div>
          </div>
            })}
        </div>
    </>
}

export default NewsList