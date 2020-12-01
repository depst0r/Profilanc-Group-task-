import React from 'react'

export const CreateNews = () => {

    return <>
        <div>
            <div className="row m-2">
                <input type="Text"
                className="col form-control" 
                placeholder="title"
                />
                <input type="text"
                className="col form-control" 
                placeholder="Text"
                />
                <button 
                className="col btn btn-primary mx-2">
                    Post News
                </button>
            </div>
        </div>
    </>
}


