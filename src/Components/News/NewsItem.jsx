import React from 'react'

export const NewsItem = ({news}) => {
    return<>
        <div class="row">
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <p>{news.date}</p>
                <h5 class="card-title">{news.title}</h5>
                <p class="card-text">{news.text}</p>
                <button class="btn btn-warning m-2">Accept</button>
                <button class="btn btn-danger m-2">Delete</button>
            </div>
            </div>
        </div>
        </div>
    </>
}