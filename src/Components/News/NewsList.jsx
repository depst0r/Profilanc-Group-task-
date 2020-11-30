import React from 'react'
import { CreateNews } from './CreateNews'
import './News.css'


const NewsList = () => {
    return<>
        <CreateNews/>
        {/* <div>
            {oneNews.news.map(news=> {
              return  <div className="news" key={news.id}>
              <div className="card">
                <div className="card__name">{news.title}</div>
                <div className="card__date">{news.date}</div>
                <div className="card__text">{news.text}</div>
              </div>
          </div>
            })}
        </div> */}
    </>
}

export default NewsList