import { NAME, PASS } from '../Actions/actionTypes'

const initialState = {
    name: '',
    pass: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME:
                console.log('NAME', action.data)
            return {
                ...state,
                name: action.data
            }
        case PASS:
            console.log('PASS', action.data)
            return {
                ...state,
                pass: action.data
            }
        default:
            return state
    }
}