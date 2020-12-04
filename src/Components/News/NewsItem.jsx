import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNews, toggleNews } from '../../Redux/Actions/actions'

export const NewsItem = ({ news }) => {
    const dispatch = useDispatch()

    return<>
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <p>{news.date}</p>
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.text}</p>
                <button 
                className="btn btn-warning m-2"
                onClick={() => dispatch(toggleNews(news.completed = !news.completed))}
                >Accept</button>
                <button 
                onClick={() => dispatch(removeNews(news.id))}
                className="btn btn-danger m-2"
                >Delete</button>
            </div>
            </div>
        </div>
        </div>
    </>
}