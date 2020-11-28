import { NEWS } from '../Actions/actionTypes'

const initialState = {
        news: '',
        

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NEWS:
                console.log('NAME', action.news)
            return {
                ...state,
                news: action.news,
            }
        default:
            return state
    }
}