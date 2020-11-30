import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNews } from '../../Redux/Actions/actions'
import { CreateNews } from './CreateNews'
import './News.css'


const NewsList = () => {
    const oneNews = useSelector(state => state)
    const dispatch = useDispatch()
    return<>
        <CreateNews/>
        <div>
            {oneNews.news.map(news=> {
              return  <div className="news" key={news.id}>
              <div className="card">
                <div className="card__name">{news.title}</div>
                <div className="card__date">{news.date}</div>
                <div className="card__text">{news.text}</div>
                <button onClick={() => dispatch(removeNews(news.id))}>Delete</button>
                
              </div>
          </div>
            })}
        </div>
    </>
}

export default NewsList