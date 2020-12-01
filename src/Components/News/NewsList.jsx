import React from 'react'
import { CreateNews } from './CreateNews'
import { NewsItem } from './NewsItem'


const NewsList = () => {
    return<>
          <CreateNews/>
          <h3>News</h3>
          <NewsItem />
          <NewsItem />
          <NewsItem />
    </>
}

export default NewsList