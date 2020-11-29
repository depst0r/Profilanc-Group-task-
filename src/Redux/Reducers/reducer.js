import { ADD_NEWS, DELETE_NEWS } from '../Actions/actionTypes'

const initialState = {
        news: '',
        id: '',
        

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEWS:
                console.log('ADD', action.news)
            return {
                ...state,
                news: action.news,
                id: action.id,
            }
        default:
            return state
    }
}