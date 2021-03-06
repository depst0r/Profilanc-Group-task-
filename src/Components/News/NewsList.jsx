import React from 'react'
import { useSelector } from 'react-redux'
import { CreateNews } from './CreateNews'
import { NewsItem } from './NewsItem'


const NewsList = () => {
  let newsItem = useSelector(state => state.news)
    return<>
        <CreateNews/>
      <div className="my-3">  
        {newsItem.map(news => {
          return <NewsItem key={news.id}  news={news}/>
        })}
      </div>
    </>
}

export default NewsList